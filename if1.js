var num1 = parseInt(prompt("Enter a number: "));
var num2 = parseInt(prompt("Enter another number: "));
var num3 = parseInt(prompt("Enter one more number: "));

if ((num1 + num2 + num3) == 21){
    alert("BLACKJACK")
}
else if ((num1 + num2 + num3) > 21){
    alert("BUST")
}
else if ((num1 + num2 + num3) < 21){
    alert("Total is: " + (num1 + num2 + num3))
}