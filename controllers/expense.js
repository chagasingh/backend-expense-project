const User = require('../modals/expense')

exports.postUser = async (req,res,next)=>{

    try{

        const amount = req.body.amount;
        const description = req.body.description;
        const category = req.body.category;

        const data = await User.create({ amount:amount,description:description,category:category })
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
        const users = await User.findAll();
        console.log(`${users}------line 44 get`)
        res.status(200).json({allUsers:users})  
    }catch{
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
        const uId = req.params.id;
        await User.destroy({where:{id:uId}})
        res.sendStatus(200);
    }catch(err){
        console.log(err)
        res.sendStatus(500).json(err)
    }
    
}


exports.getback = (req,res,next) => {
    res.send('Form is submitted')
}