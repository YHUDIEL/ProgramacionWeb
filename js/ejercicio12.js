function convertir() {
    var entrada = document.getElementById('pesos').value;
    var resultado = document.getElementById('dolares');

    var dolares = parseFloat(entrada) * 0.055;
    resultado.value = dolares.toFixed(2) + ' USD';
}