function validateForm() {
    let nombre = document.getElementById("nombre").value;
    let contra = document.getElementById("pass").value;
    if (nombre == "ola" && contra == "ola123") {
        alert("Usuario y Contraseña válidos");
        window.open('sanValentinesDay.html');
    } else {
        alert("Intenta Nuevamente");
    }
};