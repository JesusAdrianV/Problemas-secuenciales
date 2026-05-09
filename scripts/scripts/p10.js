function calcular(){
let Metros=parseFloat(document.getElementById("Metros").value);
let Costo=parseFloat(document.getElementById("Costo").value);

const result=Metros*Costo;

document.getElementById("result").textContent=
"El pago total es: $"+result;
}
