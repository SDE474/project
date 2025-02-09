export const login = async (username: string, password: string) => {
    const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message);

    localStorage.setItem("token", data.token);
    return data;
};

export const getAdminData = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch("http://localhost:5000/api/admin", {
        headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) throw new Error("Unauthorized");
    return response.json();
};
