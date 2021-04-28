var priceTravel = 0.21;
var junior = (20 / 100) * 0.21;
var senior = (40 / 100) * 0.21;
var newLine = "\r\n\n";

var age = Number(prompt("what is your age?"));
var milesKM = Number(prompt("How far are you travelling?"));

if (age <= 18) {
	alert(
		"You Travel Ticket has discount" +
			newLine +
			"Your total is: " +
			"£" +
			milesKM * junior
	);
} else if (age >= 65) {
	alert(
		"You Travel Ticket has discount" +
			newLine +
			"Your total is: " +
			"£" +
			milesKM * senior
	);
} else {
	alert(
		"Your Travel Ticket don't have any discount" +
			newLine +
			"Your total is: " +
			"£" +
			milesKM * priceTravel
	);
}
