const {Router} = require('express');
const router = Router(); 

//routes 
router.get('/Test',(req,res)=>{
    const data = {
        "name":"fast",
        "webdise":"javier.com"
    }

    res.json(data);
});


module.exports = router;

