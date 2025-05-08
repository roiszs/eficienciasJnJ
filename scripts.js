document.getElementById('kpiForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    const asociado = document.getElementById('asociado').value;
    const piezas = document.getElementById('piezas').value;
    const tiemposInactividad = document.getElementById('tiemposInactividad').value;

    // Aquí puedes agregar lógica para enviar estos datos a tu servidor...
    console.log({ asociado, piezas, tiemposInactividad });

    // Por ahora solo mostramos en la consola
});
