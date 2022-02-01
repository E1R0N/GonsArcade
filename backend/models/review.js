const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const reviewSchema = new Schema({
    reviewGame: {
        type : Schema.Types.ObjectId, ref: 'Game',
        requiere : [true, 'Game name required'],
    },
    reviewTitle: {
        type : String,
        requiere : [true, 'Title required'],
    },
    reviewDescription: {
        type : String,
        requiere : [true, 'Description required'],
    }
});

const Review = mongoose.model('Review', reviewSchema);
export default Review;