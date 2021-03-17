// Gives table of powers of two whose value less than 
let x = 0;
let i = 1;
while (power < 256) {
	power = 2 ** i;
	console.log("2 ^" + i + "= " + power);
	i++;
}
