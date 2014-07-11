var myArray = []
var numSquare = function (maxNum) {
		for (var i = 0; i <= maxNum; i += 1) {
		
		if (Math.sqrt(i) % 1 === 0) { 		
		
			myArray.push(i);
		}
	}
	return myArray;
} 
console.log(numSquare(20));
