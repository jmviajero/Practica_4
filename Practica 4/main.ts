import express from "npm:express@4.18.2"
import mongoose from "npm:mongoose@7.6.3"

import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts"
import { añadir } from "./Anadir/anadir.ts";
import { añadirdimension } from "./Anadir/anadirdimension.ts";
import { añadirplaneta } from "./Anadir/anadirplaneta.ts";
import { mostrar } from "./Mostrar/mostrar.ts";
import { añadirpersona } from "./Anadir/anadirpersona.ts";
import { actualizar } from "./Actualizar/actualizar.ts";

const env= await load();

let MONGO_URL= env.MONGO_URL || Deno.env.get("MONGO_URL");

const PORT = env.PORT || Deno.env.get("PORT") || 2999;

if(!MONGO_URL){
    console.error("No se proporcionó una URL válida para MongoDB");
    MONGO_URL="mongodb+srv://jmviajero:12345@cluster0.mfoc843.mongodb.net/TARDIS?retryWrites=true&w=majority"
}

try {
    


    await mongoose.connect(MONGO_URL);
    console.log("Conectado a la base de datos");

    const app= express();

    app.use(express.json());

    app.get("/tardis", mostrar) 
    
    app.post("/tardis", añadir );
    app.post("/dimension", añadirdimension);
    app.post("/Planeta", añadirplaneta);
    app.post("/Persona", añadirpersona)

    app.put("/tardis/:id", actualizar);

    app.listen(PORT , ()=>{
        console.log("Escuchando correctamente por el puerto " + PORT);
    })
    
} catch (error) {
    console.error("No funciona");
}