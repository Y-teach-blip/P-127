BTS = "";
SIA = "";

function preload()
{
    BTS = loadSound("BTS_Butter");
    SIA = loadSound("Cheap_thrills");
}

function setup()
{
    canvas = createCanvas(600,500);
    canvas.center

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 600, 500);
}