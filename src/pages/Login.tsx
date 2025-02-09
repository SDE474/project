// src/pages/Login.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        if (username === "admin" && password === "password") {
            localStorage.setItem("token", "fake-jwt-token");
            navigate("/admin");
        } else {
            setError("Invalid credentials");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6">Admin Login</h2>
                <form onSubmit={handleLogin}>
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required className="w-full px-3 py-2 border rounded mb-4" />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full px-3 py-2 border rounded mb-4" />
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Login</button>
                </form>
                {error && <p className="text-red-500 mt-2">{error}</p>}
            </div>
        </div>
    );
};
export default Login;