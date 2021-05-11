//for(/*inicio-condicion-acumulador*/){

//}
/*for (let i = 0; i <= 9; i++){
   
    /*Ejecuta 10 veces
}*/
let titulo = "Hola";

let i = 0

while (i <= 9){
 let card = `<div class="m-3 card" style="width: 18rem;">
<img src="https://ireneb15.files.wordpress.com/2011/06/mariposaimage.jpg" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Posicion ${i}</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`;

    document.getElementById("contenedor-trajetas").innerHTML += card;
    i++;
}

