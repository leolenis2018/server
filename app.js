//Configurar las variables de entorno
require("dotenv").config();

//Importar el servidor modelo
const ServidorModelo = require("./models/ServidorModelo");

// Crear un objeto de la clase ServidorModelo
const servidorFPC = new ServidorModelo();

//Despertar(Encender) el servidor
servidorFPC.despertarServidor();
