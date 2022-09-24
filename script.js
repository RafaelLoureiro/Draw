//initial data
let currentColor = 'black';
let canDraw = false;
let mouseXpoint = 0;
let mouseYpoint = 0;


let screenCanvas = document.querySelector('#screen');
let context = screenCanvas.getContext('2d');


//events

//select-color
document.querySelectorAll('.colorArea .color').forEach(element => {
    element.addEventListener('click', colorEventSelect);
});
//mouse  events
screenCanvas.addEventListener('mousedown', mouseDownEvent);
screenCanvas.addEventListener('mousemove', mouseMoveEvent);
screenCanvas.addEventListener('mouseup', mouseUpEvent);
//clear
document.querySelector('.clearFrame').addEventListener('click', clearScreen);



//functions
function colorEventSelect(eventcolor) {
    let color = eventcolor.target.getAttribute('data-color');
    currentColor = color;


    //remove and add "color-active"
    document.querySelector('.color.active').classList.remove('active');
    eventcolor.target.classList.add('active');
}

//mouse functions
function mouseUpEvent() {
    canDraw = false;
}
function mouseDownEvent(mouselocation) {
    canDraw = true;
    mouseXpoint = mouselocation.pageX - screenCanvas.offsetLeft;
    mouseYpoint = mouselocation.pageY - screenCanvas.offsetTop;
}
function mouseMoveEvent(mouselocationMove) {
    if (canDraw) {

        draw(mouselocationMove.pageX, mouselocationMove.pageY)


    }
}
function draw(Xposition, Yposition) {
    let pointX = Xposition - screenCanvas.offsetLeft;
    let pointY = Yposition - screenCanvas.offsetLeft;

    context.beginPath();
    context.lineWidth = 5;
    context.lineJoin = "round";
    context.moveTo(mouseXpoint, mouseYpoint);
    context.lineTo(pointX, pointY);
    context.closePath();
    context.strokeStyle = currentColor;
    context.stroke();

    //On Draw
    mouseXpoint = pointX;
    mouseYpoint = pointY;

}

//clear

function clearScreen() {
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
}