<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;

class EventController extends Controller
{
    public function index()
    {
        try {
            $events = Event::where('is_published', true)->get();

            if ($events->isEmpty()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Data event tidak ditemukan',
                    'data' => []
                ], 404);
            }

            return response()->json([
                'success' => true,
                'message' => 'Data event berhasil diambil',
                'data' => $events
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
            $events = Event::all();

            return response()->json([
                'success' => true,
                'message' => 'Data event berhasil diambil',
                'data' => $events
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
            $events = Event::find($id);

            if (!$events) {
                return response()->json([
                    'success' => false,
                    'message' => 'Data event tidak ditemukan',
                    'data' => []
                ], 404);
            }

            return response()->json([
                'success' => true,
                'message' => 'Data event berhasil diambil',
                'data' => $events
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
            'description' => 'nullable|string',
            'category' => 'nullable|string',
            'location' => 'nullable|string',
            'image_url' => 'nullable|string',
        ]);

        // selalu kebuat sebagai draft — belum keliatan di web publik
        $validated['is_published'] = false;

        $event = Event::create($validated);

        return response()->json([
            'success' => true,
            'message' => 'Draft event berhasil dibuat',
            'data' => $event
        ], 201);
    }

    public function publish($id)
    {
        $event = Event::find($id);

        if (!$event) {
            return response()->json([
                'success' => false,
                'message' => 'Data event tidak ditemukan'
            ], 404);
        }

        $missing = [];
        if (empty($event->title)) $missing[] = 'title';
        if (empty($event->description)) $missing[] = 'description';
        if (empty($event->category)) $missing[] = 'category';
        if (empty($event->location)) $missing[] = 'location';
        if (empty($event->image_url)) $missing[] = 'image_url';

        if (!empty($missing)) {
            return response()->json([
                'success' => false,
                'message' => 'Belum bisa dipublish, field berikut masih kosong: ' . implode(', ', $missing),
                'missing_fields' => $missing
            ], 422);
        }

        $event->is_published = true;
        $event->save();

        return response()->json([
            'success' => true,
            'message' => 'Event berhasil dipublish',
            'data' => $event
        ], 200);
    }

    public function unpublish($id)
    {
        $event = Event::find($id);

        if (!$event) {
            return response()->json([
                'success' => false,
                'message' => 'Data event tidak ditemukan'
            ], 404);
        }

        $event->is_published = false;
        $event->save();

        return response()->json([
            'success' => true,
            'message' => 'Event ditarik jadi draft lagi',
            'data' => $event
        ], 200);
    }

    public function update(Request $request, $id)
    {
        $event = Event::find($id);

        if (!$event) {
            return response()->json([
                'success' => false,
                'message' => 'Data event tidak ditemukan'
            ], 404);
        }

        $validated = $request->validate([
            'title' => 'sometimes|string|max:255',
            'description' => 'nullable|string',
            'category' => 'nullable|string',
            'location' => 'nullable|string',
            'image_url' => 'nullable|string',
        ]);

        $event->update($validated);

        return response()->json([
            'success' => true,
            'message' => 'Data event berhasil diupdate',
            'data' => $event
        ], 200);
    }

    public function destroy($id)
    {
        $event = Event::find($id);

        if (!$event) {
            return response()->json([
                'success' => false,
                'message' => 'Data event tidak ditemukan'
            ], 404);
        }

        $event->delete();

        return response()->json([
            'success' => true,
            'message' => 'Data event berhasil dihapus'
        ], 200);
    }
}
