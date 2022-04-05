img = "";
status ="";


function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status:deteting objects";
}

function preload()
{
    img = loadImage('dog_cat.jpg');
}

function draw()
{
image(img,0,0,600,500);
fill("#03f7ff");
text("dog",45,75);
noFill();
stroke("#03f7ff");
rect(30,60,450,350);
fill("#03f7ff");
text("cat",320,120);
noFill();
stroke("#03f7ff");
rect(300,90,270,320);
}
function modelLoaded()
{
    console.log("model loded");
    status=true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error,results)
{
if(error)
{
    console.log(error);
}
console.log("results");
}
