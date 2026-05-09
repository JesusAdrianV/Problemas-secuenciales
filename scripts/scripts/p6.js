function calcular(){
let A=parseFloat(document.getElementById("A").value);
let B=parseFloat(document.getElementById("B").value);

const result=Math.sqrt((A*A)+(B*B));

document.getElementById("result").textContent=
"La hipotenusa es: "+result;
}