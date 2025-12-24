require("dotenv").config()
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Logger middleware
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
})

app.get("/", (req, res) => {
    res.json({
        message: "Tervetuloa git-harjoitukseen!",
        port: PORT
    });
});

app.get("/users", (req, res) => {
    const users = [
        { id: 1, name: "Anna"},
        { id: 2, name: "Valtteri"}
    ];
    res.json(users)
});

app.listen(PORT, () => {
    console.log(`Serveri käynnissä portissa ${PORT}`);
    console.log(`SECRET KEY asetettu: ${process.env.SECRET_KEY ? 'Kyllä' : 'Ei'}`)
});