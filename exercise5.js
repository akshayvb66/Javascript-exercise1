(function(){
    var readlineSync = require('readline-sync');

var names=[];
    for(i=0;i<5;i++){
   names[i] = readlineSync.question('Enter 5 names '+(i+1)+"  ")
    }

function removeDuplicates(names){
    let unique_array = []
    for(let i = 0;i < names.length; i++){
        if(unique_array.indexOf(names[i]) == -1){
            unique_array.push(names[i])
            }
        }
        return unique_array;
    }
    
console.log(removeDuplicates(names));
})();