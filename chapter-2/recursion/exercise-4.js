// check if a value is present in a vector

function check(vector, n, value){
	if(n==0)return vector[n]==value;
	return vector[n]==value || check(vector, n-1, value);
}

vector = [0,2,4,6,8,100];
console.log(vector, 2, check(vector, vector.length-1, 2));
console.log(vector, 5, check(vector, vector.length-1, 5));
console.log(vector, 100, check(vector, vector.length-1, 100));
console.log(vector, 3, check(vector, vector.length-1, 3));
