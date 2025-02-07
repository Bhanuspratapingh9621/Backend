const fs = require('fs');
const data = fs.readFileSync("./data.txt","utf-8");
console.log(data);
if (data.match("H")){
    console.log(" H is Found");
    const data = data.repalce("H","ABES");
    fs.writeFileSync("./data.txt",newdata,"utf-8");
}