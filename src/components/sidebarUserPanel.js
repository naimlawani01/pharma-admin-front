import React from 'react';
import { useAuth } from '../hooks/useAuth';

const SidebarUserPanel = () => {
  const { user } = useAuth();

  // Vérifier si l'utilisateur est connecté
  if (!user) {
    return null; // Ou afficher un message indiquant que l'utilisateur n'est pas connecté
  }

  const { username, avatar, roles } = user;

  return (
    <div className="flex flex-col items-center p-8 bg-gray-800 text-white">
      <img
        className="w-20 h-20 rounded-full mb-4"
        alt="Nom de l'utilisateur"
        src={avatar || "https://avatar.iran.liara.run/public"} // Image par défaut
      />
      <h3 className="text-lg font-semibold">{username}</h3>
      <p className="text-sm text-gray-400">Rôle : {roles}</p>
    </div>
  );
};

export default SidebarUserPanel;
