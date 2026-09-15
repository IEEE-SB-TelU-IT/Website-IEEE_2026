<?php

use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\EventRegistrationController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\OfficerController;
use App\Http\Controllers\ProgramController;
use App\Http\Controllers\UploadController;
use App\Http\Controllers\AchievementController;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::post('/login', [AuthController::class, 'login']);

// ─── PUBLIC ────────────────────────────────────────────────
Route::get('/achievements', [AchievementController::class, 'index']);
Route::get('/achievements/{id}', [AchievementController::class, 'detail']);

Route::get('/news', [NewsController::class, 'index']);
Route::get('/news/{id}', [NewsController::class, 'detail']);

Route::get('/events', [EventController::class, 'index']);
Route::get('/events/{id}', [EventController::class, 'detail']);
Route::post('/events/{id}/register', [EventRegistrationController::class, 'store']);

Route::get('/departments', [DepartmentController::class, 'index']);
Route::get('/departments/{id}', [DepartmentController::class, 'detail']);
Route::get('/departments/{departmentId}/officers', [OfficerController::class, 'index']);
Route::get('/departments/{departmentId}/programs', [ProgramController::class, 'index']);

// ─── PRIVATE / ADMIN ───────────────────────────────────────
Route::middleware('auth:api')->group(function () {

    // AUTH
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/me', [AuthController::class, 'me']);

    // STORAGE
    Route::post('/upload', [UploadController::class, 'store']);
    Route::delete('/upload', [UploadController::class, 'destroy']);

    // EVENT REGISTRATIONS
    Route::get('/events/{id}/register', [EventRegistrationController::class, 'index']);

    // ADMIN — ALL DATA
    Route::get('/news-all', [NewsController::class, 'indexAll']);
    Route::get('/events-all', [EventController::class, 'indexAll']);
    Route::get('/achievements-all', [AchievementController::class, 'indexAll']);

    // NEWS
    Route::post('/news', [NewsController::class, 'store']);
    Route::put('/news/{id}', [NewsController::class, 'update']);
    Route::delete('/news/{id}', [NewsController::class, 'destroy']);
    Route::post('/news/{id}/publish', [NewsController::class, 'publish']);
    Route::post('/news/{id}/unpublish', [NewsController::class, 'unpublish']);

    // ACHIEVEMENTS
    Route::post('/achievements', [AchievementController::class, 'store']);
    Route::put('/achievements/{id}', [AchievementController::class, 'update']);
    Route::delete('/achievements/{id}', [AchievementController::class, 'destroy']);
    Route::post('/achievements/{id}/publish', [AchievementController::class, 'publish']);
    Route::post('/achievements/{id}/unpublish', [AchievementController::class, 'unpublish']);

    // EVENTS
    Route::post('/events', [EventController::class, 'store']);
    Route::put('/events/{id}', [EventController::class, 'update']);
    Route::delete('/events/{id}', [EventController::class, 'destroy']);
    Route::post('/events/{id}/publish', [EventController::class, 'publish']);
    Route::post('/events/{id}/unpublish', [EventController::class, 'unpublish']);

    // DEPARTMENTS
    Route::post('/departments', [DepartmentController::class, 'store']);
    Route::put('/departments/{id}', [DepartmentController::class, 'update']);
    Route::delete('/departments/{id}', [DepartmentController::class, 'destroy']);

    // OFFICERS
    Route::post('/departments/{departmentId}/officers', [OfficerController::class, 'store']);
    Route::put('/officers/{id}', [OfficerController::class, 'update']);
    Route::delete('/officers/{id}', [OfficerController::class, 'destroy']);

    // PROGRAMS
    Route::get('/departments/{departmentId}/programs-all', [ProgramController::class, 'indexAll']);
    Route::post('/departments/{departmentId}/programs', [ProgramController::class, 'store']);
    Route::put('/programs/{id}', [ProgramController::class, 'update']);
    Route::delete('/programs/{id}', [ProgramController::class, 'destroy']);
    Route::post('/programs/{id}/publish', [ProgramController::class, 'publish']);
    Route::post('/programs/{id}/unpublish', [ProgramController::class, 'unpublish']);
});