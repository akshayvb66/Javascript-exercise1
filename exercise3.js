(function(){
  var readlineSync = require('readline-sync');

   var input = readlineSync.question('Enter number '+"  ");

   var number=input.toString();

   var result=[number[0]];

   for(var i=0;i<number.length;i++){
    if(number[i-1]%2===0 && number[i]%2===0){
    result.push('-',number[i])}
    else {
    result.push(number[i])
   }
   }
   console.log(result.join(''));
})();
    
