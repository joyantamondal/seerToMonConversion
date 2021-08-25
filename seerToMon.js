//*******************Problem 1 seerToMon******************
function seerToMon(seer) {
  //if user enter zero  for conversion then come to this condition
  if (seer == 0) {
    return "Please Enter A Number Greater than 0";
  }
  //is user enter positive numbers only then come to this condition
  else if (seer > 0) {
    //convert seer to mon here
    const mon = seer / 40;
    return mon;
  } else {
    //if user enter negative number or anything then come to this condition
    return "Only Positive Number Accepted";
  }
}
//calling function(seerToMon) from here and store return value into seerToMonResult
const seerToMonResult = seerToMon(-1);
//show conversion result here
console.log(seerToMonResult);

// ******************Problem 2 totalSales******************
function totalSales(shirt, pant, shoes) {
  // declare default shirt, pant and shoes prices here
  const oneShirtPrice = 100;
  const onePantPrice = 200;
  const oneShoesPrice = 500;

  if (shirt < 0 || pant < 0 || shoes < 0) {
    return "Only Positive Number Accepted";
  } 
  else if (
    typeof shirt == "string" || typeof pant == "string" || typeof shoes == "string" ) {
    return "Character / String  not accepted";
  }
  //how many shirt you selected and   total selected shirt price  calculation here
  const shirtPriceTotal = shirt * oneShirtPrice;
  //how many pant you selected and   total selected pant price  calculation here
  const pantPriceTotal = pant * onePantPrice;
  //how many shoes you selected and   total selected shoes price  calculation here
  const shoesPriceTotal = shoes * oneShoesPrice;
  // total shirt, pant and shoes seeling price sum return here
  return shirtPriceTotal + pantPriceTotal + shoesPriceTotal;
}
// calling function (totalSales) from here and store return value into totalAmount
const totalAmount = totalSales(2, 3, 1);
//show total price here
console.log(totalAmount);


//*************Problem 3 deliveryCost***************
 function deliveryCost(shirts) {
  //declare range of product prices
  const first100Pics = 100;
  const second100Pics = 80;
  const moreThan200Pics = 50;
  if (shirts < 0 || shirts == 0) {
    return "Only Positive Number Accepted Which Greater than 0";
  }
   else if (typeof shirts == "string") {
    return "Please Input Number";
  }
  //if order 1 to 100 then check this conditon and return price depends on product selection
  else if (shirts <= 100) {
    const first100Price = first100Pics * shirts;
    return first100Price;
  }
  //if order 101 to 200 then check this conditon and return sum of first 100 and second 100 price depends on product selection
  else if (shirts >= 101 && shirts <= 200) {
    const first100Price = 100 * first100Pics;
    const distanceCalculate = shirts - 100;
    const second100Price = distanceCalculate * second100Pics;
    const totalPrice = first100Price + second100Price;
    return totalPrice;
  }
  // when order mothe than 200 product then check this conditon and return sum of first 100 , second 100 and rest total price depends on product selection
  else {
    const first100Price = 100 * first100Pics;
    const second100Price = 100 * second100Pics;
    const distanceCalculate = shirts - 200;
    const RestPics = distanceCalculate * moreThan200Pics;
    const totalRestPrice = first100Price + second100Price + RestPics;
    return totalRestPrice;
  }
}
// calling deliveryCost function from here and store total shirts seeling prince sum into salesTotalPrice
const salesTotalPrice = deliveryCost(301);
//show  sales total shirt price here
console.log(salesTotalPrice);


//******************Problem 4 perfectFriend*******************
 const friedNameList = [
  "Joyanta",
  "Amit",
  "Mahbub",
  "JoDoe",
  "DJJoy",
  "Milton",
  "Rajashree",
  "DJRC",
];
function perfectFriend(friendsName) {
  let frend5Lenght = "";
  for (let i = 0; i < friendsName.length; i++) {
    const friends = friendsName[i];
    //if array contain number or empty checking condition here
    if (typeof friends == "number" || friends == "") {
      return "Friend name Can not be number or empty";
    } 
    // which friend name lenght five checking here
    else if (friends.length == 5) {
      frend5Lenght = friends;
      return frend5Lenght;
    }
  }
}
// calling perfectFriend function from here
const perfectFriendName = perfectFriend(friedNameList);
//show the match conditon friend name here
console.log(perfectFriendName); 
