const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.json({message: "Tervetuloa git-harjoitukseen!"});
});

app.get("/users", (req, res) => {
    const users = [
        { id: 1, name: "Anna"},
        { id: 2, name: "Valtteri"}
    ];
    res.json(users)
});

app.listen(PORT, () => {
    console.log(`Serveri käynnissä portissa ${PORT}`)
});