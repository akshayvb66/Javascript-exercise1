(function(){
    var readlineSync = require('readline-sync');

var number=[];
    for(i=0;i<5;i++){
   number[i] = readlineSync.question('Enter 5 names '+(i+1)+"  ")
    }
    
    console.log(number.sort())
    })();
    