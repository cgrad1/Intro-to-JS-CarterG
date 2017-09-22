var xPositions = [0, 10, 30, 50, 70, 200, 100, 20, 40, 60, 80, 120, 140, 160, 180, 220, 240, 260, 280, 300, 320, 340, 360, 380, 400];
var yPositions = [random(-20+500), random(-20+500), random(-20+500), random(-20+500), random(-20+500), random(-20+500), random(-20+500), random(-20+500), random(-20+500), random(-20+500), random(-20+500), random(-20+500), random(-20+500), random(-20+500), random(-20+500), random(-20+500), random(-20+500), random(-20+500), random(-20+500), random(-20+500), random(-20+500), random(-20+500), random(-20+500), random(-20+500), random(-20+500)];

draw = function() {
    background(204, 247, 255);

    for (var i = 0; i < xPositions.length; i++) {
        noStroke();
        fill(mouseX, mouseY, 0);
        ellipse(xPositions[i], yPositions[i], 10, 10);
        yPositions[i] += 5;
        if(yPositions[i] > 420)
        {
            yPositions[i]=0;
        }
    }
    
    if(mouseIsPressed === true)
    {
        xPositions.push(mouseX);
        yPositions.push(mouseY);
    }
    
};
