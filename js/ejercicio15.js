var estudiantes = [];

function agregarEstudiante() {
    var nombre = document.getElementById('nombre').value;
    var calificacion = document.getElementById('calificacion').value;

    if (nombre === '' || calificacion === '') return;

    estudiantes.push({ nombre: nombre, calificacion: parseFloat(calificacion) });
    document.getElementById('nombre').value = '';
    document.getElementById('calificacion').value = '';
}

function calcular() {
    if (estudiantes.length === 0) return;

    var suma = estudiantes.reduce(function(total, e) { return total + e.calificacion; }, 0);
    var promedio = suma / estudiantes.length;

    var calificacionMaxima = Math.max(...estudiantes.map(function(e) { return e.calificacion; }));
    var calificacionMinima = Math.min(...estudiantes.map(function(e) { return e.calificacion; }));

    var estudianteAlto = estudiantes.find(function(e) { return e.calificacion === calificacionMaxima; });
    var estudianteBajo = estudiantes.find(function(e) { return e.calificacion === calificacionMinima; });

    document.getElementById('promedio').value = promedio.toFixed(2);
    document.getElementById('masAlta').value = estudianteAlto.nombre;
    document.getElementById('masBaja').value = estudianteBajo.nombre;
}
