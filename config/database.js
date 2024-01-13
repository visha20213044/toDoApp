 const mongoose=require("mongoose");
 require("dotenv").config();
 const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,
       {
         useNewUrlParser: true,
         useUnifiedTopology: true,
   
       } )
       .then(()=>console.log("Bhaiya db ka succesfully connection ho gaya"))
       .catch((error)=>{
        console.log("Bhaiya kuch toa issue hai yaha");
        console.error(error.message);
        process.exit(1);
       });
    }
    module.exports=dbConnect;