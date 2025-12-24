const express = require("express");
const app = express();
const PORT = 3000;

// Logger middleware
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
})

app.get("/", (req, res) => {
    res.json({message: "Tervetuloa git-harjoitukseen!"});
});

app.listen(PORT, () => {
    console.log(`Serveri käynnissä portissa ${PORT}`)
});