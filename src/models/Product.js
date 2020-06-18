const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    produtoNome:{
        type: String,
        required: true,
    },
    preco:{
        type: String,
        required: true,
    },
    tipo:{
        type: [String],
        required: true,
    },
    picture:{
        type: String,
        required: true,
    },
    pedido:{
        type: [String],
        required: true,
    }
},{
    timestamps:true,
});


module.exports = model('Product', UserSchema);