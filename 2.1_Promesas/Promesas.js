const btn = document.getElementById("btn");
const div = document.getElementById("contenedor");
let nombres = [];

async function Get() {
  try {
    const respuesta = await fetch("https://randomuser.me/api/");
    const json = await respuesta.json();

    const cardDiv = document.createElement("div");
    cardDiv.className = "card";
    cardDiv.style.width = "18rem";

    const img = document.createElement("img");
    img.src = json.results[0].picture.large;
    img.className = "card-img-top";

    const cardBodyDiv = document.createElement("div");
    cardBodyDiv.className = "card-body";

    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.textContent = json.results[0].name.title +" "+json.results[0].name.first+" "+json.results[0].name.last;

    const cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.textContent ="Ciudad: " + json.results[0].location.city +
    "\nEstado: " + json.results[0].location.state +
    "\nPais: " + json.results[0].location.country;

    cardBodyDiv.appendChild(cardTitle);
    cardBodyDiv.appendChild(cardText);
    cardDiv.appendChild(img);
    cardDiv.appendChild(cardBodyDiv);

    div.appendChild(cardDiv);
  } catch (error) {
    alert("Error Fatal, Comuniquese a soporte xD");
  }
}

{
}

btn.addEventListener("click", function () {
  Get();
});
