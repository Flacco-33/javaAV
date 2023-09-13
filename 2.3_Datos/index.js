const img = document.getElementById("imgPerro");
const span =document.getElementById("status");
const btn =document.getElementById("btnConsultar");
const div=document.getElementById("imagenes")

btn.addEventListener("click",()=>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(respuesta =>respuesta.json())
    .then(json=>{
        span.innerText=json.status;
        let imagen = document.createElement("img");
        imagen.setAttribute("src",json.message);
        imagen.setAttribute("width",200);
        imagen.setAttribute("height",200);
        div.appendChild(imagen);
        //img.src=json.message;
    })
    .catch()
});