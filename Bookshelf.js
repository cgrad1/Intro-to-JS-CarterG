var book = [
    {
        title: "The Giver", stars: 4, author: "Lois Lawry", rgb: color(255, 71, 255)
    },
    
    {
        title: "Harry Potter", stars: 4, author: "J.K. Rowling", rgb: color(47, 255, 0)
    },
    {
        title: "Communist Manifesto", stars: 5, author: "Karl Marx", rgb: color(135, 167, 255)
    },
    {
        title: "5th Wave", stars: 1, author: "Rick Yancey", rgb: color(255, 215, 82)
    }
];

// draw shelf
fill(173, 117, 33);
rect(0, 120, width, 10);

// draw the books
for(var i=0; i < book.length; i++)
{
    fill(book[i].rgb);
    rect(i*95+10, 20, 90, 100);
    fill(0, 0, 0);
    text(book[i].title, i*95+15, 27, 100, 100);
    text(book[i].author, i*95+15, 90, 100, 100);
    for (var a = 0; a < book[i].stars; a++) {
        image(getImage("cute/Star"), i*95 + a*15 + 11, 95, 18, 26);
    }
}
