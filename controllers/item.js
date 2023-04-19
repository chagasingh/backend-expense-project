const Item = require('../modals/inventory')

exports.postUser = async (req,res,next)=>{

    try{

        const amount = req.body.amount;
        const name = req.body.name;
        const description = req.body.description;
        const quantity = req.body.quantity;

        const data = await Item.create({ amount:amount,name:name,description:description,quantity:quantity })
        res.status(201).json({newUserDetails : data}) 
    }
    catch(err){
        res.status(500).json({
            error : err
        })
    }
}


exports.getUser = async(req,res,next)=>{
    try{
        const items = await Item.findAll();
        console.log(`${items}------line 44 get`)
        res.status(200).json({allItems:items})  
    }catch(err){
        console.log(err)
        res.sendStatus(500).json({err:'NO data show show'})
    }
    
}

exports.deleteUser = async (req,res,next) => {
    try{
        if (!req.params.id){
            console.log('ID is missing.....');
            res.status(404).json({err : 'ID is missing...'})
        }
        let newQuantity;
        const amount = req.body.amount;
        const name = req.body.name;
        const description = req.body.description;
        const quantity = req.body.quantity;
        const uId = req.params.id;
        newQuantity = quantity-1
        // await Item.destroy({where:{id:uId},})
        const data = await Item.create({ amount:amount,name:name,description:description,quantity:newQuantity })
        res.status(201).json({newUserDetails : data}) 
    }catch(err){
        console.log(err)
        res.sendStatus(500).json(err)
    }
    
}


exports.getback = (req,res,next) => {
    res.send('Form is submitted')
}