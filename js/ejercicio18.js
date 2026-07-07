const input = document.getElementById('nuevoElemento');
const botonAgregar = document.getElementById('agregarBtn');
const lista = document.getElementById('lista');
const errorMsg = document.getElementById('errorMsg');

function agregarElemento() {
    const texto = input.value.trim();

    if (texto === '') {
        input.classList.add('is-invalid');
        errorMsg.style.display = 'block';
        return;
    }

    input.classList.remove('is-invalid');
    errorMsg.style.display = 'none';

    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';

    const span = document.createElement('span');
    span.textContent = texto;

    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.className = 'btn btn-danger btn-sm';
    botonEliminar.addEventListener('click', function () {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(botonEliminar);
    lista.appendChild(li);

    input.value = '';
    input.focus();
}

botonAgregar.addEventListener('click', agregarElemento);

input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') agregarElemento();
});
