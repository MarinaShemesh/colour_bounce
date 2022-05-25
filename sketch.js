console.log('Colour Bounce');

let diameter = 500;
let radius = diameter/2;

let position = {
  x: radius,
  y: radius
}

let velocity = {
  x: 2,
  y: 3
}


let hue = 0;

function setup() {
  createCanvas(1280, 720)
  colorMode(HSB);
  noStroke();
  background("#F4F4F4");
}


function draw() {


 fill(hue,90,80);
 circle(position.x, position.y, radius);
 
 hue = (hue + 1) % 360;
 position.x += velocity.x;
 position.y += velocity.y;

 if (position.x >= width  || position.x <= 0){
  velocity.x *= -1;
 }
 
 if (position.y >= height || position.y <= 0){
  velocity.y *= -1;
 }
 

}

// function mousePressed(){
//   save('image.png');
// }