import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import { useAuth } from '../features/auth/AuthContext';

const Navbar = () => {
  const location = useLocation();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const isAdminRoute = location.pathname.startsWith('/admin');

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-300">
          Eventify
        </Link>

        <div className="flex items-center gap-4">
          <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium">
            Home
          </Link>

          {user ? (
            <>
              {user.email === 'admin@example.com' && (
                <Link
                  to="/admin"
                  className={`text-sm ${isAdminRoute ? 'text-indigo-600 dark:text-indigo-300' : 'text-gray-500 dark:text-gray-400'} hover:text-indigo-600 dark:hover:text-indigo-400`}
                >
                  Admin
                </Link>
              )}
              <span className="text-gray-600 dark:text-gray-400 text-sm">{user.email}</span>
              <button
                onClick={handleLogout}
                className="text-red-500 hover:text-red-700 font-medium text-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium">
                Login
              </Link>
              <Link to="/signup" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium">
                Signup
              </Link>
            </>
          )}

          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

