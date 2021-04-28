// - Ask the user for their age and how far they are travelling (in km) ✔
const age = Number(prompt("How old are you?"));
const kms = Number(prompt("How far are you going? (in kms)"));

// - The price per travelled km will be £0.21
const pricePerKm = 0.21;

// - Junior passengers (under 18) get a 20% discount
const juniorDiscount = 0.8;

// - Senior passengers (over 65) get a 40% discount
const seniorDiscount = 0.6;

const fullFare = pricePerKm * kms;

let discountedFare = fullFare;
let discountApplied = "none";

if (age < 18) {
	discountedFare = fullFare * juniorDiscount;
	discountApplied = "junior";
}

if (age > 65) {
	discountedFare = fullFare * seniorDiscount;
	discountApplied = "senior";
}

alert(`
Discount applied: ${discountApplied}
The full fare is: £${fullFare}
What you will pay after the discount is: £${discountedFare}
`);
