var countdownGenerator = function (x) {
  /* your code here */
  return function () {
    if (x === 0) {
      x--;
      return console.log("Blast Off!");
    }
    if (x < 0) return console.log("Rockets already gone, bub!");
    console.log("T-minus " + x);
    x--;
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!