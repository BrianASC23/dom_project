// Add your code to this file

let body = document.querySelector("body");
body.style["background-color"] = "#00008b";

let pokeContainer = document.getElementsByClassName("pokemon_images");

for(i = 0; i < pokeContainer.length; i++){
    pokeContainer[i].style["border-style"] = "dashed";
}

let startImage = document.querySelector("#starters_image_div img")
startImage.style["border-style"] = "dotted";

let head2 = document.querySelector("h2");
head2.style["text-align"] = "center";

let head1 = document.querySelector("h1");
head1.style["font-size"] = "200%";
head1.style["text-decoration"] = "underline";

let bulbContainer = document.getElementById("bulbasaur_container");
bulbContainer.style["background-color"] = "#49896F";

let footer = document.querySelector("footer");
footer.innerHTML = "All Star Code - DOM Project";
footer.style["font-size"] = "30px";
footer.style["margin-bottom"] = "10px";
footer.style["text-decoration"] = "underline overline";

footer.style["font-family"] = "Serif";
footer.style["font-style"] = "italic";

