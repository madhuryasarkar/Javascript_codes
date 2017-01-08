// Check if a string ( str) ends with the given target string (target).


function confirmEnding(str, target) {

  var fullStr = str.substr(-target.length);
  if(fullStr === target){
    return true;
  } else {
  return false;
  }
  
}

confirmEnding("Bastian", "n");
