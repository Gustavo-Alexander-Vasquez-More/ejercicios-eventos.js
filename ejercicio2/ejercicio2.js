//crear el cuadrado: HECHO
//crear en html un input tipo texto: HECHO

//llamar a ambos con queryselector: HECHO
let cuadrado=document.querySelector("#box")
let inputText=document.querySelector("#text")
let resetButtom=document.querySelector("#btn-reset")

//crear una funcion con un addEventListenner que diga que cuando haga enter
//en el input, se refleje lo escrito en el cuadrado y ademas hacer que boton
//el reset se haga visible;
inputText.addEventListener('keyup', (event) => {
if (event.key === "Enter") {
    cuadrado.textContent = inputText.value;
    resetButtom.style.display= "block";
    }
});
resetButtom.addEventListener('click', () => {
    cuadrado.textContent = "";
    inputText.value = "";
    resetButtom.style.display = "none";
});