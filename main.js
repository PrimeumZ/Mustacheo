nose_x=0;
nose_y=0;



function preload(){
img=loadImage("https://i.postimg.cc/3x3QzSGq/m.png");

}

function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotPoses)
}

function modelLoaded(){
    console.log("Posenet is loaded :)")
}

function gotPoses(results){
    if (results.length>0){
        console.log(results);
        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;
        console.log("nosex= "+nose_x);
        console.log("nosey= "+nose_y);
    }
}




function draw(){

image(video,0,0,300,300);

image(img,nose_x-10,nose_y,25,25);
}

function take_snapshot(){
    save("idk.png");
}