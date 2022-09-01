image1 = "";

function preload() {
    image1 = loadImage('dog_cat.jpg');
}

function setup() {
    canvas = createCanvas(600, 400);
    canvas.center;
    object_detector = ml5.objectDetector('cocossd', modelLoaded);
}
function modelLoaded() {
    console.log('Model has loaded')
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
    text("Cat", 220, 70);
    noFill();
    rect(190, 20, 350, 250);
}