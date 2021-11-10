const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const rol ={
    values: ['Admin','Cliente'],
    message: '{VALUE} rol no existe'
}

const userSchema = new Schema({
    userId: {
        type : Number,
        required : true,
        unique: true,
    },
    userGenre: {
        type : String,
        required: [true, 'Genre required'],
    },
    userFirstName : {
        type : String,
        required : [true, 'First name required'],
    },
    userLastName : {
        type : String,
        requiere : [true, 'Last name required'],
    },
    userMail: {
        type : String,
        required : [true, 'Email required'],
        unique: true,
    },
    userPassword: {
        type : String,
        required : [true, 'Password required'],
    },
    userRole: {
        type : String,
        default : 'Cliente',
        enum : rol,
    },
    userStatus: {
        type : Boolean,
        default : true,
    }
});

userSchema.plugin(uniqueValidator, {message: 'Error, expected {} unique'});

userSchema.methods.toJSON = function (){
    const obj = this.toObject();
    delete obj.userPassword;
    return obj;
}

const User = mongoose.model('User', userSchema);
export default User;