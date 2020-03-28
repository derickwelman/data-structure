// Find max in a vector

function max(vector, n){
	if(n==0)return vector[0];
	return Math.max(vector[n], max(vector, n-1));
}

var vector = [0,5,4,8,6,5,489,1589,686,18,1];
console.log(vector, max(vector, vector.length-1));

vector = [9,8,7,6,5,4,3,2,1,0];
console.log(vector, max(vector, vector.length-1));

vector = [0,1,2,3,4,5,6,7,8,9];
console.log(vector, max(vector, vector.length-1));

vector = [0,1,2,3,4,100,5,6,7,8,9];
console.log(vector, max(vector, vector.length-1));