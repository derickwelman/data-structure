// Print the first N numbers in decrescenting order

function print(n){
	console.log(n + ' ');
	if(n>1)
		print(n-1);
}

print(5);
console.log('-----');

print(10);
console.log('-----');

print(100);
console.log('-----');