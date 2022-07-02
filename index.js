const express = require("express");

const app = express();


const PORT = 3050;

app.get("/",(req,res)=>{
    res.status(200).send("Healthy Again");
})


app.listen(PORT,()=>{
    console.log("Process Running; Server Started");
});
