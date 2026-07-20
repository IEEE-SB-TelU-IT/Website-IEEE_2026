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
}
