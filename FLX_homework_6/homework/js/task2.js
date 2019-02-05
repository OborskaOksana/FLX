// Your code goes here

var amount = prompt("Enter 0>amount<=9999999", "amount");
var discount = prompt("Enter 0>discount<=99", "discount");
var total, saved;

if (0 < amount <= 9999999 && 0 < discount <= 99) {
  total = prompt((amount * discount) / 100);
  saved = prompt(amount - total);

  total = total.fixed(2);
  saved = saved.fixed(2);
  alert(
  "Price without discount: "+amount+ "Discount: " +discount+"Price with discount: "+total +"Saved: "+saved);
} else if (amount <= 0) {
  alert("invalid input data");

} else if (discount <= 0) {
  alert("invalid input data");
}