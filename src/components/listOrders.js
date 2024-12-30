import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/authContext';
import api from '../utils/axiosInstance';

const statusColors = {
  pending: 'bg-orange-500', // orange pour en attente
  confirmed: 'bg-green-500', // vert pour confirmé
  shipped: 'bg-blue-500', // bleu pour expédié
  delivered: 'bg-green-800', // vert foncé pour livré
  cancelled: 'bg-red-500', // rouge pour annulé
  returned: 'bg-red-700',  // rouge foncé pour retourné
};

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  const { pharmacy } = user;
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await api.get(`/orders/pharmacy/${pharmacy.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setOrders(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des commandes :', error);
      }
    };

    fetchOrders();
  }, [pharmacy.id, token]);

  return (
    <div className="min-h-screen bg-gray-800 text-white p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Liste des Commandes</h1>
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <ul>
            {orders.map((order) => (
              <li
                key={order.id}
                className="flex items-center justify-between px-6 py-4 border-b hover:bg-gray-700"
              >
                <div>
                  <h2 className="text-lg font-medium">{`Produit #${order.user.name} - ${order.date}`}</h2>
                  <p className="text-sm text-gray-400">
                    Pharmacie: {order.pharmacy.name} | Total Produits: {order.productsInOrder.length}
                  </p>
                </div>
                <div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${statusColors[order.status.toLowerCase()]}`}
                  >
                    {order.status}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
