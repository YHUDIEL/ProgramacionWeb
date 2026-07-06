function calcular() {
    var entrada = document.getElementById('numeros').value;
    var numeros = entrada.split(',').map(Number);

    document.getElementById('mayor').value = Math.max(...numeros);
    document.getElementById('menor').value = Math.min(...numeros);

    var suma = numeros.reduce(function(acc, valor) { return acc + valor; }, 0);
    document.getElementById('promedio').value = (suma / numeros.length).toFixed(2);
}
