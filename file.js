const fs= require("fs");
// sync..
// fs.writeFileSync('./text.txt',"hello world");


// async
// fs.writeFile('./text.txt',"hello world async",(err)=>{})


// const result=fs.readFileSync("./contact.txt" , "utf-8");
// // console.log(result);
// fs.readFile("./contact.txt" , "utf-8" , (err,result) =>
// {
//     if(err)
//         {
//             console.log('ERROR',err)
//         }
//         else{
//             console.log(result);
//         }
// })
fs.appendFileSync("./text.txt" ,`${Date.now()}hey there\n`);

// fs.cpSync("./text.txt" , "./copy.txt");

// fs.unlinkSync("./copy.txt");
console.log(fs.statSync('./text.txt'));








