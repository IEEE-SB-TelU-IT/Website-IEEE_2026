<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Achievement;

class AchievementController extends Controller
{
    public function index()
    {
        try {
            $achievements = Achievement::where('is_published', true)->get();

            if ($achievements->isEmpty()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Data achievement tidak ditemukan',
                    'data' => []
                ], 404);
            }

            return response()->json([
                'success' => true,
                'message' => 'Data achievement berhasil diambil',
                'data' => $achievements
            ], 200);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Terjadi kesalahan pada server'
            ], 500);
        }
    }

    // buat admin CMS — nampilin SEMUA (draft + published)
    public function indexAll()
    {
        try {
            $achievements = Achievement::all();

            return response()->json([
                'success' => true,
                'message' => 'Data achievement berhasil diambil',
                'data' => $achievements
            ], 200);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Terjadi kesalahan pada server'
            ], 500);
        }
    }

    public function detail($id)
    {
        $achievement = Achievement::find($id);

        if (!$achievement) {
            return response()->json([
                'success' => false,
                'message' => 'Data achievement tidak ditemukan',
                'data' => []
            ], 404);
        }

        return response()->json([
            'success' => true,
            'message' => 'Data achievement berhasil diambil',
            'data' => $achievement
        ], 200);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'category' => 'nullable|string',
            'image_url' => 'nullable|string',
        ]);

        // selalu kebuat sebagai draft — belum keliatan di web publik
        $validated['is_published'] = false;

        $achievement = Achievement::create($validated);

        return response()->json([
            'success' => true,
            'message' => 'Draft achievement berhasil dibuat',
            'data' => $achievement
        ], 201);
    }

    public function publish($id)
    {
        $achievement = Achievement::find($id);

        if (!$achievement) {
            return response()->json([
                'success' => false,
                'message' => 'Data achievement tidak ditemukan'
            ], 404);
        }

        $missing = [];
        if (empty($achievement->title)) $missing[] = 'title';
        if (empty($achievement->description)) $missing[] = 'description';
        if (empty($achievement->category)) $missing[] = 'category';
        if (empty($achievement->image_url)) $missing[] = 'image_url';

        if (!empty($missing)) {
            return response()->json([
                'success' => false,
                'message' => 'Belum bisa dipublish, field berikut masih kosong: ' . implode(', ', $missing),
                'missing_fields' => $missing
            ], 422);
        }

        $achievement->is_published = true;
        $achievement->save();

        return response()->json([
            'success' => true,
            'message' => 'Achievement berhasil dipublish',
            'data' => $achievement
        ], 200);
    }

    public function unpublish($id)
    {
        $achievement = Achievement::find($id);

        if (!$achievement) {
            return response()->json([
                'success' => false,
                'message' => 'Data achievement tidak ditemukan'
            ], 404);
        }

        $achievement->is_published = false;
        $achievement->save();

        return response()->json([
            'success' => true,
            'message' => 'Achievement ditarik jadi draft lagi',
            'data' => $achievement
        ], 200);
    }

    public function update(Request $request, $id)
    {
        $achievement = Achievement::find($id);

        if (!$achievement) {
            return response()->json([
                'success' => false,
                'message' => 'Data achievement tidak ditemukan'
            ], 404);
        }

        $validated = $request->validate([
            'title' => 'sometimes|string|max:255',
            'description' => 'nullable|string',
            'category' => 'nullable|string',
            'image_url' => 'nullable|string',
        ]);

        $achievement->update($validated);

        return response()->json([
            'success' => true,
            'message' => 'Data achievement berhasil diupdate',
            'data' => $achievement
        ], 200);
    }

    public function destroy($id)
    {
        $achievement = Achievement::find($id);

        if (!$achievement) {
            return response()->json([
                'success' => false,
                'message' => 'Data achievement tidak ditemukan'
            ], 404);
        }

        $achievement->delete();

        return response()->json([
            'success' => true,
            'message' => 'Data achievement berhasil dihapus'
        ], 200);
    }
}
