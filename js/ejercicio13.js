function verificarVoto() {
    var entrada = document.getElementById('edad').value;
    var resultado = document.getElementById('voto');

    if (parseInt(entrada) >= 18) {
        resultado.value = '¡Puedes votar!';
    } else {
        resultado.value = 'No puedes votar todavía.';
    }
}