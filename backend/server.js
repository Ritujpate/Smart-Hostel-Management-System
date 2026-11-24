const express = require("express");
const cors = require("cors");
const path = require("path");

const db = require("./db");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve frontend files
app.use(express.static(path.join(__dirname, "..")));

// Login API
app.post("/api/login", (req, res) => {

    const { username, password } = req.body;

    const sql = `
        SELECT id, username, password, role
        FROM users
        WHERE username = ?
    `;

    db.query(sql, [username], (err, results) => {

        if (err) {
            console.log(err);

            return res.status(500).json({
                success: false,
                message: "Database error"
            });
        }

        if (results.length === 0) {
            return res.status(401).json({
                success: false,
                message: "Invalid username or password"
            });
        }

        const user = results[0];

        if (user.password !== password) {
            return res.status(401).json({
                success: false,
                message: "Invalid username or password"
            });
        }

        let dashboard;

        if (user.role === "student") {
    dashboard = "student_dashboard.html";
}
        else if (user.role === "warden") {
            dashboard = "warden-dashboard.html";
        }
        else if (user.role === "admin") {
            dashboard = "admin/admin-dashboard.html";
        }

        res.json({
            success: true,
            username: user.username,
            role: user.role,
            dashboard: dashboard
        });

    });
});

// Start server
app.listen(5000, () => {
    console.log("SHMS Backend running at http://localhost:5000");
});