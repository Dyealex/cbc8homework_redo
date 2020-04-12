// fizzbuzz.js **week 1 homework**


    for (var i = 1; i <= 100; i++) { // <-- (i <= 100) tells it to run to 100 and stop

        if (i % 3 === 0 && i % 5 === 0) { //  <--this checks that it is divisable by 3 && 5
            console.log("FizzBuzz")

        }  if (i % 3 === 0) { // <--this checks if it is divisable by 3
            console.log("Fizz")

        }  if (i % 5 === 0){ // <-- this checks if divisable by 5
            console.log("Buzz")

        } if ((i % 3 !=0) && (i % 5 != 0))  // <-- checks if neither condition is met 
        console.log(i)
        }
