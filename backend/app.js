const mongoose =require('mongoose')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors =require ('cors')



app.use(express.json())


require('./src/db/models/Produto');
const Produto = mongoose.model("produto");

 require("./src/db/models/Usuario")
 const Usuario = mongoose.model('usuarios')

require("./src/db/connect")


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get('/produto', async(req, res) => {
    const produtoResponse = await Produto.find();
    const produtoJson = await produtoResponse;

    return res.json(produtoJson);
});



app.get('/usuarios',async(req,res)=>{
   const usuariosResponse = await Usuario.find()
   const usuariosJson = await usuariosResponse

   return res.json(usuariosJson)

});


app.post('/usuarios',async(req,res)=>{
    const novoUsuario = new Usuario({
        nome:req.body.nome,
        msg:req.body.msg
    });

    novoUsuario.save()
    res.json({msg:"Parabéns, cadastro concluído com sucesso",usuario:novoUsuario})
})


app.listen(8080)