var cur = 0;
var deg = 0;
var r, g, b;

var pic, nums, theNum;

/* chooses symbol to display based on name of webpage */
var sym_map = {
               "pi.html" : "\u03C0",
               "e.html" : "e",
               "sq2.html" : " \u221A",
               "tau.html" : "\u03C4",
               "phi.html" : "\u03D5"
             };

window.addEventListener('load', function() { start(); }, false);

window.addEventListener('resize', function() { resizeIt(); }, false);

/* sets up Raphael manipulatable with correct number symbol, then gets the ball rolling! */
function start() {
  path = window.location.pathname;
  file = path.substring(path.lastIndexOf('/')+1);

  pic = Raphael([0, 0, window.innerWidth, window.innerHeight, {
    type: "text",
    text: sym_map[file]
  }]);

  pic.attr(
    {"font-family":"irrational"}
  );

  resizeIt();

  nums = window.document.getElementById('numbers');

  rotate(); 
  makePiImage();
  setTimeout(function() {
    setInterval(rotate, 15);
    setInterval(makePiImage, 300);
  }, 150);
  
}

/* called upon window resizing, realigns all of the elements */
function resizeIt() {
  sz = String ( window.innerHeight / 2 );
  x = String ( window.innerWidth / 2 );
  y = String ( window.innerHeight / 2.8 );
  pic.attr(
    {"font-size":sz,
            "x":x,
            "y":y}
  ); 
}

/* parses the next 9 digits of our number into a color, changes background to that color,
and displays the digits it parses */
function makePiImage() {
  r = parseInt(theNum.substring(cur, cur+3));
  cur += 3; 
  g = parseInt(theNum.substring(cur, cur+3));
  cur += 3;
  b = parseInt(theNum.substring(cur, cur+3));
  cur += 3;

  var color = Raphael.rgb(r%256, g%256, b%256);
  changeBackground(color);

  var des = zfill(r,3) + "      " + zfill(g,3) + "      " + zfill(b,3);
  nums.innerHTML = des;
}

/* rotates the spinning number symbol in the center by 3 degrees */
function rotate() {
  pic.transform("r" + deg);
  deg += 3;
}

/* changes background color of the page */
function changeBackground(color) {
  document.body.style.background = color;
}

/* padds numbers smaller than 3 digits with zeros for uniform length */
function zfill(number, size) {
  number = number.toString();
  while (number.length < size) number = "0" + number;
  return number;
}