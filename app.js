//Comments?
//Print into the html website

/*
document.write("Hello this line comes from the app.js javacript file<br>");

//Create and print a random number
var x = Math.floor((Math.random()*4));
document.write("Random Number is: ", x, "<br>");

//Making arrays
a = ["A", "B", "C", "D"];
document.write(" Array: ", a, " (Oh its there)<br>");

//Combining this together to choose a random element of array a
document.write("A RANDOM LETTER FROM ARRAY A: ", a[x], "<br>");

//ADDING ELEMENTS TO ARRAY MADNESS
a.push("E");
a.push("F");

x = Math.floor((Math.random()*a.length));
document.write("NEW Random Number is: ", x, "<br>");
document.write("NEW Array: ", a, " (Oh its there)<br>");
document.write("A DIFFERENT RANDOM LETTER FROM ARRAY A: ", a[x], "<br>");
*/


window.onload = function()
{
    page2LoadUp();
}

function page2LoadUp()
{
    wordArray = [ ["A", "B", "C", "D", "E", "F"],
                   ["G", "H", "I", "J", "K", "L"],
                   ["M", "N", "O", "P", "Q", "R"],
                   ["S", "T", "U", "V", "W", "X"],
                   ["Y", "Z", "a", "b", "c", "d"],
                   ["e", "f", "g", "h", "i", "j"] ]

    imageArray = ["Page2Images/1RedDesserts1.jpg", "Page2Images/1RedDesserts2.jpg"]

    /*
    var text = document.getElementById("demo");
    var randomNumber = Math.floor((Math.random()*wordArray.length));
    text.innerHTML = (wordArray[randomNumber]);
    */

    var image = document.getElementById("picture");
    var randomNumber = Math.floor((Math.random()*2));
    image.src = (imageArray[randomNumber]);
}