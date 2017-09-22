var xPos = -20;
var yPos = 13;
var yPos2 = 236;
var xPos2 = -15;

draw = function() {
    background(29, 40, 115);
    fill(255, 242, 0);
    ellipse(xPos, yPos, 10, 10);
    yPos+=2;
    xPos+=2; 
    ellipse(xPos2, yPos2, 10, 10);
    yPos2-=1;
    xPos2+=3; 
};



