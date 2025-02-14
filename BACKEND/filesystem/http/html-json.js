const http = require('http');
const fs = require('fs/promises')
// const users = [{
//     id:1, name:'bhanu', email:'bhanuopatap274703@gmail.com'
// },
// {
//     id:2, name:'bhanu', email:'bhanupatap274703@gmail.com'  
// },
// {
//     id:3, name:'bhanu', email:'bpsingh274703@gmail.com'
// }]

const server = http.createServer(async(req,res)=>{
    res.writeHead(200,{'content-type':'application/json'});
    const jdata = await fs.readFile("./aa.json","utf-8");
    const users = JSON.parse(jdata);
 
    
    // const data = users.map((user) => {
    //     return user.name;
    // });

    // let dat = ""
    // users.forEach((user)=>{
    //     data += user.name;
    // });
    
    
    res.end(JSON.stringify(users));
});
port = 3000;
server.listen(port,()=>{
    console.log(`server is running on ${port}`)
});