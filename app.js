// 1. Importar las dependencias que vamos a usar
import express from "express";
import path from "path";
import dotenv from "dotenv";



//2. Configurar nuestro servidor
const app = express();
const puerto = 9000;

//2.1 confirgura las variables de entorno
dotenv.config();


//3.Establecer la conexción con nuestro Front
const rutaPublica = path.join(process.cwd(),"public");
app.use(express.static(rutaPublica));

//4 Inicializamos servidor
app.use(express.json());

//Especificacmos que vamos a acceder a nuestro index.html
app.get("/",(req,res) => {
    res.sendFile(path.join(rutaPublica,"index.html"))
})

app.listen(puerto, () => {
    console.log(`El servidor está escuchando en http://localhost:${puerto}`);
  });



