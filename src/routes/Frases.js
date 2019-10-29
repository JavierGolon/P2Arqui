const{Router} = require('express');
const router = Router();
const _ = require('underscore');
// traendo datos

const frases = require('./samples.json');
console.log(frases);

// METODO GET
router.get('/GetFrases',(req,res)=>{

    res.json(frases);

});

//METODO POST
router.post('/PostFrases',(req,res)=>{
    const{Tipo,Contenido} = req.body;
    if(Tipo&&Contenido){
        const newData = {...req.body};
        frases.push(newData);
        res.json(frases)
    }else{
        res.status(500).json({error:'Ther Was an Error.'});
    }
});

// METODO ELIMINAR  para agregar params es :id
router.delete('/DeletePrueba',(req,res)=>{
    const{id}=req.params;
    _.each(frases,(frase,i)=>{
        if(frases.id==id){
            frases.splice(i,1);
        }
    });
   // 
   res.send(frases); 

});




module.exports = router;