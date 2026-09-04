<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\News;

class NewsController extends Controller
{
    public function index()
    {
        try {
            $news = News::where('is_published', true)->get();

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

    // buat admin CMS — nampilin SEMUA (draft + published)
    public function indexAll()
    {
        try {
            $news = News::all();

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

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'category' => 'nullable|string',
            'image_url' => 'nullable|string',
        ]);

        // selalu kebuat sebagai draft — belum keliatan di web publik
        $validated['is_published'] = false;

        $news = News::create($validated);

        return response()->json([
            'success' => true,
            'message' => 'Draft news berhasil dibuat',
            'data' => $news
        ], 201);
    }

    public function publish($id)
    {
        $news = News::find($id);

        if (!$news) {
            return response()->json([
                'success' => false,
                'message' => 'Data news tidak ditemukan'
            ], 404);
        }

        $missing = [];
        if (empty($news->title)) $missing[] = 'title';
        if (empty($news->content)) $missing[] = 'content';
        if (empty($news->category)) $missing[] = 'category';
        if (empty($news->image_url)) $missing[] = 'image_url';

        if (!empty($missing)) {
            return response()->json([
                'success' => false,
                'message' => 'Belum bisa dipublish, field berikut masih kosong: ' . implode(', ', $missing),
                'missing_fields' => $missing
            ], 422);
        }

        $news->is_published = true;
        $news->save();

        return response()->json([
            'success' => true,
            'message' => 'News berhasil dipublish',
            'data' => $news
        ], 200);
    }

    public function unpublish($id)
    {
        $news = News::find($id);

        if (!$news) {
            return response()->json([
                'success' => false,
                'message' => 'Data news tidak ditemukan'
            ], 404);
        }

        $news->is_published = false;
        $news->save();

        return response()->json([
            'success' => true,
            'message' => 'News ditarik jadi draft lagi',
            'data' => $news
        ], 200);
    }

    public function update(Request $request, $id)
    {
        $news = News::find($id);

        if (!$news) {
            return response()->json([
                'success' => false,
                'message' => 'Data news tidak ditemukan'
            ], 404);
        }

        $validated = $request->validate([
            'title' => 'sometimes|string|max:255',
            'content' => 'sometimes|string',
            'category' => 'nullable|string',
            'image_url' => 'nullable|string',
        ]);

        $news->update($validated);

        return response()->json([
            'success' => true,
            'message' => 'Data news berhasil diupdate',
            'data' => $news
        ], 200);
    }

    public function destroy($id)
    {
        $news = News::find($id);

        if (!$news) {
            return response()->json([
                'success' => false,
                'message' => 'Data news tidak ditemukan'
            ], 404);
        }

        $news->delete();

        return response()->json([
            'success' => true,
            'message' => 'Data news berhasil dihapus'
        ], 200);
    }
}
