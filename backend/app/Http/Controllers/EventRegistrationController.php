<?php

namespace App\Http\Controllers;

use App\Models\EventRegistration;
use Illuminate\Http\Request;

class EventRegistrationController extends Controller
{
    public function index()
    {
        try {
            $eventRegistrations = EventRegistration::all();

            if ($eventRegistrations->isEmpty()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Data registrasi tidak ditemukan',
                    'data' => []
                ], 404);
            }

            return response()->json([
                'success' => true,
                'message' => 'Data registrasi berhasil diambil',
                'data' => $eventRegistrations
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
            $eventRegistrations = EventRegistration::find($id);

            if (!$eventRegistrations) {
                return response()->json([
                    'success' => false,
                    'message' => 'Data registrasi tidak ditemukan',
                    'data' => []
                ], 404);
            }

            return response()->json([
                'success' => true,
                'message' => 'Data registrasi berhasil diambil',
                'data' => $eventRegistrations
            ], 200);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Terjadi kesalahan pada server'
            ], 500);
        }
    }

    public function store(Request $request, $eventId)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'phone' => 'nullable|string|max:30',
        ]);

        $alreadyRegistered = EventRegistration::where('event_id', $eventId)
            ->where('email', $validated['email'])
            ->exists();

        if ($alreadyRegistered) {
            return response()->json([
                'success' => false,
                'message' => 'Email ini sudah terdaftar di event ini'
            ], 409);
        }

        $validated['event_id'] = $eventId;

        $registration = EventRegistration::create($validated);

        return response()->json([
            'success' => true,
            'message' => 'Pendaftaran berhasil',
            'data' => $registration
        ], 201);
    }
}
