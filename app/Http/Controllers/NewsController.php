<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\News;

class NewsController extends Controller
{
    public function index()
    {
        try {
            $news = News::all();

            if ($news->isEmpty()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Data news tidak ditemukan',
                    'data' => []
                ], 404);
            }

            return response()->json([
                'success' => true,
                'message' => 'Data news berhasil diambil',
                'data' => $news
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
            $news = News::find($id);

            if (!$news) {
                return response()->json([
                    'success' => false,
                    'message' => 'Data news tidak ditemukan',
                    'data' => []
                ], 404);
            }

            return response()->json([
                'success' => true,
                'message' => 'Data news berhasil diambil',
                'data' => $news
            ], 200);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Terjadi kesalahan pada server'
            ], 500);
        }
    }
}
