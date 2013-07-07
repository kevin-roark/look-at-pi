var cur = 0;
var deg = 0;
var r, g, b;

var pic, nums, theNum;

var sym_map = {
               "pi.html" : "\u03C0",
               "e.html" : "e",
               "sq2.html" : " \u221A",
               "tau.html" : "\u03C4",
               "phi.html" : "\u03D5"
             };

window.addEventListener('load', function() { start(); }, false);

window.addEventListener('resize', function() { resizeIt(); }, false);

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

function rotate() {
  pic.transform("r" + deg);
  deg += 3;
}

function changeBackground(color) {
  document.body.style.background = color;
}

function zfill(number, size) {
  number = number.toString();
  while (number.length < size) number = "0" + number;
  return number;
}