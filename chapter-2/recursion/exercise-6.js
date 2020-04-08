// Invert vector order

function invert(vector, n){
	if(n<vector.length/2) return vector;
	var temp = vector[n];
	vector[n] = vector[vector.length -1 -n];
	vector[vector.length -1 -n] = temp;
	return invert(vector, n-1);
}

var vector = [0,1,2,3,4,5,6,7,8,9];
console.log(vector);
console.log(invert(vector, vector.length-1));
console.log('-------------');

vector = [0,1,2,3,4,5,6,7,8,9,10];
console.log(vector);
console.log(invert(vector, vector.length-1));
console.log('-------------');

vector = [9,8,7,6,5,4,3,2,1];
console.log(vector);
console.log(invert(vector, vector.length-1));
console.log('-------------');