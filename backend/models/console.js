const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');


const consoleSchema = new Schema({
    consoleName : {
        type: String,
        requiere : [true, 'Name required'],
    },
    consoleType: {
        type: String,
        requiere : [true, 'Type required'],
    }
});

//Exportar modelo
const Console = mongoose.model('Console', consoleSchema);
export default Console;