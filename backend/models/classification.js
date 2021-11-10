const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const esrbSchema = new Schema({
    esrbCode: {
        type : String,
        requiere : [true, 'Code required'],
    },
    esrbAge: {
        type: Number,
    }
});

//Exportar modelo
const Classification = mongoose.model('Classification', esrbSchema);
export default Classification;