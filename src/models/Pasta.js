const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    nomeProduto:{
        type: String,
        required: true,
    },
    tipo:{
        type: String,
        required: true,
    },
    picture:{
        type: String,
        required: true,
    }
},{
    timestamps:true,
});


module.exports = model('Pasta', UserSchema);