let $calcular = document.querySelector("#calcular");

$calcular.addEventListener("click", () => {
  let $inputAltura = document.querySelector("#estatura");
  let $inputPeso = document.querySelector("#peso");
  let $inputResultado = document.querySelector("#result");
  let altura = parseFloat($inputAltura.value) / 100; // Convertir la altura a metros dividiendo por 100
  let peso = parseFloat($inputPeso.value);
  let formula = peso / (altura * altura);
  $inputResultado.value = formula.toFixed(2);
});