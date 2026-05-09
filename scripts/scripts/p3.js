function calcular(){
let Nacimiento=parseFloat(document.getElementById("Nacimiento").value);
let Actual=parseFloat(document.getElementById("Actual").value);

const result=Actual-Nacimiento;

document.getElementById("result").textContent=
"La edad es: "+result+" años";
}