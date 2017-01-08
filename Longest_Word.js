// Program to find out the length of the longest word in the string.

function findLongestWord(str) {
  var newStr = [];
  var curr = 0;
  newStr = str.split(' ');
  for(var i=0; i<newStr.length;i++){
    
    if(  newStr[i].length > curr){
      curr = newStr[i].length;
    } 
  }
   return curr;
   
}

findLongestWord("The quick brown fox jumped over the lazy dog");
