const { GameModel } = require("../Model/game.model");


const PostGameController = async (req, res) => {
    const { level, category, number } = req.body;
    console.log(level, category, number)
    const data = await GameModel.find({
        category: category, difficulty: level
    }).limit(number);
    console.log(data)
    if (data) {
        res.send({ msg: 'Data found', data: data })
    }
    else {
        res.send({ msg: 'Data not found', data: [] })
    }
}
const GetGameController = async (req, res) => {
    const data = await GameModel.find();
    res.send({ msg: 'Data found', data: data })
}

module.exports = {
    PostGameController, GetGameController
}