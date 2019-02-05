// Your code goes here

var amount = prompt("Enter 0>amount<=9999999", "amount");
var discount = prompt("Enter 0>discount<=99", "discount");
var total, amount_discount;

if (0 = amount <= 9999999 && 0 < discount <= 99) {
  total = (amount * discount) / 100;
  amount_discount = (amount - total);
  total.toFixed(2);
  amount_discount.toFixed(2);
  alert(
    "Price without discount: " + amount + "Discount: " + discount + "Price with discount: " + amount_discount + "Saved: " + total);
} else if (amount < 0 || discount < 0) {
  alert("invalid input data");
}