"use strict"



let mobilenet
let img
let label;

function setup() {
  let c = createCanvas(350, 350);
  console.log("ml5 version: " + ml5.version)
  mobilenet = ml5.imageClassifier('mobileNet', mobilenetReady)
  c.drop(archivoRecibido);
  label = createDiv('<hr><h2><strong>Arrastra archivo de imagen al cuadro amarillo para predecir su contenido</strong></h2>')
  
}

function mobilenetReady() {
  console.log('mobilenet ta ready...')
}

function archivoRecibido(archivo) {
  console.log('hay archivo...: ' + archivo.name)
  img = createImg(archivo.data, visualiza_archivo).hide()
}

function visualiza_archivo(archivo) {
  image(img, 0, 0, width, height);
  predecir_imagen()
}

function predecir_imagen() {
  mobilenet.predict(img, function(err, results) {
    label.html(results[0].label)
  })
}