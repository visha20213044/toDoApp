const Todo=require("../models/Todo");
//route handler
exports.createTodo=async(req,res)=>{
    try{
        const{title,description}=req.body;
        const response=await Todo.create({title,description});
        res.status(200).json(
            {
            
                success:true,
                data:response,
                message:'Entry created Successfully'
            
        });

    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}