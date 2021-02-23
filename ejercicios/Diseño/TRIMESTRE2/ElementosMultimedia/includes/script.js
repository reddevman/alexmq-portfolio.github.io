"use strict";

var vid = document.getElementById("myVideo");

function setVolume02() {
  vid.volume = 0.2;
}
function setVolume05() {
  vid.volume = 0.5;
}
function setVolume07() {
  vid.volume = 0.7;
}
function setVolume1() {
  vid.volume = 1;
}

function changeWidth() {
  if (vid.width == "640") {
    vid.width = "800";
  } else {
    vid.width = "640";
  }
}

function audioDuration() {
  var audioLength = document.getElementById("myAudio").duration.toFixed(2);
  document.getElementById("duration").innerHTML =
    "La duración del audio es de " + audioLength + " milisegundos.";
}

function audioLocation() {
  var audioLocation = document.getElementById("myAudio").currentSrc;
  document.getElementById("location").innerHTML =
    "La ubicación del archivo de audio es " + audioLocation;
}
