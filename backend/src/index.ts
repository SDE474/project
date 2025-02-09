import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Admin API Route
app.get("/api/admin", (req: Request, res: Response) => {
    res.json({ message: "Admin data fetched successfully" });
});

// Login API Route (Example)
app.post("/api/login", (req: Request, res: Response) => {
    const { username, password } = req.body;

    if (username === "admin" && password === "password") {
        res.json({ message: "Login successful", token: "fake-jwt-token" });
    } else {
        res.status(401).json({ message: "Invalid credentials" });
    }
});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
