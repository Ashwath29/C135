var img = "";
status = "";
objects = [];

function preload() {
    var sound = loadSound("i_was_never_there.mp3");
}

function setup() {
canvas = createCanvas(500,400);
canvas.center();
video = createCapture(VIDEO);
video.hide();
}
function start() {
objectDetector = ml5.objectDetector("cocossd", modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(video, gotResult);
}

function gotResult(error, results) {
if (error) {
    console.error(error);
}
console.log(results);
objects = results;
}

function draw() {
    image(img, 0, 0, 640, 420);
    if(object[i].label == person) {
        document.getElementById("status").innerHTML = "baby detected";
    }
    else{
        document.getElementById("status").innerHTML = "baby not detected";
        sound.play()
    }
    }

