const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Produto = new Schema({

    categoria : {
        type : String,
        required : true
    }, 
    descricao : {
        type : String,
        required : true
    },
    imagem : {
        type : String,
        required : true
    },
    precoinicial : {
        type: Number,
        required : true
    },
    precofinal : {
        type : Number,
        required : true
    }
})

mongoose.model('produto', Produto);