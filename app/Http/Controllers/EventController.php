<?php

namespace App\Http\Controllers;

use Event;
use Illuminate\Http\Request;

class EventController extends Controller
{
    public function index()
    {
        try {
            $events = Event::all();

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
}
