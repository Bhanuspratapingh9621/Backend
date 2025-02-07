const { error } = require("console")

const read = ()=>{
    const fs = require("fs")
    fs.readFile("./data.txt","utf-8",(error,data)=>{
        if (error){
            console.errror("Error reading file",data);
        }
    });
}
// read();
// console.log("complete me first");
module.exports=read;