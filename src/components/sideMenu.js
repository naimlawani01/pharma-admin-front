import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDownIcon, ChevronUpIcon, ShoppingCartIcon, UserGroupIcon, ClipboardListIcon } from "@heroicons/react/outline";

const SideMenu = () => {
  const navigate = useNavigate();

  const [openProducts, setOpenProducts] = useState(false);
  const [openUsers, setOpenUsers] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="text-white  flex flex-col">
      {/* Produits */}
      <div>
        <button
          onClick={() => setOpenProducts(!openProducts)}
          className="flex items-center w-full text-left p-2 rounded-lg hover:bg-gray-700"
        >
          <ClipboardListIcon className="w-6 h-6 text-green-500 mr-2" />
          <span>Produits</span>
          {openProducts ? (
            <ChevronUpIcon className="w-5 h-5 ml-auto" />
          ) : (
            <ChevronDownIcon className="w-5 h-5 ml-auto" />
          )}
        </button>
        {openProducts && (
          <div className="ml-4 mt-2">
            <button
              onClick={() => handleNavigation("/list-product")}
              className="block w-full text-left p-2 rounded-lg hover:bg-gray-700"
            >
              Liste des produits
            </button>
            <button
              onClick={() => handleNavigation("/add-product")}
              className="block w-full text-left p-2 rounded-lg hover:bg-gray-700"
            >
              Ajouter un produit
            </button>
          </div>
        )}
      </div>

      {/* Utilisateurs */}
      <div className="mt-2"> {/* Réduit l'espacement entre les sections */}
        <button
          onClick={() => setOpenUsers(!openUsers)}
          className="flex items-center w-full text-left p-2 rounded-lg hover:bg-gray-700"
        >
          <UserGroupIcon className="w-6 h-6 text-green-500 mr-2" />
          <span>Utilisateurs</span>
          {openUsers ? (
            <ChevronUpIcon className="w-5 h-5 ml-auto" />
          ) : (
            <ChevronDownIcon className="w-5 h-5 ml-auto" />
          )}
        </button>
        {openUsers && (
          <div className="ml-4 mt-2">
            <button
              onClick={() => handleNavigation("/list-user")}
              className="block w-full text-left p-2 rounded-lg hover:bg-gray-700"
            >
              Liste des utilisateurs
            </button>
            <button
              onClick={() => handleNavigation("/add-user")}
              className="block w-full text-left p-2 rounded-lg hover:bg-gray-700"
            >
              Ajouter un utilisateur
            </button>
          </div>
        )}
      </div>

      {/* Commandes */}
      <div className="mt-2"> {/* Réduit l'espacement entre les sections */}
        <button
          onClick={() => handleNavigation("/list-order")}
          className="flex items-center w-full text-left p-2 rounded-lg hover:bg-gray-700"
        >
          <ShoppingCartIcon className="w-6 h-6 text-green-500 mr-2" />
          <span>Commandes</span>
        </button>
      </div>
    </div>
  );
};

export default SideMenu;
