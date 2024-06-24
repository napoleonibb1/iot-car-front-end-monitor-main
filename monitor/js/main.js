
let respuesta = document.getElementById('respuesta');

function callApiRequest(){

    // Hacer una petición para un usuario con ID especifico
axios.get('https://18.224.13.4/iot-car-control/back-end/apis/getRegistro.php')
.then(function (response) {
  // manejar respuesta exitosa
  console.log(response);

  let respuestaservidor = response.data == "a"?"ADELANTE":response.data == "b"?"ATRAS":response.data == "c"?"IZQUIERDA":response.data == "d"?"DERECHA": response.data == "s"?"PARAR":"LETRA NO CONOCIDA";
  respuesta.innerHTML = "Respuesta: <strong>" +respuestaservidor;
})
.catch(function (error) {
  // manejar error
  console.log(error);
})
.finally(function () {
  // siempre sera executado
});
}

// Repite la función cada 2 segundos
setInterval(callApiRequest, 1000);


