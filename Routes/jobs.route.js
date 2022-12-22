const { Router } = require("express");
const { PostGameController, GetGameController } = require("../Controller/game.controller");


const GameRoute = Router();
GameRoute.post("/", PostGameController)
GameRoute.get("/", GetGameController)

module.exports = {
    GameRoute
}