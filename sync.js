function greet(){
  return function()

{
    console.log("welcome to home page")
}
}

const result = greet();

result();


  