const fs = require('fs');


// fs.readFile('input.txt' ,(err, content)=>{
//        if(err)
//         {
//              return console.log(err)
//         }
//         else
//         {
//             console.log("read content is :"+ content)
//         }
// } )

// console.log("hello from last")

fs.writeFile('output.txt' , "hello students"  , err=>{
    if(err)
        {
            return console.log(err)
        }
console.log("written successfully");
})