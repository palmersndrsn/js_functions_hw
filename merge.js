//Team effort for sure
var Arr1 = [3,6,11];
var Arr2 = [2,4,5,8,9];


var merge = function (Arr1,Arr2){

var index1 = 0;
var index2 = 0;
var output = [];

while (index1 < Arr1.length && index2 < Arr2.length) {
	if (Arr1[index1] < Arr2[index2]){
		output.push(Arr1[index1]);
		index1++;
	}
	else {
		output.push(Arr2[index2]); 
	index2++
	} 
}
if ( index1 < Arr1.length) {
	for ( var i = index1; i < Arr1.length; i++) {
		output.push(Arr1[index1]);
	}
	
	
}
else {
	for ( var i = index2; i < Arr2.length; i++) {
		output.push(Arr2[index2]);
	}
	
}
return output
}

console.log(merge(Arr1,Arr2));