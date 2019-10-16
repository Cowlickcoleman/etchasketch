
// establish naming conventions
var buttonNewCanvas = document.getElementById("new-canvas").onclick = newCanvas;

//request user's desired canvas size
var getCanvasSize = prompt('How many pixels would you like for your sketch!',"1000");

//calculate the dimensions of the canvas pixels per requested canvas resolution
var canvas = document.getElementById("canvas");
var canvasSize = Math.round(Math.sqrt(parseInt(getCanvasSize,10)));
var pixelSizeWidth = (580/canvasSize);
var pixelSizeHeight = (580/canvasSize);

// create the canvas and adjust pixels
function createCanvas() {
    for (var rows = 0; rows < canvasSize; rows++) {
        for (var columns = 0; columns < canvasSize; columns++) {
            let canvasPixel = document.createElement("div");
            canvasPixel.setAttribute("class","canvas-pixel");
            document.getElementById("canvas").appendChild(canvasPixel);  
        };
    };
    adjustPixels();
};

    // adjust the size of the pixels per calculation
    function adjustPixels(){
        document.querySelectorAll('.canvas-pixel').forEach(function(element){
            element.style.width = pixelSizeWidth + "px";
            element.style.height = pixelSizeHeight + "px";
            element.addEventListener('mouseenter',function() {
                this.style.transition="background-color 0.3s ease 0.1s";
                this.style.backgroundColor="black";
            })
        });
    };

// button functionality
var buttonRedSketch = document.getElementById("red").onclick = redSketch;
var buttonBlackSketch = document.getElementById("black").onclick = blackSketch;
var buttonRandomSketch = document.getElementById("random").onclick = randomSketch;


function newCanvas() {
    document.querySelectorAll('.canvas-pixel').forEach(function(element){
        element.style.backgroundColor="lightgrey";
    });
};

function redSketch(){
    document.querySelectorAll('.canvas-pixel').forEach(function(element){
        element.addEventListener('mouseenter',function() {
            this.style.backgroundColor="#913427";
        })
    });
};

function blackSketch(){
    document.querySelectorAll('.canvas-pixel').forEach(function(element){
        element.addEventListener('mouseenter',function() {
            this.style.backgroundColor="black";
        })
    });
};

function randomSketch() {
    document.querySelectorAll('.canvas-pixel').forEach(function (element) {
        element.addEventListener('mouseenter', function () {
            this.style.backgroundColor = "hsl("+ randomColor() +",50%,50%)";
        });
    });
};

    function randomColor(){
        return Math.floor(Math.random()*360);
    };

// functions to run upon page load
createCanvas();






