/**
 * ============================================================
 * IEEE SB Telkom University - API Service
 * Penghubung React Frontend ↔ Laravel Backend
 * ============================================================
 *
 * SETUP LARAVEL BACKEND:
 * 1. Install Laravel: composer create-project laravel/laravel ieee-backend
 * 2. Install Sanctum: composer require laravel/sanctum
 *    php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
 *    php artisan migrate
 * 3. Buat routes di routes/api.php (lihat bagian bawah file ini)
 * 4. Set CORS di config/cors.php: allowed_origins = ['http://localhost:5173']
 * 5. Di .env Laravel: APP_URL=http://localhost:8000
 * 6. Di .env Vite (frontend): VITE_API_URL=http://localhost:8000/api
 */

// ─── Base URL dari environment variable ────────────────────
const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

// ─── Helper fetch dengan error handling ────────────────────
async function apiFetch(endpoint, options = {}) {
  const url = `${API_BASE}${endpoint}`;
  const defaultHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };

  // Tambahkan token auth jika ada (Sanctum)
  const token = localStorage.getItem('auth_token');
  if (token) {
    defaultHeaders['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(url, {
    ...options,
    headers: { ...defaultHeaders, ...options.headers },
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Request failed' }));
    throw new Error(error.message || `HTTP ${response.status}`);
  }

  return response.json();
}

// ============================================================
// NEWS API
// ============================================================
export const newsApi = {
  /** GET /api/news - Ambil semua berita (paginated) */
  getAll: (page = 1, category = null) => {
    const params = new URLSearchParams({ page });
    if (category && category !== 'All') params.append('category', category);
    return apiFetch(`/news?${params}`);
  },

  /** GET /api/news/:id - Ambil satu berita */
  getById: (id) => apiFetch(`/news/${id}`),

  /** POST /api/news - Buat berita baru (admin) */
  create: (data) => apiFetch('/news', { method: 'POST', body: JSON.stringify(data) }),

  /** PUT /api/news/:id - Update berita (admin) */
  update: (id, data) => apiFetch(`/news/${id}`, { method: 'PUT', body: JSON.stringify(data) }),

  /** DELETE /api/news/:id - Hapus berita (admin) */
  delete: (id) => apiFetch(`/news/${id}`, { method: 'DELETE' }),
};

// ============================================================
// ACHIEVEMENTS API
// ============================================================
export const achievementsApi = {
  getAll: () => apiFetch('/achievements'),
  getById: (id) => apiFetch(`/achievements/${id}`),
  create: (data) => apiFetch('/achievements', { method: 'POST', body: JSON.stringify(data) }),
  update: (id, data) => apiFetch(`/achievements/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  delete: (id) => apiFetch(`/achievements/${id}`, { method: 'DELETE' }),
};

// ============================================================
// EVENTS API
// ============================================================
export const eventsApi = {
  getAll: (category = null) => {
    const params = category && category !== 'All Events' ? `?category=${category}` : '';
    return apiFetch(`/events${params}`);
  },
  getById: (id) => apiFetch(`/events/${id}`),
  register: (eventId, data) => apiFetch(`/events/${eventId}/register`, { method: 'POST', body: JSON.stringify(data) }),
};

// ============================================================
// DEPARTMENTS API
// ============================================================
export const departmentsApi = {
  getAll: () => apiFetch('/departments'),
  getById: (id) => apiFetch(`/departments/${id}`),
};

// ============================================================
// AUTH API (Sanctum)
// ============================================================
export const authApi = {
  login: async (email, password) => {
    const data = await apiFetch('/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    if (data.token) localStorage.setItem('auth_token', data.token);
    return data;
  },
  logout: async () => {
    await apiFetch('/logout', { method: 'POST' });
    localStorage.removeItem('auth_token');
  },
  me: () => apiFetch('/user'),
};

export default apiFetch;

/* ============================================================
 * CONTOH ROUTES LARAVEL (routes/api.php)
 * ============================================================

use App\Http\Controllers\Api\NewsController;
use App\Http\Controllers\Api\AchievementController;
use App\Http\Controllers\Api\EventController;
use App\Http\Controllers\Api\DepartmentController;

// Public routes
Route::get('/news', [NewsController::class, 'index']);
Route::get('/news/{id}', [NewsController::class, 'show']);
Route::get('/achievements', [AchievementController::class, 'index']);
Route::get('/achievements/{id}', [AchievementController::class, 'show']);
Route::get('/events', [EventController::class, 'index']);
Route::get('/events/{id}', [EventController::class, 'show']);
Route::post('/events/{id}/register', [EventController::class, 'register']);
Route::get('/departments', [DepartmentController::class, 'index']);
Route::get('/departments/{id}', [DepartmentController::class, 'show']);

// Auth routes (Sanctum)
Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', [AuthController::class, 'me']);
    Route::post('/logout', [AuthController::class, 'logout']);

    // Admin-only routes
    Route::post('/news', [NewsController::class, 'store']);
    Route::put('/news/{id}', [NewsController::class, 'update']);
    Route::delete('/news/{id}', [NewsController::class, 'destroy']);
    Route::apiResource('achievements', AchievementController::class)->except(['index','show']);
    Route::apiResource('events', EventController::class)->except(['index','show']);
});

 * ============================================================
 * CONTOH CONTROLLER LARAVEL (app/Http/Controllers/Api/NewsController.php)
 * ============================================================

<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\News;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    public function index(Request $request)
    {
        $query = News::latest();
        if ($request->category) {
            $query->where('category', $request->category);
        }
        return response()->json($query->paginate(8));
    }

    public function show($id)
    {
        return response()->json(News::findOrFail($id));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'category' => 'required|string',
            'image' => 'nullable|image|max:2048',
        ]);
        // Handle image upload
        if ($request->hasFile('image')) {
            $validated['image_path'] = $request->file('image')->store('news', 'public');
        }
        $news = News::create($validated);
        return response()->json($news, 201);
    }

    public function update(Request $request, $id)
    {
        $news = News::findOrFail($id);
        $news->update($request->validated());
        return response()->json($news);
    }

    public function destroy($id)
    {
        News::findOrFail($id)->delete();
        return response()->json(['message' => 'Deleted']);
    }
}

 * ============================================================
 * CONTOH MODEL (app/Models/News.php)
 * ============================================================

<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    protected $fillable = ['title', 'content', 'category', 'image_path', 'published_at'];
    protected $casts = ['published_at' => 'datetime'];
}

 * ============================================================
 * CONTOH MIGRATION (database/migrations/..._create_news_table.php)
 * ============================================================

Schema::create('news', function (Blueprint $table) {
    $table->id();
    $table->string('title');
    $table->text('content');
    $table->string('category')->default('GENERAL');
    $table->string('image_path')->nullable();
    $table->timestamp('published_at')->nullable();
    $table->timestamps();
});

 */
