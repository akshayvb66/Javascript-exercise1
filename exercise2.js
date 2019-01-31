(function(){
    var readlineSync = require('readline-sync');

var number=[];
    for(i=0;i<5;i++){
   number[i] = readlineSync.question('Enter number '+(i+1)+"  ")
    }

    var largest=Math.max.apply(Math,number)

    console.log(largest)
    })();
    
