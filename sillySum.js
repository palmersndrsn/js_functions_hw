var arr = [2,4,6,8]

var sillySum = function (funArr) {
	count = 0
	for ( var i = 0; i < funArr.length; i++) {
		count += (funArr[i] * i)
		
	}
	return count
}
console.log(sillySum(arr));