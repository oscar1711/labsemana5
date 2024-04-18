const express = require ("express");
const conectarBD = require("../config/db")
const cors = require("cors");

// configuracion express y puerto
const app = express();
const port = 5000;
app.use(express.json());
app.use("/api/clientes", require('../routes/RoutersCliente'));
app.use("/api/producto", require('../routes/RoutersProducto'));

//enlazamos la conexion de la base de datos
conectarBD();
app.use(cors());



app.listen(port , () => console.log(' servidor conectado http://localhost:5000/'));

app.get('/', (req,res) => {
    res.send("Bienvenido nuestro servidor esta configurado");
});

//src