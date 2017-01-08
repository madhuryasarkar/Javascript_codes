//We'll pass  an array of two numbers. Return the sum of those two numbers and all numbers between them.

//The lowest number will not always come first.

function sumAll(arr) {
  var max = Math.max.apply(null, arr);
  var min;
  
  if(arr[0] === max){
    min = Math.min(arr[1],max);
  } else {
    min = Math.min(arr[0],max);
  }
  
  var sumArr = [];
  
  for(var i =min; i<=max; i++){
    sumArr.push(i);  
  }
  var sum = 0;
  for(var j=0; j<sumArr.length; j++){
    sum += sumArr[j];
  }
  
  return sum;
} 


sumAll([1, 4]);
