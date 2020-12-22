function preload() {}

function setup() {
   canvas = createCanvas(640, 480);
   canvas.position(350, 250);
   video = createCapture(VIDEO);
   video.hide();
   tintcolor = "";
    }
    
function draw() {
    image(video, 0, 0, 640, 480);
    tint(tintcolor);
    }

function take_snapshot() {
    save('tintpicture.png');
}

function apply() {
tintcolor = document.getElementById("tintcolor_name").value;
}

