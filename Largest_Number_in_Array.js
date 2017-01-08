// Return an array consisting of the largest number from each provided sub-array. 


function largestOfFour(arr) {
  
  var endArr = [];
  for(var i=0; i<arr.length;i++){
    var large = 0;
    
    for(var j=0; j<arr[i].length; j++){
      if(arr[i][j] > large){
        large = arr[i][j];
      }
    }
    endArr[i] = large;
  }
  return endArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
