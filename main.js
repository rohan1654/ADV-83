var newwidth, newheight;
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;
newwidth = screen.width - 100;
newheight = screen.height - 300;
if(screen.width < 992){
canvas.width  = newwidth
canvas.height = newheight
document.body.style.overflow = "hidden";
}
canvas.addEventListener("touchstart", mytouchprint);
function mytouchprint(e){
    color  = document.getElementById("colorpicker").value; 
    width_of_line = document.getElementById("number").value;
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove", myfingermove);
function myfingermove(e){
    Current_x = e.touches[0].clientX - canvas.offsetLeft;
    Current_y = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth   = width_of_line;
    ctx.moveTo(last_position_of_x, last_position_of_y);
    ctx.lineTo(Current_x, Current_y);
    ctx.stroke();
    last_position_of_x = Current_x;
    last_position_of_y = Current_y;
}
function earaser(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}