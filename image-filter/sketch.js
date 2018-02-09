
let jomy;
// let tintFilter1;

//preload will load before setup runs
function preload() {
  //this relative file path starts in the same folder as your sketch.
  //In other words, in this example, make a folder called images in the same
  //folder as your sketch file (sketch.js) and then put the image file ("kittens.jpg")
  //inside of that.
  jomy = loadImage("images/jomy.jpg");

}

function setup() {
  createCanvas(jomy.width, jomy.height);
  console.log("Image width: " + jomy.width + " height: " + jomy.height);

  displayImage();
 // blueStripe();
  blueTint(100,500);
  
  //adding slider here
  createSlider(100,200);
  //slider controls the color
  
}

function draw() {
}

function displayImage(){
     image(jomy, 0, 0); //draw the image to the canvas
}

//change pixels, draw a blue stripe
function blueStripe(){
    loadPixels();
    for(let i=4*500*200;i<4*500*250;i+=4) {
      pixels[i] = 0; //red
      pixels[i+1] = 0; //green
      pixels[i+2] = 255; //blue
      pixels[i+3] = 255; //alpha (transparency - works with PNGs, not JPGs)
    }
    updatePixels();

}
function blueTint(y1,y2){
    //change tint of pixels in a stripe by modifying the red channel
    loadPixels();
    for(let i=4*jomy.width*(y1);i<4*jomy.width*y2;i+=4) {
      pixels[i] = pixels[i]-50; //red
    }
    updatePixels();
}
