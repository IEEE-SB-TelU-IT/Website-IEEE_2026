/**
 * ============================================================
 * IEEE SB Telkom University - API Service
 * Penghubung React Frontend ↔ Laravel Backend
 * ============================================================
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
  getAll: () => apiFetch('/news'),
  getAllAdmin: () => apiFetch('/news-all'),
  getById: (id) => apiFetch(`/news/${id}`),
  create: (data) => apiFetch('/news', { method: 'POST', body: JSON.stringify(data) }),
  update: (id, data) => apiFetch(`/news/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  delete: (id) => apiFetch(`/news/${id}`, { method: 'DELETE' }),
  publish: (id) => apiFetch(`/news/${id}/publish`, { method: 'POST' }),
  unpublish: (id) => apiFetch(`/news/${id}/unpublish`, { method: 'POST' }),
};

// ============================================================
// ACHIEVEMENTS API
// ============================================================
export const achievementsApi = {
  getAll: () => apiFetch('/achievements'),
  getAllAdmin: () => apiFetch('/achievements-all'),
  getById: (id) => apiFetch(`/achievements/${id}`),
  create: (data) => apiFetch('/achievements', { method: 'POST', body: JSON.stringify(data) }),
  update: (id, data) => apiFetch(`/achievements/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  delete: (id) => apiFetch(`/achievements/${id}`, { method: 'DELETE' }),
  publish: (id) => apiFetch(`/achievements/${id}/publish`, { method: 'POST' }),
  unpublish: (id) => apiFetch(`/achievements/${id}/unpublish`, { method: 'POST' }),
};

// ============================================================
// EVENTS API
// ============================================================
export const eventsApi = {
  getAll: () => apiFetch('/events'),
  getAllAdmin: () => apiFetch('/events-all'),
  getById: (id) => apiFetch(`/events/${id}`),
  register: (eventId, data) => apiFetch(`/events/${eventId}/register`, { method: 'POST', body: JSON.stringify(data) }),
  getRegistrations: (eventId) => apiFetch(`/events/${eventId}/register`),
  create: (data) => apiFetch('/events', { method: 'POST', body: JSON.stringify(data) }),
  update: (id, data) => apiFetch(`/events/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  delete: (id) => apiFetch(`/events/${id}`, { method: 'DELETE' }),
  publish: (id) => apiFetch(`/events/${id}/publish`, { method: 'POST' }),
  unpublish: (id) => apiFetch(`/events/${id}/unpublish`, { method: 'POST' }),
};

// ============================================================
// DEPARTMENTS API
// ============================================================
export const departmentsApi = {
  getAll: () => apiFetch('/departments'),
  getById: (id) => apiFetch(`/departments/${id}`),
};

// ============================================================
// OFFICERS API
// ============================================================
export const officersApi = {
  getByDepartment: (departmentId) => apiFetch(`/departments/${departmentId}/officers`),
  create: (departmentId, data) => apiFetch(`/departments/${departmentId}/officers`, { method: 'POST', body: JSON.stringify(data) }),
  update: (id, data) => apiFetch(`/officers/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  delete: (id) => apiFetch(`/officers/${id}`, { method: 'DELETE' }),
};

// ============================================================
// PROGRAMS API
// ============================================================
export const programsApi = {
  getByDepartment: (departmentId) => apiFetch(`/departments/${departmentId}/programs`),
  getAllAdmin: (departmentId) => apiFetch(`/departments/${departmentId}/programs-all`),
  create: (departmentId, data) => apiFetch(`/departments/${departmentId}/programs`, { method: 'POST', body: JSON.stringify(data) }),
  update: (id, data) => apiFetch(`/programs/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  delete: (id) => apiFetch(`/programs/${id}`, { method: 'DELETE' }),
  publish: (id) => apiFetch(`/programs/${id}/publish`, { method: 'POST' }),
  unpublish: (id) => apiFetch(`/programs/${id}/unpublish`, { method: 'POST' }),
};

// ============================================================
// AUTH API
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
  me: () => apiFetch('/me'),
};

// ============================================================
// UPLOAD API — multipart, JANGAN lewat apiFetch (beda Content-Type)
// ============================================================
export const uploadApi = {
  upload: async (file) => {
    const token = localStorage.getItem('auth_token');
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(`${API_BASE}/upload`, {
      method: 'POST',
      headers: token ? { Authorization: `Bearer ${token}` } : {},
      body: formData,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: 'Upload gagal' }));
      throw new Error(error.message || 'Upload gagal');
    }
    return response.json();
  },
};

export default apiFetch;
