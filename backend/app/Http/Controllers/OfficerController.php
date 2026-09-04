<?php

namespace App\Http\Controllers;

use App\Models\Officer;
use Illuminate\Http\Request;

class OfficerController extends Controller
{
    // publik — nampilin officer per department (buat halaman DepartmentDetail)
    public function index($departmentId)
    {
        $officers = Officer::where('department_id', $departmentId)
            ->orderBy('level')
            ->get();

        return response()->json([
            'success' => true,
            'message' => 'Data officer berhasil diambil',
            'data' => $officers
        ], 200);
    }

    public function store(Request $request, $departmentId)
    {
        $user = $request->user();

        if (!$user->is_superadmin && (int) $user->department_id !== (int) $departmentId) {
            return response()->json([
                'success' => false,
                'message' => 'Tidak punya akses ke department ini'
            ], 403);
        }

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'position' => 'required|string|max:255',
            'level' => 'required|integer',
            'photo_url' => 'nullable|string',
        ]);

        $validated['department_id'] = $departmentId;

        $officer = Officer::create($validated);

        return response()->json([
            'success' => true,
            'message' => 'Officer berhasil ditambahkan',
            'data' => $officer
        ], 201);
    }

    public function update(Request $request, $id)
    {
        $officer = Officer::find($id);

        if (!$officer) {
            return response()->json([
                'success' => false,
                'message' => 'Officer tidak ditemukan'
            ], 404);
        }

        $user = $request->user();

        if (!$user->is_superadmin && (int) $user->department_id !== (int) $officer->department_id) {
            return response()->json([
                'success' => false,
                'message' => 'Tidak punya akses ke department ini'
            ], 403);
        }

        $validated = $request->validate([
            'name' => 'sometimes|string|max:255',
            'position' => 'sometimes|string|max:255',
            'level' => 'sometimes|integer',
            'photo_url' => 'nullable|string',
        ]);

        $officer->update($validated);

        return response()->json([
            'success' => true,
            'message' => 'Officer berhasil diupdate',
            'data' => $officer
        ], 200);
    }

    public function destroy(Request $request, $id)
    {
        $officer = Officer::find($id);

        if (!$officer) {
            return response()->json([
                'success' => false,
                'message' => 'Officer tidak ditemukan'
            ], 404);
        }

        $user = $request->user();

        if (!$user->is_superadmin && (int) $user->department_id !== (int) $officer->department_id) {
            return response()->json([
                'success' => false,
                'message' => 'Tidak punya akses ke department ini'
            ], 403);
        }

        $officer->delete();

        return response()->json([
            'success' => true,
            'message' => 'Officer berhasil dihapus'
        ], 200);
    }
}
