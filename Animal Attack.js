var bodyX = 200;
var bodyY = 197;
var bodyW = 94;
var bodyH = bodyW/1.5;
var i = 0;

draw = function() {
    background(116, 183, 184);
    fill(97, 68, 2);
    ellipse(bodyX, bodyY, bodyW, 115); // body?
    ellipse(bodyX, bodyY-60, bodyH, 56); // face?
    fill(255, 255, 255);
    ellipse(bodyX-15, bodyY-65, 10, 10); //eyes
    ellipse(bodyX+15, bodyY-65, 10, 10);
    fill(0, 0, 0);
    ellipse(bodyX-15, bodyY-65, 2, 2);
    ellipse(bodyX+15, bodyY-65, 2, 2);
    i++;
    if(i > 100 && i < 190)
    {
        fill(255, 255, 255);
        ellipse(bodyX-15, bodyY-65, 10, 10); //eyes
        ellipse(bodyX+15, bodyY-65, 10, 10);
    }
    if(i > 190)
    {
        fill(-i+445, 0, 0);
        ellipse(bodyX-15, bodyY-65, 30, 30); //eyes
        ellipse(bodyX+15, bodyY-65, 30, 30);
        fill(0, 0, 0);
        ellipse(bodyX-15, bodyY-65, 2+i*0.01, 2+i*0.05);
        ellipse(bodyX+15, bodyY-65, 2+i*0.01, 2+i*0.05);
    }
};
