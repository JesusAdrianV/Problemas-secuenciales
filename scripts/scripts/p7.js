function calcular(){
let Kilometros=parseFloat(document.getElementById("Kilometros").value);
let Costo=parseFloat(document.getElementById("Costo").value);

const result=Kilometros*Costo;

document.getElementById("result").textContent=
"El costo del boleto es: $"+result;
}
