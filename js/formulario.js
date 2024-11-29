// 1. Función para que al rato de aplastar guardar me salga el JSON
let nombre = Roberto;
let apellido = Aguas;
let cedula = 1234567890;
function guardarDatos() {

    const datos = {
        nombre,
        apellido,
        cedula
    };
    console.log(datos);
    document.getElementById('typeId').value = JSON.stringify(datos);
    document.getElementById('typeId').value = JSON.parse(datos);


    //const objeto = JSON.parse(texto);
    

    validarCampos();

}

// 2. Función para al rato de aplastar en el botón JSON se autocomplete mis input en nombre, apellido y cédula
function autocompletarDatos() {
    const datos = {
        nombre: "Roberto",
        apellido: "Aguas",
        cedula: "1234567890"
    };


    document.getElementById('nombre').value = datos.nombre;
    document.getElementById('apellido').value = datos.apellido;
    document.getElementById('cedula').value = datos.cedula;
}

document.getElementById('guardarBtn').addEventListener('click', guardarDatos);
document.getElementById('jsonBtn').addEventListener('click', autocompletarDatos);
//3. validar que los campos no estén vacíos del type="Nombre", type="Apellido" y type="Cédula"
function validarCampos() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const cedula = document.getElementById('cedula').value;

    if (nombre === "" || apellido === "" || cedula === "") {
        alert('Por favor llene todos los campos');
    }
}