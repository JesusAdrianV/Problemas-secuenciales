function calcular(){
let Minutos=parseFloat(document.getElementById("Minutos").value);
let Costo=parseFloat(document.getElementById("Costo").value);

const result=Minutos*Costo;

document.getElementById("result").textContent=
"El costo de la llamada es: $"+result;
}