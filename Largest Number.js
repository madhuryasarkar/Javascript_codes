 var arr =[1,2,35,55,10,15];
 
 var count = 0,max =0;
 
 for(var i=0;i<arr.length;i++){
	 if(arr[i]>arr[i+1]) count = arr[i];
	 else count = arr[i+1];
	 
	 if(max<count)max = count;
 }
 
 console.log(max); // Prints the largest number.
 
 arr.sort(function(a, b) {
	  return a - b;
	});
 console.log(arr);
 
 arr.pop();
 console.log(arr);
 
 console.log(arr[arr.length-1]); // Prints the second largest number.
 
 
 
