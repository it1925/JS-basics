console.log("funguje to");
document.getElementById("container").setAttribute("style", "padding: 10px");
document.getElementById("zapati").setAttribute("style", "clear: both");
document.getElementById("foot").setAttribute("style", "clear: both");

const nav = document.getElementById("nehlavni");
const main = document.getElementById("hlavni");
const heder = document.getElementById("header");
const shrek = document.querySelector("img");
const shrek2 = document.querySelector("img");

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

nav.addEventListener("mouseenter", function(){
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
document.getElementById("shrek").style.float = "left";
document.getElementById("shrek").addEventListener("click", function(){
        console.log("Forsaan");
        shrek.src = "forsenE.jpg";
});


document.getElementById("shrek").addEventListener("mouseenter", function(){
    console.log("mys na tylerovi");
    shrek.src = "tyler1.jpg";
});

main.style.padding = "12px";

main.addEventListener("mouseenter", function(){
    main.setAttribute("style", "padding: 10px");
    nav.style.width = "700px";
    nav.style.float = "left";
    nav.style.fontFamily = "Comic Sans MS";
    main.setAttribute("style", "padding: 5px");
    main.style.width = "1000px";
    main.style.float = "left";
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
document.getElementById("zapati").addEventListener("mouseenter", function(){
    main.style.backgroundColor = "white";
    nav.style.backgroundColor = "white";
    nav.style.color = "black";
    main.style.color = "black";
    heder.innerHTML = "<h1>JavaScript<h1>";
    console.log("kliknuti na footer");
});
