console.log("Operational");
// Customer Object
var Customer = {
  cash: 5.0,
  items: []
};
// Prices
var prices = {
  apple: 0.5,
  pear: 0.75,
  banana: 0.6,
  orange: 0.4,
  pine: 1.2
};
var response = {
  welcome: `Welcome to the Fruit Shop ${Customer.name}!`,
  choice: `What are ya buying? (apple,pear,banana,orange or pineapple) (exit to leave)  (You have £${cashRound} remaining)`,
  price: `An ${fruit} costs 50p`,
  quant: `How many ${fruit}s would you like?`,
  low: `You cannot have ${quant} ${fruit}s!`,
  stock: `We don't have any ${fruit} in stock`,
  succ: `You have successfully bought ${quant} ${fruit}s`,
  leave: `Thanks for visiting ${Customer.name}!`
};
var exit = false;
var fruit;
// Intro
Customer.name = prompt("What is your name?")
alert(response.welcome);
console.log(Customer.name);
// Choices
while (exit != true){
  var cashRound = Customer.cash.toFixed(2);
  var fruit = prompt(response.choice);
  console.log(fruit);
  switch (fruit) {
      case "apple":
        alert(response.price);
        var quant = prompt(response.quant);
        var total = prices.apple * quant;
        var round = total.toFixed(2);
        if (total == ""){
          break;
        } else{
          var round = total.toFixed(2);
          if (Customer.cash > round  || Customer.cash == round){
            Customer.cash = Customer.cash - round;
            Customer.items.push(quant + " " + fruit);
            alert(response.succ);
            console.log(Customer.items);
            console.log(Customer.cash);
            break;
          } else if (Customer.cash < round) {
            alert(response.low);
            break;
          } else{
            break;
          }
        }
      case "pear":
        alert(response.price);
        var quant = prompt(response.quant);
        var total = prices.pear * quant;
        var round = total.toFixed(2);
        if (total == ""){
          break;
        } else{
          var round = total.toFixed(2);
          if (Customer.cash > round  || Customer.cash == round){
            Customer.cash = Customer.cash - round;
            Customer.items.push(quant + " " + fruit);
            alert(response.succ);
            console.log(Customer.items);
            console.log(Customer.cash);
            break;
          } else if (Customer.cash < round) {
            alert(`You cannot have ${quant} ${fruit}s!`);
            break;
          } else{
            break;
          }
        }
      case "banana":
        alert(response.price);
        var quant = prompt(response.quant);
        var total = prices.banana * quant;
        var round = total.toFixed(2);
        if (total == ""){
          break;
        } else{
          var round = total.toFixed(2);
          if (Customer.cash > round  || Customer.cash == round){
            Customer.cash = Customer.cash - round;
            Customer.items.push(quant + " " + fruit);
            alert(response.succ);
            console.log(Customer.items);
            console.log(Customer.cash);
            break;
          } else if (Customer.cash < round) {
            alert(response.low);
            break;
          } else{
            break;
          }
        }
      case "orange":
        alert(response.price);
        var quant = prompt(response.quant);
        var total = prices.orange * quant;
        if (total == ""){
          break;
        } else{
          var round = total.toFixed(2);
          if (Customer.cash > round  || Customer.cash == round){
            Customer.cash = Customer.cash - round;
            Customer.items.push(quant + " " + fruit);
            alert(response.succ);
            console.log(Customer.items);
            console.log(Customer.cash);
            break;
          } else if (Customer.cash < round) {
            alert(response.low);
            break;
          } else{
            break;
          }
        }
      case "pineapple":
        alert(response.price);
        var quant = prompt(response.quant);
        var total = prices.pine * quant;
        if (total == ""){
          break;
        } else{
          var round = total.toFixed(2);
          if (Customer.cash > round  || Customer.cash == round){
            Customer.cash = Customer.cash - round;
            Customer.items.push(quant + " " + fruit);
            alert(response.succ);
            console.log(Customer.items);
            console.log(Customer.cash);
            break;
          } else if (Customer.cash < round) {
            alert(response.low);
            break;
          } else{
            break;
          }
        }
      case "exit":
        exit = true;
        break;
      case "":
        break;
    default:
      alert(response.stock);
      break;
  }
}
alert (response.leave);
console.log(`You had £${cashRound} remaining`);
if (Customer.items.length == 0){
  console.log(`You Bought Nothing!!`);
} else {
  console.log(`You Bought: ${Customer.items}`);
}

// Alerts
// Prompts
// Integers
// Floats
// Operators
// Booleans
// Array
// Statements (IF/ELSE/SWITCH)
// BONUS - Object
// BONUS - While
// Display Choices
// Quit Display
// 2dp

//RESTRUCTURE OOP
