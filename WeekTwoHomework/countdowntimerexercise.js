// started as a count up timer...is now a count DOWN timer!

// This is totally broken. Now I can't get it to do anything and can't find the original page that I got it from!!!!! And it is now 2:49!!!
// found another source. Could never find the original one...
// Now it is a count down timer!
function printNumbers(to, from) {
// function printNumbers(to, from) {original
    // let current = from;original
    let current = from;
  
    setTimeout(function go() {
    //   alert(current);
      // if (current < to) {original
      if (current > to) {
        setTimeout(go, 1500);
        document.getElementById("stupidCrap").innerHTML=current--;
      }
    //   current++;
    }, 1500);
  }
//   changed plus plus to plus 1..and it stopped at 1
  // usage:
  printNumbers(0, 10);
  // changed to print 11 to zero
//   changed 1 to zero to see what happens
// changed 10 to 11

//   don't touch anything!!!!
// no way this will work!!!
// Oh, this will be the death of me. It works but counts every other number!!!!
























