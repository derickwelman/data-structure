// Print the first N numbers in crescenting order

function print(n){
	if(n>1)
		print(n-1);
	console.log(n + ' ');
}

print(5);
console.log('-----');

print(10);
console.log('-----');

print(100);
console.log('-----');