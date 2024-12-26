import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/axiosInstance";
import { useAuth } from "../context/authContext";

const AddProductForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [prescription, setPrescription] = useState(false);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { user } = useAuth();

  // Charger les catégories disponibles
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get("/categories");
        setCategories(response.data);
      } catch (error) {
        console.error("Erreur lors du chargement des catégories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { pharmacy } = user;

      await api.post(`/pharmacies/${pharmacy.id}/products`, {
        name,
        description,
        img,
        price: parseFloat(price),
        stock: parseInt(stock),
        pharmacy_id: pharmacy.id,
        prescription,
        category_id: categoryId,
      });

      navigate("/pharmacy/list-product");
    } catch (err) {
      setError(
        "Erreur lors de l'ajout du produit. Veuillez vérifier vos informations."
      );
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-800 text-white py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Ajouter un Produit</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-gray-900 p-6 rounded-lg shadow-lg space-y-4"
      >
        
        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

        {/* Nom du produit */}
        <div className="mb-4">
          <label className="block text-gray-400 font-medium mb-2">Nom</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            placeholder="Nom du produit"
            required
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-gray-400 font-medium mb-2">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            placeholder="Description du produit"
            rows="3"
          ></textarea>
        </div>

        {/* URL de l'image */}
        <div className="mb-4">
          <label className="block text-gray-400 font-medium mb-2">
            URL de l'image
          </label>
          <input
            type="text"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            placeholder="URL de l'image"
          />
        </div>

        {/* Prix */}
        <div className="mb-4">
          <label className="block text-gray-400 font-medium mb-2">Prix</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            placeholder="Prix du produit"
            required
          />
        </div>

        {/* Stock */}
        <div className="mb-4">
          <label className="block text-gray-400 font-medium mb-2">Stock</label>
          <input
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            placeholder="Quantité en stock"
            required
          />
        </div>

        {/* Catégorie */}
        <div className="mb-4">
          <label className="block text-gray-400 font-medium mb-2">
            Catégorie
          </label>
          <select
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
          >
            <option value="">Sélectionnez une catégorie</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Prescription */}
        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            checked={prescription}
            onChange={(e) => setPrescription(e.target.checked)}
            className="w-5 h-5 text-teal-400 focus:ring-teal-400 bg-gray-800 border-gray-700 rounded"
          />
          <label className="ml-2 text-gray-400 font-medium">
            Requiert une ordonnance
          </label>
        </div>

        {/* Bouton Soumettre */}
        <button
          type="submit"
          className="w-full bg-teal-400 text-gray-800 py-2 rounded-md hover:bg-teal-500 transition"
        >
          Ajouter le produit
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
