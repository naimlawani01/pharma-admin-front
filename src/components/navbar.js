import React from 'react';
import { useAuth } from '../hooks/useAuth';

const Navbar = () => {
  const { user, logout } = useAuth();
  const { pharmacy } = user;
  console.log(user)

  return (
    <nav className="fixed top-0 w-full bg-gray-800 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Nom de la pharmacie */}
          <div className="text-white font-semibold text-xl">
            {pharmacy?.name || 'Nom de la pharmacie'}
            
          </div>
          

          {/* Bouton de déconnexion */}
          <button
            onClick={logout}
            className="px-4 py-2 text-sm text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
          >
            Déconnexion
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
