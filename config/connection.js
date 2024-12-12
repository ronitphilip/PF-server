const mongoose = require('mongoose')
const connection_string = process.env.connectionstring

mongoose.connect(connection_string).then((res)=>{
    console.log("Mongodb Connected Successfully");
}).catch((err)=>{
    console.log("Mongodb Connection Failed");
    console.log(err);
})