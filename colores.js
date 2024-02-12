const cuadroAzul = document.getElementById("azul");
const cuadroRojo = document.getElementById("rojo");
const cuadroVerde = document.getElementById("verde");
const cuadroAmarillo = document.getElementById("amarillo");
const cuadrotecla = document.getElementById("key");

const changeBackgroundColor = (event) => {
    event.target.style.backgroundColor = "black";
} ;

cuadroAzul.addEventListener("click", changeBackgroundColor);
cuadroRojo.addEventListener("click", changeBackgroundColor);
cuadroVerde.addEventListener("click", changeBackgroundColor);
cuadroAmarillo.addEventListener("click", changeBackgroundColor);

let color ="";

document.addEventListener("keydown", (event) =>{
    if (event.key === "a"){
        cuadrotecla.style.backgroundColor = "pink";
    } else if (event.key === "s"){
        cuadrotecla.style.backgroundColor = "orange";
    } else if (event.key === "d"){
        cuadrotecla.style.backgroundColor = "skyblue";
    } else if (event.key === "q"){
        createNewDiv ("purple")
    } else if (event.key === "w"){
        createNewDiv ("gray")
    } else if (event.key === "e"){
        createNewDiv ("brown")
    }
});

function createNewDiv (color){
    const otroDiv = document.createElement("div");
    otroDiv.style.width = "200px";
    otroDiv.style.height = "200px";
    otroDiv.style.backgroundColor = color;
    document.body.appendChild(otroDiv);

}