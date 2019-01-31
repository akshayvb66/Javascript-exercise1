(function (){

var readline=require('readline-sync')

var string=readline.question("enter email ")

var mail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

if(mail.test(string))
console.log("valid email address")
else
console.log("invalid email address")
}
)()