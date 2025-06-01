import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // ⬅️ new

    const fetchVerifyToken = async (token) => {
        try {
            const fetchData = await fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/verify-token`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = await fetchData.json();
            setUser(data.user_data);
        } catch {
            setUser(null);
        } finally {
            setLoading(false); // ⬅️ done verifying
        }
    };

    useEffect(() => {
        const token = localStorage.getItem("access_token");
        if (token) {
            fetchVerifyToken(token);
        } else {
            setUser(null);
            setLoading(false); // ⬅️ no token, stop loading
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
