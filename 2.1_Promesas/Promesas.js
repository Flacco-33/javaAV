const btn = document.getElementById("btn");
const div = document.getElementById("contenedor");
let nombres=[];

async function Get(){
    try {
        const respuesta= await fetch("https://randomuser.me/api/");
        const json = await respuesta.json();
        alert(json.results[0].name.first)
        // const nombre =json.results[0].name.first;
        // alert(nombre);
        // nombres.push(nombre);
        // console.log(nombres);
        
        let card = document.createElement("div");
        card.setAttribute("class","card");
        card.setAttribute("style","width: 18rem");
        div.appendChild(card);
        let imagen = document.createElement("img")
        imagen.setAttribute("src",json.results[0].picture.large)
        imagen.setAttribute("class","card-img-top")
        card.appendChild(imagen);
        let body =document.createElement("div");
        body.setAttribute("class","card-title")
        body.setAttribute("value","flaco")
        card.appendChild(body);
        

     } catch (error) {
         alert("Error Fatal, Comuniquese a soporte xD")
        
     }
}

{/* <div class="container">
      <div class="card" style="width: 18rem">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div> */}

btn.addEventListener("click",function(){
    Get();
    
});