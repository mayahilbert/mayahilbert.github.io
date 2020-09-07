// https://kylemcdonald.github.io/cv-examples/
// https://github.com/kylemcdonald/AppropriatingNewTechnologies/wiki/Week-2

var capture;
var tracker
var w = 640,
    h = 480;

//array variable - left eye

let leftEye=[];

//array variable - right eyes

let rightEye=[];

let numEyes = 12;

//variable for logo
let img;


function setup() {


  capture = createCapture({
        audio: false,
        video: {
            width: w,
            height: h
        }
    }, function() {
        console.log('capture ready.')
    });
    capture.elt.setAttribute('playsinline', '');
    createCanvas(w, h);
    capture.size(w, h);
    capture.hide();
    tracker = new clm.tracker();
    tracker.init();
    tracker.start(capture.elt);

     for(let i=0; i<numEyes; i++) {
    leftEye[i] = loadImage('assets/LEFT/LEFT'+i+'.png');
    rightEye[i] = loadImage('assets/RIGHT/RIGHT'+i+'.png');

  }
  //calls on the logo
  img = loadImage('assets/logo.png');
}

function draw() {
   // createCanvas(1080,1920);
    imageMode(CORNER);
    //calls on the webcam
    image(capture, 0, 0, w, h);
    //calls on the logo
    image(img, 0, 0);

    var positions = tracker.getCurrentPosition();

    noStroke();

    //print out the position number of each point.
    //this is useful during the coding process
    //comment out when you want to use your sketch
    //on the webpage.
    /*
    for (var i = 0; i < positions.length; i++) {
        fill(map(i, 0, positions.length, 0, 360), 50, 100);
        ellipse(positions[i][0], positions[i][1], 4, 4);
        text(i, positions[i][0], positions[i][1]);
    }
    */

    if (positions.length > 0) {

      imageMode(CENTER);

      let randoImg = random(leftEye);
      let randoImg2 = random(rightEye);

      image(randoImg,positions[27][0],positions[27][1],60,60);
      image(randoImg2,positions[32][0],positions[32][1],60,60);


      frameRate(5.5);

/*
    for (var i=0; i<12; i++) {
    image(leftEye[i], positions[27][0],positions[27][1],60,60);
    image(rightEye[i],positions[32][0],positions[32][1],60,60);
    } */
}


/*
    if (positions.length > 0) {

      imageMode(CENTER);
      for (var i=0; i<12; i++) {
    image(leftEye[i], positions[27][0],positions[27][1],60,60);
    image(rightEye[i],positions[32][0],positions[32][1],60,60);

      }
      */

}

function mousePressed(){
	save('icanseeyou.jpg');
}
