function validateForm() {
    let nombre = document.getElementById("nombre").value;
    let contra = document.getElementById("pass").value;
    if (nombre == "ola" && contra == "ola123") {
        alert("Usuario y Contraseña Válidos");
        window.open('prom.html');
    } else {
        alert("Intenta Nuevamente");
    }
};