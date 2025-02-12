
const fs  = require('fs/promises');
const read = async() =>{
    try{
        const data = await fs.readFile("./data.txt","utf-8");
        console.log(data)
    }
    catch(error){
        console.log(error.messege)
    }
}

const write= async ()=>{
    try{
        await fs.writeFile("./data3.txt","This is my new work file","utf-8");
        console.log(data)
    }
    catch(error){
        console.log(error.messege)
    }
}
read()
write()