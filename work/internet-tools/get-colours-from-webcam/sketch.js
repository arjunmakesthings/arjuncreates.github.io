let video;
let p;

let m; 

var circs = [];
let tog = false;

function setup() {
let aspectRatio = [640, 580]; //width and breadth

let container = document.getElementById('canvas-container'); 
let containerWidth = container.offsetWidth; 
let containerHeight = ((containerWidth *aspectRatio[0]) / aspectRatio[1]); 

var canvas = createCanvas (640,580); 
canvas.parent('canvas-container'); 

  //Create Capture
video = createCapture(VIDEO);
background (0); 
  video.size(640, 580);
  video.hide();
  
  p = color (255, 255, 255);
  m = createVector (0, 0);
  
  button =createButton ('Save Image');
  button.position (width-90, height+20);
  button.mousePressed (saveImage);
}

function draw() {
  background(0);
//image (video, 0, 0);
  flip();
  
  if (tog ==true){
   loadPixels ();
    p = get (mouseX, mouseY);
    
    m = createVector (mouseX, mouseY);
    
    for (let i = 0; i<1; i++){
     circs.push (new Dots (m.x, m.y, p)); 
    }
    tog = false; //Prevent bugs of multiple clicks in one press.
  }
  
   for (let i = 0; i < circs.length; i++) {
    circs[i].display();
  }

}


function flip() {
  push();
  translate(width, 0);
  scale(-1, 1);
  image(video, 0, 0);
  pop();
}

function mousePressed() {
  tog = true;
}

function mouseReleased(){
 tog = false; 
}

function saveImage (){
 save ('palette.jpg'); 
}

