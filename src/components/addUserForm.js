import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from "../utils/axiosInstance";
import { useAuth } from '../context/authContext';

const AddUserForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('pharmacy_employee'); // Rôle par défaut
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { pharmacy } = user;

      await api.post(`pharmacies/${pharmacy.id}/users`, {
        username,
        email,
        password,
        role,
        first_name: firstName,
        last_name: lastName,
      });

      navigate('/list-user');
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'utilisateur. Veuillez vérifier vos informations.", error);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-800 text-white py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Ajouter un utilisateur</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-gray-900 p-6 rounded-lg shadow-lg space-y-4"
      >
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-300">
            Prénom
          </label>
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Prénom"
            className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-300">
            Nom
          </label>
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Nom"
            className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
          />
        </div>
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-300">
            Nom d'utilisateur
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Nom d'utilisateur"
            className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-300">
            Mot de passe
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mot de passe"
            className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
          />
        </div>
        <div>
          <label htmlFor="role" className="block text-sm font-medium text-gray-300">
            Rôle
          </label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
          >
            <option value="pharmacy_employee">Employé de pharmacie</option>
            <option value="pharmacy_admin">Admin de pharmacie</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-teal-400 text-gray-800 py-2 rounded-md hover:bg-teal-500 transition"
        >
          Ajouter l'utilisateur
        </button>
      </form>
    </div>
  );
};

export default AddUserForm;
