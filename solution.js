for (var i =1; i < 100; i++) {
	var printOut = "";
	if(i % 3 === 0) {
		printOut += "Fizz";
	}
	if(i % 5 === 0) {
		printOut += "Buzz";
	}
	if (!printOut) {
		printOut = i;
	}
	console.log(printOut);
}
