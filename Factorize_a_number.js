// This is a program that acceps a number and returns the value of it's factorial - n!


function factorialize(num) {
  
  if(num === 0){
    return 1;
  }
  
  var fact = 1;
  for(var i =1; i<= num; i++){
    fact *= i;
  }
  return fact;
}

factorialize(5);
