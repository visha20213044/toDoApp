const Todo=require("../models/Todo");
//route handler
exports.getTodo=async(req,res)=>{
    try{
        const todos=await Todo.find({});
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"Entry Fetch Succecfully"
        });
        
    }
    catch(err){
      console.error(err);
      console.log(err);
      res.status(500)
      .json({
        success:false,
        data:"internal servar error",
        message:err.message,
      })
    }
}
exports.getTodoById=async(req,res)=>{
    try{
        const id =req.params.id;
        const todo=await Todo.findById({_id:id})
        if(!todo){
            return res.status(404).json({
                success:false,
                message:"No Data found at Id",
            })
        }
        //if id found
        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo ${id} data succesfully fetch`,
        })
    }
    catch(error){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
          success:false,
          data:"internal servar error",
          message:err.message,
        })
    }
}