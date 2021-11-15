const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const gameSchema = new Schema({
    gameName : {
        type : String,
        required : [true, 'Game name required'],
    },
    gameAbout : {
        type : String,
        required : [true, 'About of game required'],
    },
    gameClass :{
        type : String,
        required : [true, 'Class game required'],
    },
    gameConsole :{
        type : String,
        required : [true, 'Console of fame required'],
    },
    gameClasification: {
        type : Schema.Types.ObjectId, ref: 'Classification'
    }
});

//Exportar modelo
const Game = mongoose.model('Game', gameSchema);
export default Game;