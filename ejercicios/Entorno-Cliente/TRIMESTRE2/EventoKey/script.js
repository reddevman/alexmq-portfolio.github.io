var keyTwice = false;

window.addEventListener("keydown", function (event) {

    event.preventDefault();

    var key = event.key || event.keyCode;
    if (key === "F1") {
        document.querySelector("#texto").innerHTML = "F1 PULSADA. Pulsa F1 para eliminar el mensaje.";
        if (keyTwice) {
            document.querySelector("#texto").innerHTML = "";
        }
        keyTwice = true;
        setTimeout(function () {
            keyTwice = 0;
        }, 1000);
    }

    if (key !== "F1") {
        document.querySelector("#texto").innerHTML = "Pulsa F1 para ayuda.";
    }
});

// window.addEventListener("keyup", function (event)
// {
//     if (event.defaultPrevented) {
//         return;
//     }

//     var key = event.key || event.keyCode;
//     if (key === "F1") {
//         document.querySelector("#texto").innerHTML = "";
//     }
// });