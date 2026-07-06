 function convertir() {
            var entrada = document.getElementById('km').value;
            var resultado = document.getElementById('millas');

            var millas = parseFloat(entrada) * 0.621371;
            resultado.value = millas.toFixed(2) + ' mi';
        }