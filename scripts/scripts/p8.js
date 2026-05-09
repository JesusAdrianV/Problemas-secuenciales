function calcular(){
let Distancia=parseFloat(document.getElementById("Distancia").value);
let Velocidad=parseFloat(document.getElementById("Velocidad").value);

const result=Distancia/Velocidad;

document.getElementById("result").textContent=
"El tiempo del viaje es: "+result+" horas";
}
