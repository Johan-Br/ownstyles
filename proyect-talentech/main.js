document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el enlace "Hombre"
    const hombreLink = document.querySelector('.navegacion ul li a[href="#"]:nth-child(3)');

    // Añade un evento de clic al enlace "Hombre"
    hombreLink.addEventListener('click', function(event) {
        event.preventDefault(); // Previene el comportamiento predeterminado del enlace
        window.location.href = 'file:///C:/Users/Administrador/Documents/XD/Nueva%20carpeta/cathombre.html'; // Redirige a la página de precios
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el enlace "Nuevo"
    const nuevoLink = document.querySelector('.navegacion ul li a[href="#"]:nth-child(1)');

    // Añade un evento de clic al enlace "Nuevo"
    nuevoLink.addEventListener('click', function(event) {
        event.preventDefault(); // Previene el comportamiento predeterminado del enlace
        window.location.href = 'file:///C:/Users/Administrador/Documents/XD/Nueva%20carpeta/catlonuevo.html'; // Redirige a la página de "Nuevo"
    });
});
