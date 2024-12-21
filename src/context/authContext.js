import React, { createContext, useState, useEffect, useContext } from 'react';
import { login as loginService } from '../services/authService';
import api from '../utils/axiosInstance';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Charger le token et récupérer les informations utilisateur au démarrage
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            fetchUserInfo(token);
        } else {
            setLoading(false);
        }
    }, []);

    const fetchUserInfo = async (token) => {
        try {
            const response = await api.get('/auth/me', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setUser({ token, ...response.data });
        } catch (err) {
            console.error("Erreur lors de la récupération des informations utilisateur:", err);
            logout(); // Déconnecter en cas d'échec
        } finally {
            setLoading(false);
        }
    };

    const login = async (credentials) => {
        setLoading(true);
        setError(null);
        try {
            const userData = await loginService(credentials); // Appel du service login
            const { access_token } = userData;

            // Stocker le token dans le localStorage
            localStorage.setItem('token', access_token);

            // Récupérer les informations utilisateur après la connexion
            await fetchUserInfo(access_token);

            return userData;
        } catch (err) {
            setError(err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        // Supprimer le token et les informations utilisateur
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout, error }}>
            {!loading && children} {/* Afficher les enfants uniquement si pas en chargement */}
        </AuthContext.Provider>
    );
};

// Hook personnalisé pour accéder au contexte
export const useAuth = () => useContext(AuthContext);
