
// trick-or-treat bag array
const candies = ["Hershey's", "M&Ms", "Reese's", "Twix", "KitKat"];

function Candy(name, type) {
    this.name = name;
    this.type = type; 
}

// obhect constructors for candies 
const hersheys = new Candy("Hershey's", "chocolate");
const mms = new Candy("M&Ms", "chocolate");
const reeses = new Candy("Reese's", "chocolate");
const twix = new Candy("Twix", "chocolate");
const kitkat = new Candy("KitKats", "chocolate");

// selectCandy function fires when button is clicked
const selectCandy = () => {
