// Please know that this may crash your computer if your machine is weak.
"render invisible";
var run = confirm("Before you run, please know that if your machine is weak, it may get crashed. Continue at your own risk!");
if (run === true) {
var j = 0;
function animate() {
   background("lightskyblue");
   for (var i = 0; i < canvas.width; i++) {
      rectangle(i * 2, canvas.width / 2 + (20 * sin(j / 10)) * sin((i - j * 5) / 30) * 2, 200, sin(j / 10) * 50, {fill: {red: sin(j + i) * 255}, strokeWidth: 5, strokeColor: {red: sin(j / 10 + i) * 255}});
   }
   j++;
}
} else {
  
  stop();
}
