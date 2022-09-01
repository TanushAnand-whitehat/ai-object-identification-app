image1 = "";
status1 = "";

function preload() {
    image1 = loadImage('dog_cat.jpg');
}

function setup() {
    canvas = createCanvas(600, 400);
    canvas.center;
    object_detector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status_1").innerHTML = "Please wait, detecting objects..."
}
function modelLoaded() {
    console.log('Model has loaded');
    status1 = true;
    object_detector.detect(image1, gotResults);
}
function gotResults(error, results) {
if(error) {
    console.log(error);
}
else {
console.log(results);
}
}

function draw() {
    image(image1, 0, 0, 600, 400);
    fill("red");
    stroke("red");
    text("Dog", 80, 70);
    noFill();
    rect(20, 30, 350, 250);

    fill("red");
    stroke("red");
    text("Cat", 220, 85);
    noFill();
    rect(190, 20, 350, 250);
}