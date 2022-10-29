//par 1, I declared the array ages below.
var ages = [3, 9, 23, 64, 2, 8, 28, 93];
//I console logged ages just to check it
console.log(ages);
//!!!!part 1.a!!!!, below i logged to the console the array ages and subtracted  array.length from array. length then offset the zero based indexing by subtracting one which gave me a value of 3.
console.log((ages[0]) - (ages[ages.length -1]))
//!!!!!par 1.b!!!!, here i pushed the number 12 on the end of the array ages.
ages.push(12);
//I logged ages one more time to insure the push was succesfull, it was.
console.log(ages)
//!!!!!!part 1.c!!!!, I then reattempted to subtract the first element from the last again and still recieved a 3?
console.log((ages[0]) -(ages[ages.length -1]));
console.log(ages)
//!!!!!!part 1.d!!!!!, I then created this for loop with a new variable called newAges to find the average age which is 26.8
let newAges = 0;
for(i = 0; i < ages.length; i++) {
    newAges += ages[i]
}
console.log(newAges / ages.length)

//part 2!!!!
//I created the array names below.
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
console.log(names)

//!!!part 2.a!!!!!!, for some reason while trying to write a for loop to get the average name length im getting a NaN log 
let namesAvg = names.reduce((a, b) => a + b, 0) / names.length[i]
console.log(namesAvg)
   

//!!!!!part2.b!!!!!, I then concatinated all the words together seperated by a space.
let newNames = " "
for (let i = 0; i < names.length; i++) {
    let  combinedNames = names[i];
    let currName = names[i];
    newNames += currName + " ";
}
console.log(newNames);
//!!!!Part 3!!!,I accessed or logged the first number in the array by calling on in its index using:
const last = names[names.length -1];
console.log(last)
//!!!!!Part 4!!!!!!, the last index i accessed was also by logging its index within the array
const first = names[0]
console.log(first);
//!!!!part 5!!!!!! to create a new array called nameLengths and create a loop that iterates 
let nameLengths = [] ;

for (let i = 0; i < names.length; i++) {
nameLengths.push(names[i].length);
};
console.log(nameLengths);
//!!!!part 6!!!!!!!!, I then created a new variable called sum and used the reduce method on nameLengths to get the sum of all the elements
let sum = nameLengths.reduce(function(x, z) {
   return x + z
})
console.log(sum)
//!!!!!PART 7!!!!!, create a function that takes 
//!!!!!!!!PART8!!!!!!!!!, Write a function that takes two parameters firstName and lastName and returns a full name
function fullName(firstName, lastName) {
    return firstName + ' ' + lastName
}
console.log(fullName('Jesse', 'Padova'))
//!!!!!part 9!!!!!!!, write a function that takes an array and returns true if all the elements equal 100
function ifAHundred(nameLengths) {
    if(nameLengths > 100) {
        console.log('this equals True') 

        } else {
            console.log('This is False')
        }
    } 
    ifAHundred()
//!!!!!part10!!!!!!, write a funtion that takes an array of numbers and returns the average of all the elements in the array
const averageArr = nameLengths.reduce((a, b) => a + b, 0) / nameLengths.length
console.log(averageArr)
//!!!!PART 11!!!!!!!
//PART 12!!!!! 
var isHotOutSide = 102
var moneyInPocket = 12
function willBuyDrink(isHotOutSide, moneyInPocket) {
    if(isHotOutSide > 100 && moneyInPocket > 10.50) {
    console.log('Will buy drink')
} else {
    console.log('Dont buy drink')
}
}
     willBuyDrink(isHotOutSide, moneyInPocket)
//!!!!!!PART 13!!!!!!!
var currentTime = 7
function isTime(currentTime) {
    if(currentTime > 6 ){
        console.log('I have time')
    } else {
        console.log('I dont have time')
    }
}
isTime(currentTime)
