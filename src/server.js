const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.json({ msg: "Olá" } );
});

app.get("/users", (req, res) => {
    const user = [{name: "Bruno"}, {name: "Carla"}];
    res.status(200).json({msg: "Listagem de usuários: ", user });
});

app.listen(3333, () => {
    console.log("Servidor na porta 3333");
}); 