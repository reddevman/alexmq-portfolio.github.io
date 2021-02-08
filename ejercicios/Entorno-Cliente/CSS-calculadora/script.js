/// Función FIJAR RESULTADO en pantalla según el valor que se marque //
/* El Id 'resultado' pertenece a la caja de texto del visor, y el valor
será el número que se marque */

function fijarResultado(valor) {
    document.getElementById("resultado").innerHTML = valor;
}

// Función DEVOLVER RESULTADO obtenido de la pantalla del visor ///
function obtenerResultado() {
    return (document.getElementById("resultado").innerHTML);
}

/// Función para añadir la tecla que pulsemos al visor ///
function añadir(tecla) {

    /* A la variable resultado se le asigna la función de obtenerResultado() para
    que recoja la tecla añadida al visor */

    var resultado = obtenerResultado();

    /* Si resultado o la pantalla ya tiene algún dato o la tecla pulsada no
    es un número se le añade el carácter al visor (concatena) */

    if (resultado != "0" || isNaN(tecla)) fijarResultado(resultado + tecla);

    // Sino se reemplaza lo que hay en el visor con la tecla que pulsemos
    // Es decir si el resultado = 0 y se pulsa otro dígito

    else fijarResultado(tecla);
}

/// Función para CALCULAR ///
function calcular() {

    /* Variable resultado que tiene de valor lo que obtiene la función eval().
    Dicha función detecta el cálculo matemático que haya en sus parámetros */

    var resultado = eval(obtenerResultado());

    // Devuelve a la pantalla el resultado obtenido con eval()

    fijarResultado(resultado);
}

/// Función borrar ///
function borrar() {

    // Fija en cero lo que hay en el visor cuando pulsemos la tecla C

    fijarResultado(0);
}