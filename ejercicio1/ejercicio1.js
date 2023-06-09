let btn = document.querySelector("#nada");
let cuadrado = document.querySelector("#caja");

let colorActual = "blue";

let Cambiar = () => {
  if (colorActual === "blue") {
    cuadrado.style.backgroundColor = "aqua";
    cuadrado.textContent = "celeste";
    colorActual = "red";
  } else {
    cuadrado.style.backgroundColor = "red";
    cuadrado.textContent = "rojo";
    colorActual = "blue";
  }
};

btn.addEventListener('click', Cambiar);