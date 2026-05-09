function calcular() {

    let Pesos = parseFloat(document.getElementById("Pesos").value);

    let Cambio = parseFloat(document.getElementById("Cambio").value);

    const result = Pesos / Cambio;

    document.getElementById("result").textContent =
    "La cantidad en dólares es: $" + result;

}
