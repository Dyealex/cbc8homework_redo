


// alert ("Hello CBC8")



// this is suppose to be a "counter variable"? I have just finished week 10 and I have no idea what this is suppose to be! I created the var of 2, added 5 to it and returned 12 because it is multiplying 2*5 then adding 2 instead of 2+5*7 as it is written. So am I suppose to change it around to get 14??? 14 % 3 returns 2 and 14 % 2 returns zero.


var num1 = 2;   //beginning number
 num1 += 5;     //2+5 =7
 num1 *= 2      // 7*2 =14
if (num1 % 3 > 1) {  //14 / 3 leaves 2 which is greater than one
    console.log("No way this will work")  //thi should print the if statement
} else {
    console.log("I really don't care anyway!")
}
// 
if (num1 * 2 < 21) {   //(14*2 =28)

    console.log('This really sucks.');

} else console.log('JavaScript is way harder than it needs to be');   //(21 is less that 28))
// this should print to console the else statement

if (num1 + 6 == 19 || num1 / 2 < 1) {   //(14 + 6 = 20, 14 / 2 = 0)

    console.log('I really hate math anyway.');

} else { console.log('You really think this will work?')  // this should also print the else statement

}  
