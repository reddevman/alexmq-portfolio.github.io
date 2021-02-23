"use strict";

$(document).ready(function ()
{


  // Evento al hacer clic en tecla 1 - Teclas: (https://keycode.info/)
  $(document).keypress(function (e) { 
    if (e.keyCode === 49) {
      alert("Presionaste 1");
    }
  });
    
  // LIMPIAR input
  $("#clean").click(function () {
    $("#pre").empty();
    $("#post").empty();
    $("#texto").html("X");
  });

    
  // AÑADIR 1 ANTES (prepend)
  $("#add1").click(function () {
    $("#pre").prepend("1");
  });

  // AÑADIR 9 DESPUÉS (append)
  $("#add9").click(function () {
    $("#post").append("9");
  });

  // AÑADIR DELANTE 0 AL 4, O DETRÁS 5-9
  $("#addNumber").click(function () {
    if ($("#inputNumber").val() >= 0 && $("#inputNumber").val() <= 4) {
      $("#pre").prepend($("#inputNumber").val());
    } else if ($("#inputNumber").val() >= 5 && $("#inputNumber").val() <= 9) {
      $("#post").append($("#inputNumber").val());
    }
  });
    
    // ORDENAR NÚMEROS
    $("#order").click(function ()
    {
        // span previo
        let pre = document.getElementById("pre").textContent;
            // contenido del elemento html a array
        let preArray = pre.split("");
            // ordenar números de manera ascendente
        preArray.sort(function (a, b) { return a - b });
            // variable que irá almacenando los números que contiene el array ordenado
        let newTxtPre = "";
            // recorrido del array para ir almacenando los valores de cada posición
        for (let i = 0; i < preArray.length; i++) {
            newTxtPre += preArray[i];
        }
            // se sustituye el contenido del elemento html por los números en orden
        document.getElementById("pre").innerHTML = newTxtPre;

        // span posterior
        let post = document.getElementById("post").textContent;
        let postArray = post.split("");
        postArray.sort(function (a, b) { return a - b });
        let newTxtPost = "";
        for (let j = 0; j < postArray.length; j++) {
            newTxtPost += postArray[j];
        }
        document.getElementById("post").innerHTML = newTxtPost;
  })
});
