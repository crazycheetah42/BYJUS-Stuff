canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;
rover_x = 10;
rover_y = 10;

background_image = "mars.jpg";
rover_image = "rover.png";

function add(){
    background_img = new Image();
    background_img.onload = uploadBackground;
    background_img.src = background_image;
    rover_img = new Image();
    rover_img.onload = uploadRover;
    rover_img.src = rover_image;
}
function uploadBackground(){
    ctx.drawImage(background_img, 0, 0, canvas.width, canvas.height);
}
function uploadRover(){
    ctx.drawImage(rover_img, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);
    if (keypressed == "38"){
        up();
        console.log("Up key was pressed.");
    }
    if (keypressed == "40"){
        down();
        console.log("Down key was pressed.");
    }
    if (keypressed == "37"){
        left();
        console.log("Left key was pressed.");
    }
    if (keypressed == "39"){
        right();
        console.log("Right key was pressed.");
    }
}