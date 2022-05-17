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
    /*
    //PREVIOUS TEST USING LETTERS FIRST

    wordArray = [ ["A", "B", "C", "D", "E", "F"],
                   ["G", "H", "I", "J", "K", "L"],
                   ["M", "N", "O", "P", "Q", "R"],
                   ["S", "T", "U", "V", "W", "X"],
                   ["Y", "Z", "a", "b", "c", "d"],
                   ["e", "f", "g", "h", "i", "j"] ]

    var text = document.getElementById("demo");
    var randomNumber = Math.floor((Math.random()*wordArray.length));
    text.innerHTML = (wordArray[randomNumber]);
    */


    imageArray = ["Page2Images/1RedDesserts1.jpg", "Page2Images/1RedDesserts2.jpg", "Page2Images/1RedDesserts3.jpg", "Page2Images/1RedDesserts4.jpg", "Page2Images/1RedDesserts5.jpg", "Page2Images/1RedDesserts6.jpg",
                  "Page2Images/2OrangeTiger1.jpg", "Page2Images/2OrangeTiger2.jpg", "Page2Images/2OrangeTiger3.jpg", "Page2Images/2OrangeTiger4.jpg", "Page2Images/2OrangeTiger5.jpg", "Page2Images/2OrangeTiger6.jpg",
                  "Page2Images/3YellowRubber1.jpg", "Page2Images/3YellowRubber2.jpg", "Page2Images/3YellowRubber3.jpg", "Page2Images/3YellowRubber4.jpg", "Page2Images/3YellowRubber5.jpg", "Page2Images/3YellowRubber6.jpg",
                  "Page2Images/4GreenTree1.jpg", "Page2Images/4GreenTree2.jpg", "Page2Images/4GreenTree3.jpg", "Page2Images/4GreenTree4.jpg", "Page2Images/4GreenTree5.jpg", "Page2Images/4GreenTree6.jpg",
                  "Page2Images/5BlueWaves1.jpg", "Page2Images/5BlueWaves2.jpg", "Page2Images/5BlueWaves3.jpg", "Page2Images/5BlueWaves4.jpg", "Page2Images/5BlueWaves5.jpg", "Page2Images/5BlueWaves6.jpg",
                  "Page2Images/6PurpleFlowers1.jpg", "Page2Images/6PurpleFlowers2.jpg", "Page2Images/6PurpleFlowers3.jpg", "Page2Images/6PurpleFlowers4.jpg", "Page2Images/6PurpleFlowers5.jpg", "Page2Images/6PurpleFlowers6.jpg"]

    var text = document.getElementById("demo");
    var randomNumber = Math.floor((Math.random()*imageArray.length));
    text.innerHTML = (randomNumber);

    var image = document.getElementById("picture");
    //var randomNumber = Math.floor((Math.random()*imageArray.length));
    image.src = (imageArray[randomNumber]);
}