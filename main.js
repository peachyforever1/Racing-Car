var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d")
var rover_w=100
var rover_h=90
var rover_x=30
var rover_y=30
var backround_image="mars.jpg"
var rover_image="rover.png"
function add(){
backround_imagetag=new Image()
backround_imagetag.onload= upload_bg
backround_imagetag.src=backround_image
rover_imagetag=new Image()
rover_imagetag.onload= upload_rover
rover_imagetag.src=rover_image
}
function upload_bg(){
ctx.drawImage(backround_imagetag,0,0,canvas.width,canvas.height)
}
function upload_rover(){
ctx.drawImage(rover_imagetag,rover_x,rover_y,rover_w,rover_h)
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
var keypress=e.keyCode
if(keypress=="37"){
left();
}
if(keypress=="38"){
up();
}
if(keypress=="39"){
right();
}
if(keypress=="40"){
down();
}
}

function up(){
if(rover_y>=0){
rover_y=rover_y-10;
upload_bg()
upload_rover()
    }
}
function down(){
    if(rover_y<=500){
    rover_y=rover_y+10;
    upload_bg()
    upload_rover()
        }
    }
    function left(){
        if(rover_x>=0){
        rover_x=rover_x-10;
        upload_bg()
        upload_rover()
            }
        }
        function right(){
            if(rover_x<=700){
            rover_x=rover_x+10;
            upload_bg()
            upload_rover()
                }
            }