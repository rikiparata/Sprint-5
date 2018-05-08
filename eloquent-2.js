// Eloquent Javascript

// Exercise 1:
for (let row = "#"; row.length < 8; row += "#") {
    console.log(row);
  }
  // #
  // ##
  // etc

// Exercise 2:
function fizzbzz() {
    for (let x = 1; x <= 100; x++)
      
      if (x % 3 == 0 && x % 5 == 0) {
        console.log("Fizzbuzz");
  }
      else if (x % 3 == 0) {
        console.log("Fizz");
  }
      else if (x % 5 == 0) {
        console.log("Buzz");
  }
  }

// Exercise 3:
// Struggled with the one, used all hints and followed solution methods
let size = 8;
let pattern = "";
for(let a = 0; a < size; a++) {
  for(let b = 0; b < size; b++) {
    if((a + b) %2 == 0) {
      pattern += " ";
    } else {
      pattern += "#";
    }
  }
  pattern +="\n";
}
console.log(pattern);