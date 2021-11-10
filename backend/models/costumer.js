const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const costumerSchema = new Schema({
    costumerId: {
        type : Number,
        required : true,
        unique : true,
    },
    costumerCategory: {
        type : String,
        requiere : [true, 'Category required'],
    },
    costumerConsole: {
        type : String,
        requiere : [true, 'Console required'],
    },
    costumerClassification: {
        type : Schema.Types.ObjectId, ref: 'Classification'
    }
});

const Costumer = mongoose.model('Costumer', costumerSchema);
export default Costumer;