const fs = require('fs');


fs.readFile('input.txt' ,(err, content)=>{
       if(err)
        {
             return console.log(err)
        }
        else
        {
            console.log("read content is :"+ content)
        }
} )

console.log("hello from last")