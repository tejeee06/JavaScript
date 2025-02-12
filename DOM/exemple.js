console.log(document.body.firstElementChild.nodeName);
document.documentElement.style.backgroundColor = "lightblue";

let titol = document.getElementById("titol");
titol.style.color = "red";
titol.style.fontSize= "40px";

const elements = document.getElementsByClassName("grup")
for(let element of elements) {
    element.style.backgroundColor = "yellow";
    element.style.fontSize = "20px";
}

let afegir = document.createElement("li");
document.textContent = "holaaaa";
document.getElementById("1").appendChild(afegir);