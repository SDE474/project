// src/pages/Admin.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) navigate("/login");
    }, [navigate]);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold">Admin Panel</h1>
            <p>Welcome to the admin dashboard!</p>
            <button onClick={() => { localStorage.removeItem("token"); navigate("/login"); }} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
                Logout
            </button>
        </div>
    );
};
export default Admin;
