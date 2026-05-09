function calcular() {
  let Base= parseFloat (document.getElementById("Base").value);
  let Altura= parseFloat (document.getElementById("Altura").value);
  const result=Base*Altura/2
  document.getElementById( "result").textContent="El resultado es: "+ result
}