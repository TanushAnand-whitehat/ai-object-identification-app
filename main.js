image1 = "";
status1 = "";
objects = [];

function preload() {
    image1 = loadImage('dog_cat.jpg');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center;
    video = createCapture(VIDEO);
    video.hide();
video.size(300, 300);
    object_detector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status_1").innerHTML = "Please wait, detecting objects..."
}
function modelLoaded() {
    console.log('Model has loaded');
    status1 = true;
}
function gotResults(error, results) {
if(error) {
    console.log(error);
}
else {
console.log(results);
objects = results;
}

}

function draw() {
    image(video, 0, 0, 300, 300);

if(status1 != "") {
    object_detector.detect(video, gotResults);
    for (counter = 0; counter < objects.length; counter++) {
        document.getElementById("status_1").innerHTML = "Status : Object Detected";
        document.getElementById("no_objects").innerHTML = "No. of objects detected " + objects.length;
        r = random(255);
        g = random(255);
        b = random(255);

        fill(r,g,b);
        percent = floor(objects[counter].confidence * 100);
        text(objects[counter].label + " " + percent + "%", objects[counter].x, objects[counter].y);
        noFill();
        stroke(r,g,b);
        rect(objects[counter].x, objects[counter].y, objects[counter].width, objects[counter].height);
    }
}
}