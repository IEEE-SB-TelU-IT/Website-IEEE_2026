import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import {
  authApi, newsApi, achievementsApi, eventsApi,
  departmentsApi, officersApi, programsApi, uploadApi,
} from '../../services/apiService';

/* ─────────────────────────────────────────────
   FIELD UPLOAD GAMBAR — reusable, dipake di semua form
   ───────────────────────────────────────────── */
const ImageUploadField = ({ label, value, onChange }) => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  const handleFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    setError(null);
    try {
      const res = await uploadApi.upload(file);
      onChange(res.url);
    } catch (err) {
      setError(err.message || 'Upload gagal');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="mb-3">
      <label className="block text-xs text-gray-400 mb-1">{label}</label>
      {value && (
        <div className="flex items-center gap-3 mb-2">
          <img src={value} alt="preview" className="w-20 h-20 object-cover rounded-lg border border-white/10" />
          <button
            type="button"
            onClick={() => onChange('')}
            className="text-xs font-semibold bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg px-2.5 py-1.5"
          >
            Hapus Foto
          </button>
        </div>
      )}
      <input
        type="file"
        accept="image/*"
        onChange={handleFile}
        disabled={uploading}
        className="w-full text-xs text-gray-300 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:bg-blue-600 file:text-white file:text-xs file:font-semibold file:cursor-pointer hover:file:bg-blue-500"
      />
      {uploading && <p className="text-xs text-blue-400 mt-1">Uploading...</p>}
      {error && <p className="text-xs text-red-400 mt-1">{error}</p>}
    </div>
  );
};

/* ─────────────────────────────────────────────
   GENERIC PANEL — buat News / Achievements / Events
   (bukan department-scoped, punya draft/publish)
   ───────────────────────────────────────────── */
