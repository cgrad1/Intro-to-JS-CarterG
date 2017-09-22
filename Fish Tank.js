background(89, 216, 255);

var centerX = mouseX;
var centerY = mouseY;
var bodyLength = 118;
var bodyHeight = 74;
var bodyColor = color(188, 134, 219);

var fish = function(centerX, centerY, bodyLength, bodyHeight)
{
    noStroke();
    fill(bodyColor);
    // body
    ellipse(centerX, centerY, bodyLength, bodyHeight);
    // tail
    var tailWidth = bodyLength/4;
    var tailHeight = bodyHeight/2;
    triangle(centerX-bodyLength/2, centerY,
             centerX-bodyLength/2-tailWidth, centerY-tailHeight,
             centerX-bodyLength/2-tailWidth, centerY+tailHeight);
    // eye
    fill(33, 33, 33);
    ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);
};

draw = function() {
    centerX = mouseX;
    centerY = mouseY;
    if(mouseIsPressed)
    {
        fish(centerX, centerY, bodyLength, bodyHeight);
    }
};

         
         
