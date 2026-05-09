function calcular(){
let Horas=parseFloat(document.getElementById("Horas").value);
let Costo=parseFloat(document.getElementById("Costo").value);

Horas=Math.ceil(Horas);

const result=Horas*Costo;

document.getElementById("result").textContent=
"El cobro total es: $"+result;
}