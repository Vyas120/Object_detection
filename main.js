img = "";
status = "";
objects = [];

function preload(){
    img = loadImage ("dog_cat.jpg");
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center()
    obtection = ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML= "Status: Detecting objects";
}

function modelloaded(){
    console.log("it works");
    status = true;
    obtection.detect(img,gotresults);
}

function gotresults(error,results){
    if(error){
        console.error(error);
    }
    else{
    console.log(results);
    objects = results;
    }
}

function draw(){
    image(img,0,0,640,420);

    if(status != ""){
        for(i = 0; i < objects.length; i++){
            document.getElementById("status").innerHTML= "Objects detected"

            fill('red')
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%",objects[i].x + 15, objects[i].y + 15);
            noFill()
            stroke('red')
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}