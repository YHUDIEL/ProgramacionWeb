const manejarTareas = (function () {

    let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

    function guardarEnStorage() {
        localStorage.setItem("tareas", JSON.stringify(tareas));
    }

    function agregar(texto) {
        tareas.push({ texto: texto });
        guardarEnStorage();
    }

    function eliminar(indice) {
        tareas.splice(indice, 1);
        guardarEnStorage();
    }

    function obtener() {
        return tareas;
    }

    return {
        agregar: agregar,
        eliminar: eliminar,
        obtener: obtener
    };

})();

function agregarTarea() {
    const input = document.getElementById("tarea");
    const texto = input.value.trim();

    if (texto === "") {
        Swal.fire({
            icon: 'warning',
            title: 'Campo vacío',
            text: 'Escribe una tarea antes de agregarla.'
        });
        return;
    }

    manejarTareas.agregar(texto);
    input.value = "";
    renderizarTareas();
}

function obtenerTareas() {
    return manejarTareas.obtener();
}

function eliminarTarea(indice) {
    Swal.fire({
        title: '¿Eliminar esta tarea?',
        text: 'Esta acción no se puede deshacer.',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
    }).then((resultado) => {
        if (resultado.isConfirmed) {
            manejarTareas.eliminar(indice);
            renderizarTareas();

            Swal.fire({
                icon: 'success',
                title: 'Tarea eliminada',
                timer: 1500,
                showConfirmButton: false
            });
        }
    });
}

function renderizarTareas() {
    const lista = document.getElementById("listaTareas");
    lista.innerHTML = "";

    const tareas = obtenerTareas();

    tareas.forEach((tarea, indice) => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${tarea.texto}
            <button onclick="eliminarTarea(${indice})" style="width:auto; padding:4px 10px; margin:0; font-size:12px;">Eliminar</button>
        `;
        lista.appendChild(li);
    });
}

renderizarTareas();
