console.log("funguje to");
document.getElementById("container").setAttribute("style", "padding: 10px");
document.getElementById("zapati").setAttribute("style", "clear: both");
document.getElementById("foot").setAttribute("style", "clear: both");

var nav = document.getElementById("nehlavni");
var main = document.getElementById("hlavni");
var heder = document.getElementById("header");
/*
nav.setAttribute("style", "padding: 5px");
nav.style.width = "200px";
nav.style.float = "left";
*/
heder.style.backgroundColor = "lightblue";
heder.style.textAlign = "center";
main.setAttribute("style", "padding: 5px");
main.style.width = "600px";
main.style.float = "right";

nav.addEventListener("click", function(){
    nav.setAttribute("style", "padding: 5px");
    nav.style.width = "200px";
    nav.style.float = "left";
    nav.style.fontFamily = "Courier New";
    main.style.width = "300px";
    main.style.float = "right";
    main.style.fontFamily = "Comic Sans MS";
    main.style.backgroundColor = "yellow";
    nav.style.backgroundColor = "red";
    nav.style.color = "yellow";
    main.style.color = "red";
    console.log("kliknuti na navigaci");
});

main.addEventListener("click", function(){
    main.setAttribute("style", "padding: 10px");
    nav.style.width = "200px";
    nav.style.float = "left";
    nav.style.fontFamily = "Comic Sans MS";
    //main.setAttribute("style", "padding: 5px");
    main.style.width = "800px";
    main.style.float = "right";
    main.style.fontFamily = "Courier New";
    main.style.backgroundColor = "grey";
    nav.style.backgroundColor = "#EEE";
    nav.style.color = "black";
    console.log("kliknuti na hlavni obsah");
});
document.getElementById("nadpis1").addEventListener("click", function(){
    document.getElementById("pismo1").style.display = "none";
    document.getElementById("nadpis1").style.display = "none"; 
    document.getElementById("foot").style.padding = "10px 0px 0px 0px";
    console.log("kliknuti na nadpis1");
});
document.getElementById("zapati").addEventListener("click", function(){
    main.style.backgroundColor = "white";
    nav.style.backgroundColor = "white";
    nav.style.color = "black";
    main.style.color = "black";
    heder.innerHTML = "<h1>JavaScript<h1>";
    console.log("kliknuti na footer");
});
