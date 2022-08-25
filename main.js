image1 = "";

function preload() {
    image1 = loadImage('dog_cat.jpg');
}

function setup() {
    canvas = createCanvas(600, 400);
    canvas.center;
}

function draw() {
    image(image1, 0, 0, 600, 400);
    fill("red");
    stroke("red");
    text("dog", 60, 70);
    noFill();
    rect(20, 30, 350, 250);
}