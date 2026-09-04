<?php

namespace App\Http\Controllers;

use App\Models\Program;
use Illuminate\Http\Request;

class ProgramController extends Controller
{
    // publik — cuma yg published, buat halaman DepartmentDetail
    public function index($departmentId)
    {
        $programs = Program::where('department_id', $departmentId)
            ->where('is_published', true)
            ->get();

        return response()->json([
            'success' => true,
            'message' => 'Data program berhasil diambil',
            'data' => $programs
        ], 200);
    }

    // admin CMS — nampilin SEMUA (draft + published) satu department
    public function indexAll(Request $request, $departmentId)
    {
        $user = $request->user();

        if (!$user->is_superadmin && (int) $user->department_id !== (int) $departmentId) {
            return response()->json([
                'success' => false,
                'message' => 'Tidak punya akses ke department ini'
            ], 403);
        }

        $programs = Program::where('department_id', $departmentId)->get();

        return response()->json([
            'success' => true,
            'message' => 'Data program berhasil diambil',
            'data' => $programs
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
            'description' => 'nullable|string',
            'image_url' => 'nullable|string',
        ]);

        $validated['department_id'] = $departmentId;
        $validated['is_published'] = false; // selalu draft dulu

        $program = Program::create($validated);

        return response()->json([
            'success' => true,
            'message' => 'Draft program berhasil dibuat',
            'data' => $program
        ], 201);
    }

    public function update(Request $request, $id)
    {
        $program = Program::find($id);

        if (!$program) {
            return response()->json([
                'success' => false,
                'message' => 'Program tidak ditemukan'
            ], 404);
        }

        $user = $request->user();

        if (!$user->is_superadmin && (int) $user->department_id !== (int) $program->department_id) {
            return response()->json([
                'success' => false,
                'message' => 'Tidak punya akses ke department ini'
            ], 403);
        }

        $validated = $request->validate([
            'name' => 'sometimes|string|max:255',
            'description' => 'nullable|string',
            'image_url' => 'nullable|string',
        ]);

        $program->update($validated);

        return response()->json([
            'success' => true,
            'message' => 'Program berhasil diupdate',
            'data' => $program
        ], 200);
    }

    public function destroy(Request $request, $id)
    {
        $program = Program::find($id);

        if (!$program) {
            return response()->json([
                'success' => false,
                'message' => 'Program tidak ditemukan'
            ], 404);
        }

        $user = $request->user();

        if (!$user->is_superadmin && (int) $user->department_id !== (int) $program->department_id) {
            return response()->json([
                'success' => false,
                'message' => 'Tidak punya akses ke department ini'
            ], 403);
        }

        $program->delete();

        return response()->json([
            'success' => true,
            'message' => 'Program berhasil dihapus'
        ], 200);
    }

    public function publish(Request $request, $id)
    {
        $program = Program::find($id);

        if (!$program) {
            return response()->json([
                'success' => false,
                'message' => 'Program tidak ditemukan'
            ], 404);
        }

        $user = $request->user();

        if (!$user->is_superadmin && (int) $user->department_id !== (int) $program->department_id) {
            return response()->json([
                'success' => false,
                'message' => 'Tidak punya akses ke department ini'
            ], 403);
        }

        $missing = [];
        if (empty($program->name)) $missing[] = 'name';
        if (empty($program->description)) $missing[] = 'description';
        if (empty($program->image_url)) $missing[] = 'image_url';

        if (!empty($missing)) {
            return response()->json([
                'success' => false,
                'message' => 'Belum bisa dipublish, field berikut masih kosong: ' . implode(', ', $missing),
                'missing_fields' => $missing
            ], 422);
        }

        $program->is_published = true;
        $program->save();

        return response()->json([
            'success' => true,
            'message' => 'Program berhasil dipublish',
            'data' => $program
        ], 200);
    }

    public function unpublish(Request $request, $id)
    {
        $program = Program::find($id);

        if (!$program) {
            return response()->json([
                'success' => false,
                'message' => 'Program tidak ditemukan'
            ], 404);
        }

        $user = $request->user();

        if (!$user->is_superadmin && (int) $user->department_id !== (int) $program->department_id) {
            return response()->json([
                'success' => false,
                'message' => 'Tidak punya akses ke department ini'
            ], 403);
        }

        $program->is_published = false;
        $program->save();

        return response()->json([
            'success' => true,
            'message' => 'Program ditarik jadi draft lagi',
            'data' => $program
        ], 200);
    }
}
