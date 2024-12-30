import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import api from "../utils/axiosInstance";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const { user } = useAuth();
  const navigate = useNavigate();
  const { pharmacy } = user;
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get(`pharmacies/${pharmacy.id}/users`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUsers(response.data);
      } catch (error) {
        console.error('Erreur lors du chargement des utilisateurs:', error);
      }
    };

    fetchUsers();
  }, [users]);

  const handleDelete = async (id) => {
    try {
      await api.delete(`pharmacies/${pharmacy.id}/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(users.filter((user) => user._id !== id));
    } catch (error) {
      console.error("Erreur lors de la suppression de l'utilisateur:", error);
    }
  };

  const handleEdit = (id) => {
    navigate(`/update-user/${id}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-800 text-white p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Liste des Utilisateurs</h1>
      </div>
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
        {users.length === 0 ? (
          <p className="text-gray-400">Aucun utilisateur trouvé.</p>
        ) : (
          <ul className="space-y-4">
            {users.map((user) => (
              <li
                key={user._id}
                className="flex items-center justify-between bg-gray-700 p-4 rounded-md shadow-md"
              >
                <div>
                  <h2 className="text-lg font-semibold">{`${users.firstname} ${user.name}`}</h2>
                  <p className="text-gray-400">
                    Email: {user.email} | Rôle: {users.role}
                  </p>
                </div>
                <div className="flex space-x-3">
                  <button
                    onClick={() => handleEdit(user._id)}
                    className="p-2 bg-blue-500 hover:bg-blue-600 rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 3.487a2.25 2.25 0 013.182 3.182L7.062 19.65a4.5 4.5 0 01-1.58 1.053l-3.325 1.108 1.107-3.326a4.5 4.5 0 011.054-1.58L16.862 3.487z"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="p-2 bg-red-500 hover:bg-red-600 rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 9l-.867 10.142A2.25 2.25 0 0116.39 21H7.61a2.25 2.25 0 01-2.243-1.858L4.5 9m5.25 4.5v5.25m4.5-5.25v5.25M10.5 4.5h3m-6 0h9M6.75 4.5l.48-1.44A1.125 1.125 0 018.28 3h7.44c.487 0 .92.31 1.05.78l.48 1.44"
                      />
                    </svg>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default UserList;
