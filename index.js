//PROBLEM 1: Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
var ages = [];
ages.push (3)
ages.push (9);
ages.push (23);
ages.push (64);
ages.push (2);
ages.push (8);
ages.push (28);
ages.push (93);

console.log(ages);

// PROBLEM 1 ITERATION 1: Programmatically subtract the value of the first element in the array from the value in the last element of the array
//  (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console 
var ages = [];
ages.push (3)
ages.push (9);
ages.push (23);
ages.push (64);
ages.push (2);
ages.push (8);
ages.push (28);
ages.push (93);
var firstMinusLast = (ages[ages.length-1]-ages[0]);

console.log(firstMinusLast);




//PROBLEM 1 ITERATION 2: Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
var ages = [];
ages.push (3)
ages.push (9);
ages.push (23);
ages.push (64);
ages.push (2);
ages.push (8);
ages.push (28);
ages.push (93);
ages.push (34);

console.log(ages);

// PROBLEM 1 ITERATION 3: Use a loop to iterate through the array and calculate the average age. Print the result to the console.  
var ages = [];
ages.push (3)
ages.push (9);
ages.push (23);
ages.push (64);
ages.push (2);
ages.push (8);
ages.push (28);
ages.push (93);

var average = 0;

var total = 0;
for (var i = 0; i < ages.length; i++) {
  total += ages[i];
}

console.log(total /ages.length );


//PROBLEM 2: Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
var names = [];
names.push ('Sam');
names.push ('Tommy');
names.push ('Tim');
names.push ('Sally');
names.push ('Buck');
names.push ('Bob');

console.log(names);


//PROBLEM 2 ITERATION 1: Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
var names = [];
names.push ('Sam');
names.push ('Tommy');
names.push ('Tim');
names.push ('Sally');
names.push ('Buck');
names.push ('Bob');

var average = 0;

var total = 0;
for(var i = 0; i < names.length; i++){
    total+=names[i].length;
}
var average = total/names.length;
console.log(average);


//PROBLEM 2 ITERATION 2: Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.
var names = [];
names.push ('Sam');
names.push ('Tommy');
names.push ('Tim');
names.push ('Sally');
names.push ('Buck');
names.push ('Bob');

names.join(' ');
var toJoin = names.join(' '); 
console.log(toJoin);


// Q; How do you access the last element of any array?

// A:  Because arrays operate on a zero point index, the way to access the last element in and array is [arrayname.length -1]
//  Or var lastElement = [array.length - 1]
//  


// Q: How do you access the first element of any array?

// A: Arrays operate on a zero point index meaning that the first element in the array is at position 0, so to reference or access it, it would look like 
//  var firstElement = [0]


// Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

var nameLengths = [ 3, 5, 3, 5, 4, 3];
var total = 0;

for (var i = 0; i < nameLengths.length; i++) {
  total += nameLengths[i];
}
nameLengths.push(total);
console.log(nameLengths);


// Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.
var nameLengths = [ 3, 5, 3, 5, 4, 3];
var total = 0;

for (var i = 0; i < nameLengths.length; i++) {
  total += nameLengths[i];
}
nameLengths.push(total);
console.log(total);


// Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3,
//  I would expect the function to return ‘HelloHelloHello’).
function concatToN(str, n) {
    var words = '';
    for (var w = 0; w < n; w++) {
      words += str;
    }
    console.log(words);
  }
  
  concatToN('Hello', 3);

// Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space). ???
function fullName(firstName, lastName){
    return firstName + " " + lastName;
  }
  
  
  var fullname = fullName("John", "Johnson");
  
  console.log(fullname)
// Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100. ???

var arrayOfNumbers = [25,50,47,23,53,6];
function grtrThan100(arrayOfNumbers) {
    let sum = 0;
    arrayOfNumbers.forEach(num => {
      // set sum to old sum + new number from array
      sum = sum + num;
    });
    if (sum > 100) {
      console.log("Sum of array is greater than 100. (True)");
      return true;
    } else {
      console.log("Sum of array is less than 100. (False)");
      return false;
    }
  }
grtrThan100(arrayOfNumbers);

  
  var arrayOfNumbers = [25,50,47,23,53,6];

// Write a function that takes an array of numbers and returns the average of all the elements in the array. ??

var numbersInAnArray1 = [8,5,25,75,3,65,13];

function averageOfNumbersinAnArray(){

    var total = 0;
    for(var i = 0; i < numbersInAnArray1.length; i++) {
        total += numbersInAnArray1[i];
    }
    var avg = total / numbersInAnArray1.length;
    return avg = total / numbersInAnArray1.length;
}
averageOfNumbersinAnArray(numbersInAnArray1);


// Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
var numbersInAnArray2 = [3,5,25,75,3,5,13];
var numbersInAnArray1 = [8,5,25,75,3,65,13];

function averageOfNumbersinAnArray(array1,array2){
  var numbersInAnArray2 = [3,5,25,75,3,5,13];
    var total = 0;
    avg = 0;
    for(var i = 0; i < numbersInAnArray2.length; i++) {
        total += numbersInAnArray2[i];
    }
    var avg = total / numbersInAnArray2.length;
    return avg = total / numbersInAnArray2.length;


    

      
        for(var i = 0; i < numbersInAnArray1.length; i++) {
            total += numbersInAnArray1[i];
        }
        var avg = total / numbersInAnArray1.length;
        return avg = total / numbersInAnArray1.length;
      }
    averageOfNumbersinAnArray(numbersInAnArray1);

    for(i = 0; i < numbersInAnArray1.length; i++){
      if(numbersInAnArray1[i] != 0){
          avg += numbersInAnArray2[i] / numbersInAnArray1[i];
          n++;
      }
  }
  average = (avg / n - 1)*100;
  averageOfNumbersinAnArray(numbersInAnArray1, numbersInAnArray2);






// Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside && moneyInPocket > 10.5) {
      console.log(
        `Its hot out and I have enough money so I think I'll treat myself and buy a drink today!`
      );
      return true;
    } else {
      if (isHotOutside && moneyInPocket < 10.5) {
        console.log(
          `I dont have enough money to buy a drink.`
        );
      } else if (!isHotOutside) {
        console.log(
          `Its not too hot outside, so there is no need to buy a drink.`
        );
      }
      return false;
    }
  }
  
  willBuyDrink(true, 15);
 

// Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

// Replenishment order function that tells you when to order an item, or if its on supply issue referencing SOH(stock on hand), Weekly Sales, Minimum Stock On hand, Stock On Order and Supply Issue.

var stockOnHand = 4;
var weeklySales = 5;
var minimumStockOnHand = 3;
var stockOnOrder = 2;
var supplyIssue = ('This item is on a supply issue.');
 function reorderItem(){
     if (weeklySales >= minimumStockOnHand){
     console.log('You need to place an order!');
     }else if (weeklySales<= minimumStockOnHand){
         console.log('You have enough stock at the moment.');
     }else if (stockOnOrder === minimumStockOnHand){
         console.log('Wait until shipment arrives.');
     }else ;{
         console.log('You are unable to order this item at this time.')
     }
     
 }
 

reorderItem(3);
  