const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.json({message: "Tervetuloa git-harjoitukseen!"});
});

app.listen(PORT, () => {
    console.log(`Serveri käynnissä portissa ${PORT}`)
});