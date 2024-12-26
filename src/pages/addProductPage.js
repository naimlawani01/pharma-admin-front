import React from "react";
import Navbar from "../components/navbar"; // Composant Navbar
import Sidebar from "../components/sidebar"; // Composant Sidebar
import AddProductForm from "../components/addProductForm"; // Composant Formulaire d'ajout de produit

const AddProductPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-800">
      {/* Navbar */}
      <Navbar />
      
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 flex flex-col h-full">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-grow p-20 text-white">
        {/* Formulaire d'ajout de produit */}
        
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
          <AddProductForm />
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;
