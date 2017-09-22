fill(0, 0, 0);
ellipse(200, 200, 375, 375);
fill(60, 0, 255);
triangle(200, 104, 280, 280, 120, 280);
fill(255, 255, 255);
textSize(12);
var answer = floor(random(1, 5));
if(answer===3)
{
    fill(0, 255, 34);
    triangle(200, 104, 280, 280, 120, 280);
    fill(0, 0, 0);
    textSize(35);
    text("Great!", 150, 234);
}
else if(answer<=3)
{
    fill(0, 77, 10);
    triangle(200, 104, 280, 280, 120, 280);
    fill(255, 255, 255);
    textSize(25);
    text("Too Low", 155, 230);
}
else
{
    fill(133, 255, 147);
    triangle(200, 104, 280, 280, 120, 280);
    fill(0, 0, 0);
    textSize(25);
    text("Too High", 153, 230);
}
