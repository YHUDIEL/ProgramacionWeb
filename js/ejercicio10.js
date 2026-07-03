 function convertir() {
            const entrada = document.getElementById('celsius').value;
            const errorMsg = document.getElementById('error-msg');
            const resultado = document.getElementById('fahrenheit');

            if (entrada === '' || isNaN(entrada)) {
                errorMsg.style.display = 'block';
                resultado.value = '';
                return;
            }

            errorMsg.style.display = 'none';
            const fahrenheit = (parseFloat(entrada) * 9 / 5) + 32;
            resultado.value = fahrenheit.toFixed(2) + '°F';
        }