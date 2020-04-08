// show binary representation of a decimal number

function printBinary(n){
	if(n<2){
		console.log(n);
		return;
	};
	printBinary(Math.floor(n/2));
	console.log(n%2);
}

printBinary(0);
console.log('-----');

printBinary(1);
console.log('-----');

printBinary(2);
console.log('-----');

printBinary(3);
console.log('-----');

printBinary(4);
console.log('-----');

printBinary(5);
console.log('-----');

printBinary(10);
console.log('-----');

printBinary(100);
console.log('-----');