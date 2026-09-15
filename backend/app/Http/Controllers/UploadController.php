<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;

class UploadController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'file' => 'required|image|max:8192',
            'folder' => 'nullable|string|max:50',
        ]);

        $file = $request->file('file');

        $folder = $request->input('folder', 'uploads');

        // Sanitasi nama folder
        $folder = preg_replace('/[^a-zA-Z0-9_-]/', '', $folder);

        if (empty($folder)) {
            $folder = 'uploads';
        }

        $filename = Str::uuid() . '.' . strtolower(
            $file->getClientOriginalExtension()
        );

        $path = $folder . '/' . $filename;

        $supabaseUrl = rtrim(env('SUPABASE_URL'), '/');
        $serviceRoleKey = env('SUPABASE_SERVICE_ROLE_KEY');
        $bucket = env('SUPABASE_STORAGE_BUCKET', 'ieee-media');

        if (!$supabaseUrl || !$serviceRoleKey) {
            return response()->json([
                'success' => false,
                'message' => 'Konfigurasi Supabase Storage belum lengkap',
            ], 500);
        }

        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . $serviceRoleKey,
            'apikey' => $serviceRoleKey,
            'Content-Type' => $file->getMimeType(),
            'x-upsert' => 'false',
        ])
        ->withBody(
            file_get_contents($file->getRealPath()),
            $file->getMimeType()
        )
        ->post(
            "{$supabaseUrl}/storage/v1/object/{$bucket}/{$path}"
        );

        if (!$response->successful()) {
            return response()->json([
                'success' => false,
                'message' => 'Upload ke Supabase gagal',
                'error' => $response->json(),
            ], $response->status());
        }

        $publicUrl =
            "{$supabaseUrl}/storage/v1/object/public/{$bucket}/{$path}";

        return response()->json([
            'success' => true,
            'message' => 'File berhasil diupload',
            'url' => $publicUrl,
            'path' => $path,
        ], 201);
    }

    public function destroy(Request $request)
{
    $request->validate([
        'path' => 'required|string',
    ]);

    $path = $request->input('path');

    // Validasi path
    if (
        str_contains($path, '..') ||
        str_starts_with($path, '/') ||
        !preg_match('/^[a-zA-Z0-9_\-\/\.]+$/', $path)
    ) {
        return response()->json([
            'success' => false,
            'message' => 'Path file tidak valid',
        ], 422);
    }

    $supabaseUrl = rtrim(env('SUPABASE_URL'), '/');
    $serviceRoleKey = env('SUPABASE_SERVICE_ROLE_KEY');
    $bucket = env('SUPABASE_STORAGE_BUCKET', 'ieee-media');

    if (!$supabaseUrl || !$serviceRoleKey) {
        return response()->json([
            'success' => false,
            'message' => 'Konfigurasi Supabase Storage belum lengkap',
        ], 500);
    }

    $response = Http::withHeaders([
        'Authorization' => 'Bearer ' . $serviceRoleKey,
        'apikey' => $serviceRoleKey,
        'Content-Type' => 'application/json',
    ])
    ->withBody(
        json_encode([
            'prefixes' => [$path],
        ]),
        'application/json'
    )
    ->delete(
        "{$supabaseUrl}/storage/v1/object/{$bucket}"
    );

    if (!$response->successful()) {
        return response()->json([
            'success' => false,
            'message' => 'Gagal menghapus file dari Supabase',
            'status' => $response->status(),
            'error' => $response->json(),
            'body' => $response->body(),
        ], $response->status());
    }

    return response()->json([
        'success' => true,
        'message' => 'File berhasil dihapus dari Supabase',
        'path' => $path,
        'supabase_response' => $response->json(),
    ]);
}
}