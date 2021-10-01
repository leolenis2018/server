//Para poder usar express
const express = require("express");

class ServidorModelo {

  constructor() {
    this.app = express();
    this.enrutarPeticiones()
  }
  despertarServidor() {
    this.app.listen(process.env.PUERTO, function () {
      //console.log("Servidor encendido" + process.env.PUERTO);
      console.log(`Servidor Encendido ${process.env.PUERTO}`)
    });
  }

  enrutarPeticiones() {
    this.app.get("/avanzada/v1/jugadores", function (req, res) {
      res.send("Estoy procesando un GET () buscar");
    });

    this.app.post("/avanzada/v1/jugadores", function (req, res) {
      res.send("Estoy procesando un POST () Insertar");
    });

    this.app.put("/avanzada/v1/jugadores", function (req, res) {
      res.send("Estoy procesando un PUT () buscar");
    });

    this.app.delete("/avanzada/v1/jugadores", function (req, res) {
      res.send("Estoy procesando un DELETE () buscar");
    });
  }

  despertarBD() {}
}

//Esto es para exportar a clase
module.exports=ServidorModelo

// hola
