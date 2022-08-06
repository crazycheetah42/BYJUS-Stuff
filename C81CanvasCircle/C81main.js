var canvas = document.getElementById("my_canvas");

ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 1;
ctx.rect(150, 143, 430, 200);
ctx.stroke();

ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 2;
ctx.arc(265, 205, 40, 0, 2*Math.PI);
ctx.stroke();

ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 2;
ctx.arc(357, 205, 40, 0, 2*Math.PI);
ctx.stroke();

ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 2;
ctx.arc(449, 205, 40, 0, 2*Math.PI);
ctx.stroke();

ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 2;
ctx.arc(313, 247, 40, 0, 2*Math.PI);
ctx.stroke();

ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 2;
ctx.arc(407, 247, 40, 0, 2*Math.PI);
ctx.stroke();


canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    color = document.getElementById("color").value;
    console.log(color);

    var mouse_x = e.clientX - canvas.offsetLeft;
    var mouse_y = e.clientY - canvas.offsetTop;
    console.log("X = " + mouse_x + ", Y = " + mouse_y);
    circle(mouse_x, mouse_y);
}
function circle(mouse_x, mouse_y) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mouse_x, mouse_y, 40, 0, 2*Math.PI);
    ctx.stroke();
}
function clear_area() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}