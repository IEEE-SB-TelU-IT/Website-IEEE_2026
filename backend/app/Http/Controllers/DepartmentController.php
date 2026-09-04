<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Department;

class DepartmentController extends Controller
{
    public function index()
    {
        try {
            $departments = Department::all();

            if ($departments->isEmpty()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Data department tidak ditemukan',
                    'data' => []
                ], 404);
            }

            return response()->json([
                'success' => true,
                'message' => 'Data department berhasil diambil',
                'data' => $departments
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
        try {
            $department = Department::find($id);

            if (!$department) {
                return response()->json([
                    'success' => false,
                    'message' => 'Data department tidak ditemukan',
                    'data' => []
                ], 404);
            }

            return response()->json([
                'success' => true,
                'message' => 'Data department berhasil diambil',
                'data' => $department
            ], 200);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Terjadi kesalahan pada server'
            ], 500);
        }
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'slug' => 'required|string|max:255|unique:departments,slug',
            'label' => 'required|string|max:255',
            'accent_color' => 'nullable|string',
            'description' => 'nullable|string',
            'detail' => 'nullable|string',
            'goals' => 'nullable|string',
        ]);

        $department = Department::create($validated);

        return response()->json([
            'success' => true,
            'message' => 'Data department berhasil dibuat',
            'data' => $department
        ], 201);
    }

    public function update(Request $request, $id)
    {
        $department = Department::find($id);

        if (!$department) {
            return response()->json([
                'success' => false,
                'message' => 'Data department tidak ditemukan'
            ], 404);
        }

        $validated = $request->validate([
            'slug' => 'sometimes|string|max:255|unique:departments,slug,' . $id,
            'label' => 'sometimes|string|max:255',
            'accent_color' => 'nullable|string',
            'description' => 'nullable|string',
            'detail' => 'nullable|string',
            'goals' => 'nullable|string',
        ]);

        $department->update($validated);

        return response()->json([
            'success' => true,
            'message' => 'Data department berhasil diupdate',
            'data' => $department
        ], 200);
    }

    public function destroy($id)
    {
        $department = Department::find($id);

        if (!$department) {
            return response()->json([
                'success' => false,
                'message' => 'Data department tidak ditemukan'
            ], 404);
        }

        $department->delete();

        return response()->json([
            'success' => true,
            'message' => 'Data department berhasil dihapus'
        ], 200);
    }
}
