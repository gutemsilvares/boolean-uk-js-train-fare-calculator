var priceTravel = 0.21;
var junior = (20 / 100) * 0.21;
var senior = (40 / 100) * 0.21;

var age = Number(prompt("what is your age?"));
var milesKM = Number(prompt("How far are you travelling?"));

if (age <= 18) {
	alert(
		"You Travel Ticket has discount Your total is: " + "£" + milesKM * junior
	);
} else if (age >= 65) {
	alert(
		"You Travel Ticket has discount Your total is: " + "£" + milesKM * senior
	);
} else {
	alert(
		"Your Travel Ticket don't have any discount, Your total is: " +
			"$" +
			milesKM * priceTravel
	);
}
