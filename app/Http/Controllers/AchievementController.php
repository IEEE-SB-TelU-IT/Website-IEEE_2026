<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Achievement;

class AchievementController extends Controller
{
    public function index()
    {
        try {
            $achievements = Achievement::all();

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
}
