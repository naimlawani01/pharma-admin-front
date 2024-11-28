import React from 'react';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';

const HomePage = () => {
  return (

    <div className="flex min-h-screen bg-gray-800">
      {/* Navbar */}
      <Navbar />
      {/* Sidebar avec hauteur 100% de la fenêtre */}
      <div className="w-64 bg-gray-900 flex flex-col h-full">
        <Sidebar /> {/* La sidebar avec une hauteur de 100vh */}
      </div>

      {/* Main Content */}
      <div className="flex-grow p-20 text-white">
        

        <h1 className="text-2xl font-bold mb-4">Bienvenue sur le Tableau de Bord</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Exemple de cartes de statistiques */}
          <div className="p-4 bg-gray-700 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Produits</h2>
            <p className="text-4xl font-bold mt-2">150</p>
          </div>

          <div className="p-4 bg-gray-700 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Utilisateurs</h2>
            <p className="text-4xl font-bold mt-2">45</p>
          </div>

          <div className="p-4 bg-gray-700 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Commandes</h2>
            <p className="text-4xl font-bold mt-2">320</p>
          </div>
        </div>

        {/* Autre contenu */}
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-3">Activités récentes</h2>
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <p>• Produit ajouté par Admin le 27/11/2024</p>
            <p>• Commande #1234 confirmée par User01</p>
            <p>• Nouvel utilisateur inscrit : Jane Doe</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
