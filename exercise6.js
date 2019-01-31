(function(){
 var array2=([2,4,5,6,7])
 var array1=([3,4,7,8,9,10])
 console.log(array1);
 console.log(array2);
 let difference = array1
 .filter(x => !array2.includes(x))
 .concat(array2.filter(x => !array1.includes(x)));
 console.log(difference);
})();