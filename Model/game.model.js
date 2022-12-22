const { default: mongoose } = require("mongoose");

const GameSchema = mongoose.Schema({
    category: { type: String },
    type: { type: String },
    difficulty: { type: String },
    question: { type: String },
    correct_answer: { type: String },
    incorrect_answers: [String]
})

const GameModel = mongoose.model("game", GameSchema);

module.exports = {
    GameModel
}