const ContentPanel = ({ title, api, fields }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editing, setEditing] = useState(null); // null = gak ada form, {} = create baru, {...item} = edit
  const [form, setForm] = useState({});
  const [busy, setBusy] = useState(false);

  const load = () => {
    setLoading(true);
    api.getAllAdmin()
      .then((res) => setItems(Array.isArray(res.data) ? res.data : []))
      .catch((err) => setError(err.message || 'Gagal ambil data'))
      .finally(() => setLoading(false));
  };

  useEffect(() => { load(); }, []);

  const openCreate = () => {
    const empty = {};
    fields.forEach((f) => { empty[f.key] = ''; });
    setForm(empty);
    setEditing({});
  };

  const openEdit = (item) => {
    setForm(item);
    setEditing(item);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      if (editing.id) {
        await api.update(editing.id, form);
      } else {
        await api.create(form);
      }
      setEditing(null);
      load();
    } catch (err) {
      setError(err.message || 'Gagal simpan');
    } finally {
      setBusy(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Yakin hapus?')) return;
    setBusy(true);
    try {
      await api.delete(id);
      load();
    } catch (err) {
      setError(err.message || 'Gagal hapus');
    } finally {
      setBusy(false);
    }
  };

  const handlePublish = async (item) => {
    setBusy(true);
    setError(null);
    try {
      if (item.is_published) {
        await api.unpublish(item.id);
      } else {
        await api.publish(item.id);
      }
      load();
    } catch (err) {
      setError(err.message || 'Gagal publish');
    } finally {
      setBusy(false);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-white">{title}</h2>
        <button
          onClick={openCreate}
          className="text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white rounded-lg px-3 py-1.5"
        >
          + Tambah
        </button>
      </div>

      {error && (
        <p className="text-red-400 text-xs mb-3 bg-red-500/10 border border-red-500/30 rounded-lg px-3 py-2">{error}</p>
      )}

      {editing !== null && (
        <form onSubmit={handleSave} className="bg-[#00172d] border border-white/10 rounded-xl p-4 mb-4">
          {fields.map((f) => (
            <div key={f.key} className="mb-3">
              <label className="block text-xs text-gray-400 mb-1">{f.label}</label>
              {f.type === 'textarea' ? (
                <textarea
                  value={form[f.key] || ''}
                  onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                  rows={3}
                  className="w-full bg-[#000B18] border border-white/10 rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-blue-500"
                />
              ) : f.type === 'image' ? (
                <ImageUploadField
                  label=""
                  value={form[f.key]}
                  onChange={(url) => setForm({ ...form, [f.key]: url })}
                />
              ) : (
                <input
                  type="text"
                  value={form[f.key] || ''}
                  onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                  className="w-full bg-[#000B18] border border-white/10 rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-blue-500"
                />
              )}
            </div>
          ))}
          <div className="flex gap-2">
            <button
              type="submit"
              disabled={busy}
              className="text-xs font-semibold bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white rounded-lg px-3 py-1.5"
            >
              Simpan
            </button>
            <button
              type="button"
              onClick={() => setEditing(null)}
              className="text-xs font-semibold bg-white/10 hover:bg-white/20 text-white rounded-lg px-3 py-1.5"
            >
              Batal
            </button>
          </div>
        </form>
      )}

      {loading && <p className="text-gray-400 text-sm">Loading...</p>}
      {!loading && items.length === 0 && <p className="text-gray-400 text-sm">Belum ada data.</p>}

      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between bg-[#00172d] border border-white/10 rounded-xl px-4 py-3">
            <div className="min-w-0">
              <p className="text-sm font-semibold text-white truncate">{item.title || item.name}</p>
              <span className={`inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded-full ${item.is_published ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                {item.is_published ? 'PUBLISHED' : 'DRAFT'}
              </span>
            </div>
            <div className="flex gap-2 flex-shrink-0 ml-3">
              <button onClick={() => handlePublish(item)} disabled={busy} className="text-xs font-semibold bg-white/10 hover:bg-white/20 text-white rounded-lg px-2.5 py-1.5">
                {item.is_published ? 'Unpublish' : 'Publish'}
              </button>
              <button onClick={() => openEdit(item)} className="text-xs font-semibold bg-white/10 hover:bg-white/20 text-white rounded-lg px-2.5 py-1.5">
                Edit
              </button>
              <button onClick={() => handleDelete(item.id)} disabled={busy} className="text-xs font-semibold bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg px-2.5 py-1.5">
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   PANEL PROGRAMS — department-scoped, ada draft/publish
   ───────────────────────────────────────────── */
const ProgramsPanel = ({ departmentId }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({});
  const [busy, setBusy] = useState(false);

  const fields = [
    { key: 'name', label: 'Nama Program' },
    { key: 'description', label: 'Deskripsi', type: 'textarea' },
    { key: 'image_url', label: 'Gambar', type: 'image' },
  ];

  const load = () => {
    setLoading(true);
    programsApi.getAllAdmin(departmentId)
      .then((res) => setItems(Array.isArray(res.data) ? res.data : []))
      .catch((err) => setError(err.message || 'Gagal ambil data'))
      .finally(() => setLoading(false));
  };

  useEffect(() => { load(); }, [departmentId]);

  const openCreate = () => { setForm({ name: '', description: '', image_url: '' }); setEditing({}); };
  const openEdit = (item) => { setForm(item); setEditing(item); };

  const handleSave = async (e) => {
    e.preventDefault();
    setBusy(true); setError(null);
    try {
      if (editing.id) await programsApi.update(editing.id, form);
      else await programsApi.create(departmentId, form);
      setEditing(null); load();
    } catch (err) { setError(err.message || 'Gagal simpan'); }
    finally { setBusy(false); }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Yakin hapus?')) return;
    setBusy(true);
    try { await programsApi.delete(id); load(); }
    catch (err) { setError(err.message || 'Gagal hapus'); }
    finally { setBusy(false); }
  };

  const handlePublish = async (item) => {
    setBusy(true); setError(null);
    try {
      if (item.is_published) await programsApi.unpublish(item.id);
      else await programsApi.publish(item.id);
      load();
    } catch (err) { setError(err.message || 'Gagal publish'); }
    finally { setBusy(false); }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-white">Programs</h2>
        <button onClick={openCreate} className="text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white rounded-lg px-3 py-1.5">+ Tambah</button>
      </div>

      {error && <p className="text-red-400 text-xs mb-3 bg-red-500/10 border border-red-500/30 rounded-lg px-3 py-2">{error}</p>}

      {editing !== null && (
        <form onSubmit={handleSave} className="bg-[#00172d] border border-white/10 rounded-xl p-4 mb-4">
          {fields.map((f) => (
            <div key={f.key} className="mb-3">
              <label className="block text-xs text-gray-400 mb-1">{f.label}</label>
              {f.type === 'textarea' ? (
                <textarea value={form[f.key] || ''} onChange={(e) => setForm({ ...form, [f.key]: e.target.value })} rows={3}
                  className="w-full bg-[#000B18] border border-white/10 rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-blue-500" />
              ) : f.type === 'image' ? (
                <ImageUploadField label="" value={form[f.key]} onChange={(url) => setForm({ ...form, [f.key]: url })} />
              ) : (
                <input type="text" value={form[f.key] || ''} onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                  className="w-full bg-[#000B18] border border-white/10 rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-blue-500" />
              )}
            </div>
          ))}
          <div className="flex gap-2">
            <button type="submit" disabled={busy} className="text-xs font-semibold bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white rounded-lg px-3 py-1.5">Simpan</button>
            <button type="button" onClick={() => setEditing(null)} className="text-xs font-semibold bg-white/10 hover:bg-white/20 text-white rounded-lg px-3 py-1.5">Batal</button>
          </div>
        </form>
      )}

      {loading && <p className="text-gray-400 text-sm">Loading...</p>}
      {!loading && items.length === 0 && <p className="text-gray-400 text-sm">Belum ada data.</p>}

      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between bg-[#00172d] border border-white/10 rounded-xl px-4 py-3">
            <div className="min-w-0">
              <p className="text-sm font-semibold text-white truncate">{item.name}</p>
              <span className={`inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded-full ${item.is_published ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                {item.is_published ? 'PUBLISHED' : 'DRAFT'}
              </span>
            </div>
            <div className="flex gap-2 flex-shrink-0 ml-3">
              <button onClick={() => handlePublish(item)} disabled={busy} className="text-xs font-semibold bg-white/10 hover:bg-white/20 text-white rounded-lg px-2.5 py-1.5">
                {item.is_published ? 'Unpublish' : 'Publish'}
              </button>
              <button onClick={() => openEdit(item)} className="text-xs font-semibold bg-white/10 hover:bg-white/20 text-white rounded-lg px-2.5 py-1.5">Edit</button>
              <button onClick={() => handleDelete(item.id)} disabled={busy} className="text-xs font-semibold bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg px-2.5 py-1.5">Hapus</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   PANEL OFFICERS — department-scoped, GAK ada draft/publish
   ───────────────────────────────────────────── */
const OfficersPanel = ({ departmentId }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({});
  const [busy, setBusy] = useState(false);

  const levelLabel = { 0: 'Head', 1: 'Coordinator', 2: 'Staff' };

  const load = () => {
    setLoading(true);
    officersApi.getByDepartment(departmentId)
      .then((res) => setItems(Array.isArray(res.data) ? res.data : []))
      .catch((err) => setError(err.message || 'Gagal ambil data'))
      .finally(() => setLoading(false));
  };

  useEffect(() => { load(); }, [departmentId]);

  const openCreate = () => { setForm({ name: '', position: '', level: '0', photo_url: '' }); setEditing({}); };
  const openEdit = (item) => { setForm({ ...item, level: String(item.level) }); setEditing(item); };

  const handleSave = async (e) => {
    e.preventDefault();
    setBusy(true); setError(null);
    try {
      const payload = { ...form, level: Number(form.level) };
      if (editing.id) await officersApi.update(editing.id, payload);
      else await officersApi.create(departmentId, payload);
      setEditing(null); load();
    } catch (err) { setError(err.message || 'Gagal simpan'); }
    finally { setBusy(false); }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Yakin hapus?')) return;
    setBusy(true);
    try { await officersApi.delete(id); load(); }
    catch (err) { setError(err.message || 'Gagal hapus'); }
    finally { setBusy(false); }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-white">Officers</h2>
        <button onClick={openCreate} className="text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white rounded-lg px-3 py-1.5">+ Tambah</button>
      </div>

      {error && <p className="text-red-400 text-xs mb-3 bg-red-500/10 border border-red-500/30 rounded-lg px-3 py-2">{error}</p>}

      {editing !== null && (
        <form onSubmit={handleSave} className="bg-[#00172d] border border-white/10 rounded-xl p-4 mb-4">
          <div className="mb-3">
            <label className="block text-xs text-gray-400 mb-1">Nama</label>
            <input type="text" value={form.name || ''} onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-[#000B18] border border-white/10 rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-blue-500" />
          </div>
          <div className="mb-3">
            <label className="block text-xs text-gray-400 mb-1">Posisi</label>
            <input type="text" value={form.position || ''} onChange={(e) => setForm({ ...form, position: e.target.value })}
              className="w-full bg-[#000B18] border border-white/10 rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-blue-500" />
          </div>
          <div className="mb-3">
            <label className="block text-xs text-gray-400 mb-1">Level</label>
            <select value={form.level} onChange={(e) => setForm({ ...form, level: e.target.value })}
              className="w-full bg-[#000B18] border border-white/10 rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-blue-500">
              <option value="0">0 — Head</option>
              <option value="1">1 — Coordinator</option>
              <option value="2">2 — Staff</option>
            </select>
          </div>
          <ImageUploadField
            label="Foto (opsional)"
            value={form.photo_url}
            onChange={(url) => setForm({ ...form, photo_url: url })}
          />
          <div className="flex gap-2">
            <button type="submit" disabled={busy} className="text-xs font-semibold bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white rounded-lg px-3 py-1.5">Simpan</button>
            <button type="button" onClick={() => setEditing(null)} className="text-xs font-semibold bg-white/10 hover:bg-white/20 text-white rounded-lg px-3 py-1.5">Batal</button>
          </div>
        </form>
      )}

      {loading && <p className="text-gray-400 text-sm">Loading...</p>}
      {!loading && items.length === 0 && <p className="text-gray-400 text-sm">Belum ada officer.</p>}

      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between bg-[#00172d] border border-white/10 rounded-xl px-4 py-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-white/5 flex items-center justify-center">
                {item.photo_url ? (
                  <img
                    src={item.photo_url}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                  />
                ) : null}
                <span
                  className="w-full h-full items-center justify-center text-[10px] text-gray-500"
                  style={{ display: item.photo_url ? 'none' : 'flex' }}
                >
                  N/A
                </span>
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-white truncate">{item.name}</p>
                <p className="text-xs text-gray-400">{item.position} — {levelLabel[item.level] ?? item.level}</p>
              </div>
            </div>
            <div className="flex gap-2 flex-shrink-0 ml-3">
              <button onClick={() => openEdit(item)} className="text-xs font-semibold bg-white/10 hover:bg-white/20 text-white rounded-lg px-2.5 py-1.5">Edit</button>
              <button onClick={() => handleDelete(item.id)} disabled={busy} className="text-xs font-semibold bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg px-2.5 py-1.5">Hapus</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   PANEL DEPARTMENT — edit description/detail/goals, cuma 1 record per department (gak ada create/delete)
   ───────────────────────────────────────────── */
const DepartmentPanel = ({ departmentId }) => {
  const [dept, setDept] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [busy, setBusy] = useState(false);
  const [form, setForm] = useState({ label: '', description: '', detail: '', goals: [] });

  const load = () => {
    setLoading(true);
    setSuccess(false);
    departmentsApi.getById(departmentId)
      .then((res) => {
        const d = res.data;
        setDept(d);
        setForm({
          label: d.label || '',
          description: d.description || '',
          detail: d.detail || '',
          goals: Array.isArray(d.goals) ? d.goals : [],
        });
      })
      .catch((err) => setError(err.message || 'Gagal ambil data department'))
      .finally(() => setLoading(false));
  };

  useEffect(() => { load(); }, [departmentId]);

  const handleGoalChange = (idx, key, value) => {
    const updated = [...form.goals];
    updated[idx] = { ...updated[idx], [key]: value };
    setForm({ ...form, goals: updated });
  };

  const addGoal = () => setForm({ ...form, goals: [...form.goals, { title: '', desc: '' }] });
  const removeGoal = (idx) => setForm({ ...form, goals: form.goals.filter((_, i) => i !== idx) });

  const handleSave = async (e) => {
    e.preventDefault();
    setBusy(true);
    setError(null);
    setSuccess(false);
    try {
      await departmentsApi.update(departmentId, form);
      setSuccess(true);
      load();
    } catch (err) {
      setError(err.message || 'Gagal simpan');
    } finally {
      setBusy(false);
    }
  };

  if (loading) return <p className="text-gray-400 text-sm">Loading...</p>;
  if (!dept) return <p className="text-red-400 text-sm">Department tidak ditemukan.</p>;

  return (
    <div>
      <h2 className="text-lg font-bold text-white mb-4">Department — {dept.label}</h2>

      {error && <p className="text-red-400 text-xs mb-3 bg-red-500/10 border border-red-500/30 rounded-lg px-3 py-2">{error}</p>}
      {success && <p className="text-green-400 text-xs mb-3 bg-green-500/10 border border-green-500/30 rounded-lg px-3 py-2">Tersimpan.</p>}

      <form onSubmit={handleSave} className="bg-[#00172d] border border-white/10 rounded-xl p-4">
        <div className="mb-3">
          <label className="block text-xs text-gray-400 mb-1">Nama Department</label>
          <input type="text" value={form.label} onChange={(e) => setForm({ ...form, label: e.target.value })}
            className="w-full bg-[#000B18] border border-white/10 rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-blue-500" />
        </div>
        <div className="mb-3">
          <label className="block text-xs text-gray-400 mb-1">What We Do — Deskripsi Singkat</label>
          <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3}
            className="w-full bg-[#000B18] border border-white/10 rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label className="block text-xs text-gray-400 mb-1">What We Do — Detail Tambahan</label>
          <textarea value={form.detail} onChange={(e) => setForm({ ...form, detail: e.target.value })} rows={3}
            className="w-full bg-[#000B18] border border-white/10 rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-blue-500" />
        </div>

        <div className="mb-2 flex items-center justify-between">
          <label className="block text-xs text-gray-400">Goals</label>
          <button type="button" onClick={addGoal} className="text-xs font-semibold bg-white/10 hover:bg-white/20 text-white rounded-lg px-2.5 py-1">+ Tambah Goal</button>
        </div>
        {form.goals.length === 0 && <p className="text-gray-500 text-xs mb-3">Belum ada goal.</p>}
        {form.goals.map((g, idx) => (
          <div key={idx} className="bg-[#000B18] border border-white/10 rounded-lg p-3 mb-2">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-500">Goal #{idx + 1}</span>
              <button type="button" onClick={() => removeGoal(idx)} className="text-xs font-semibold text-red-400 hover:text-red-300">Hapus</button>
            </div>
            <input
              type="text"
              placeholder="Judul goal"
              value={g.title || ''}
              onChange={(e) => handleGoalChange(idx, 'title', e.target.value)}
              className="w-full mb-2 bg-[#00172d] border border-white/10 rounded-lg px-3 py-1.5 text-sm text-white outline-none focus:border-blue-500"
            />
            <textarea
              placeholder="Deskripsi goal"
              value={g.desc || ''}
              onChange={(e) => handleGoalChange(idx, 'desc', e.target.value)}
              rows={2}
              className="w-full bg-[#00172d] border border-white/10 rounded-lg px-3 py-1.5 text-sm text-white outline-none focus:border-blue-500"
            />
          </div>
        ))}

        <button type="submit" disabled={busy} className="mt-2 text-xs font-semibold bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white rounded-lg px-4 py-2">
          Simpan Perubahan
        </button>
      </form>
    </div>
  );
};

/* ─────────────────────────────────────────────
   DASHBOARD UTAMA
   ───────────────────────────────────────────── */
const TABS = ['News', 'Achievements', 'Events', 'Programs', 'Officers', 'Department'];

const AdminDashboardInner = ({ user }) => {
  const navigate = useNavigate();
  const [tab, setTab] = useState('News');
  const [departments, setDepartments] = useState([]);
  const [activeDeptId, setActiveDeptId] = useState(user.department_id);

  useEffect(() => {
    if (user.is_superadmin) {
      departmentsApi.getAll().then((res) => {
        setDepartments(Array.isArray(res.data) ? res.data : []);
      }).catch(() => { });
    }
  }, [user]);

  const handleLogout = async () => {
    await authApi.logout();
    navigate('/admin/login');
  };

  const NEWS_FIELDS = [
    { key: 'title', label: 'Judul' },
    { key: 'content', label: 'Isi', type: 'textarea' },
    { key: 'category', label: 'Kategori' },
    { key: 'image_url', label: 'Gambar', type: 'image' },
  ];
  const ACHIEVEMENT_FIELDS = [
    { key: 'title', label: 'Judul' },
    { key: 'description', label: 'Deskripsi', type: 'textarea' },
    { key: 'category', label: 'Kategori' },
    { key: 'image_url', label: 'Gambar', type: 'image' },
  ];
  const EVENT_FIELDS = [
    { key: 'title', label: 'Judul' },
    { key: 'description', label: 'Deskripsi', type: 'textarea' },
    { key: 'category', label: 'Kategori' },
    { key: 'location', label: 'Lokasi' },
    { key: 'image_url', label: 'Gambar', type: 'image' },
  ];

  return (
    <div className="min-h-screen bg-[#000B18] text-white">
      {/* Header */}
      <div className="border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-bold">{user.name}</p>
          <p className="text-xs text-gray-400">
            {user.is_superadmin ? 'Superadmin' : `Department #${user.department_id}`}
          </p>
        </div>
        <button onClick={handleLogout} className="text-xs font-semibold bg-white/10 hover:bg-white/20 rounded-lg px-3 py-1.5">
          Logout
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        {/* Department switcher — superadmin doang */}
        {user.is_superadmin && (tab === 'Programs' || tab === 'Officers' || tab === 'Department') && (
          <div className="mb-6">
            <label className="block text-xs text-gray-400 mb-1">Pilih Department</label>
            <select
              value={activeDeptId || ''}
              onChange={(e) => setActiveDeptId(Number(e.target.value))}
              className="bg-[#00172d] border border-white/10 rounded-lg px-3 py-2 text-sm text-white outline-none"
            >
              {departments.map((d) => (
                <option key={d.id} value={d.id}>{d.label}</option>
              ))}
            </select>
          </div>
        )}

        {/* Tab nav */}
        <div className="flex flex-wrap gap-2 mb-6">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${tab === t ? 'bg-blue-600 border-blue-600 text-white' : 'border-white/20 text-gray-400 hover:text-white'
                }`}
            >
              {t}
            </button>
          ))}
        </div>

        {tab === 'News' && <ContentPanel title="News" api={newsApi} fields={NEWS_FIELDS} />}
        {tab === 'Achievements' && <ContentPanel title="Achievements" api={achievementsApi} fields={ACHIEVEMENT_FIELDS} />}
        {tab === 'Events' && <ContentPanel title="Events" api={eventsApi} fields={EVENT_FIELDS} />}
        {tab === 'Programs' && <ProgramsPanel departmentId={activeDeptId} />}
        {tab === 'Officers' && <OfficersPanel departmentId={activeDeptId} />}
        {tab === 'Department' && <DepartmentPanel departmentId={activeDeptId} />}
      </div>
    </div>
  );
};

const AdminDashboard = () => (
  <ProtectedRoute>{(user) => <AdminDashboardInner user={user} />}</ProtectedRoute>
);

export default AdminDashboard;
