$(document).ready(function () {

    // CAMBIAR DE COLOR
    $("#btnColor").click(function () {
        var colorBody = $(document.body).css("background-color");

        // Condicional para alternar los colores ante la pulsación del botón que lleve la función
        if (colorBody === "rgb(255, 255, 255)") {
            $("#parrafo").css("color", "rgb(255, 255, 255)");
            $(document.body).css("background-color", "rgb(225, 65, 132)");
        } else {
            $("#parrafo").css("color", "rgb(225, 65, 132)");
            $(document.body).css("background-color", "rgb(255, 255, 255)");
        }
    });

    // AUMENTAR FUENTE
    $("#btnIncreaseFont").click(function () {
        // Recoger la variable del DOM
        var sizeP = $("#parrafo").css("font-size");

        // Se debe convertir el string que a un número entero o decimal, es igual
        var currentSize = parseInt(sizeP);

        // Aumentar la fuente sumándole 1px
        $("#parrafo").css("font-size", (currentSize + 1) + "px");
    });

    // REDUCIR FUENTE
    $("#btnDecreaseFont").click(function () {
        // Recoger la variable del DOM
        var parrafo = $("#parrafo").css("font-size");

        // Se debe convertir el string que a un número entero o decimal, es igual
        var currentSize = parseInt(parrafo);

        // Reducir la fuente sumándole 1px
        $("#parrafo").css("font-size", (currentSize - 1) + "px");
    });

    // AUMENTAR CON LIMITE DE 60PX
    $("#btnLimitMax").click(function () {
        var parrafo = $("#parrafo").css("font-size");
        var currentSize = parseInt(parrafo);

        if (currentSize < 60) {
            $("#parrafo").css("font-size", (currentSize + 1) + "px");

        } else {
            alert("Se alcanzó el límite de 60px para aumentar la fuente.");
        }
    });

    // REDUCIR CON LIMITE DE 40PX
    $("#btnLimitMin").click(function () {
        var parrafo = $("#parrafo").css("font-size");
        var currentSize = parseInt(parrafo);

        if (currentSize > 40) {
            $("#parrafo").css("font-size", (currentSize - 1) + "px");

        } else {
            alert("Se alcanzó el límite de 40px para disminuir la fuente.");
        }
    });
});