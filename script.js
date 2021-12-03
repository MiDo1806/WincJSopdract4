const age = 18;
const isFemale = true;
const driverStatus = "bob";
const firstName = "Bram";
const totalAmount = 50;


if (age >= 18) {
    console.log("Je mag naar binnen");
} else {
    console.log("Nope, je mag niet naar binnen");
}

if (isFemale) {
    console.log("Je ticket zegt dat je een vrouw bent!");
} else {
    console.log(
        "Helaas je hebt aangegeven op je ticket dat je een man bent, je mag niet naar binnen"
    );
}

if (driverStatus === "bob") {
    console.log("Je bent de bob, je mag autorijden");
} else {
    console.log("Je bent geen bob, hier met die autosleutels");
}

if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50% korting");
} else {
    console.log("De korting geld niet voor jou")
}

if (firtsName = "Bram || Sarah") {
    console.log("Het eerste biertje is van het huis")

} else ("Helaas geen prijs, alsnog een fijne avond")

if (totalAmount <= 25 || totalAmount <= 50 || totalAmount <= 100) {
    console.log("Bij 25 of meer krijgt je een portie veggie bitterballen, bij 50 of meer een portie nachos of bij 100 of meer een fles champagne");

} else ("Bedankt voor uw komst");
