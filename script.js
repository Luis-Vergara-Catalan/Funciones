//ejercicio
//function pintar(){
//ele.style.backgroundColor = 'yellow'
//}
//const ele = document.getElementById("ele1")
//ele.addEventListener("click", pintar);
   
   
//solución
function pintar(palabra, color = 'green'){
    palabra.style.backgroundColor = color;
}

palabra = document.getElementById("ele1")
palabra.addEventListener("click", () => {
    pintar(palabra, "yellow");   
})
