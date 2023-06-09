const inputDolar= document.querySelector("#dolar")
const inputPesos=document.querySelector("#pesos")

let PesosAdolares= inputPesos.value/140.58

inputDolar.addEventListener("input",()=>{
let dolarAPesos= inputDolar.value*140.58;
inputPesos.value=dolarAPesos.toFixed(2);
})
inputPesos.addEventListener("input",()=>{
    let PesosAdolares= inputPesos.value/140.58;
    inputDolar.value=PesosAdolares.toFixed(2);
})

