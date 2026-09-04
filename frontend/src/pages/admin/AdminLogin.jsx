import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authApi } from '../../services/apiService';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await authApi.login(email, password);
      navigate('/admin');
    } catch (err) {
      setError(err.message || 'Login gagal');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#000B18] px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-[#00172d] border border-white/10 rounded-2xl p-8"
      >
        <h1 className="text-xl font-bold text-white mb-1">Admin CMS</h1>
        <p className="text-gray-400 text-sm mb-6">IEEE SB Telkom University</p>

        {error && (
          <p className="text-red-400 text-sm mb-4 bg-red-500/10 border border-red-500/30 rounded-lg px-3 py-2">
            {error}
          </p>
        )}

        <label className="block text-xs text-gray-400 mb-1">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full mb-4 bg-[#000B18] border border-white/10 rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-blue-500"
        />

        <label className="block text-xs text-gray-400 mb-1">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full mb-6 bg-[#000B18] border border-white/10 rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-blue-500"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white text-sm font-semibold rounded-lg py-2.5 transition-colors"
        >
          {loading ? 'Masuk...' : 'Masuk'}
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
