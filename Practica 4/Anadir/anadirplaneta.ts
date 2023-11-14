//@ts-ignore
import {Request, Response} from "npm:express@4.18.2"
import {  PersonModel, PlanetaModel } from "../db/Squema.ts";

export const añadirplaneta = async(Req:Request, Res:Response)=>{
    try {
        const { Nombre, Personas } = Req.body;

        // Verifica que los planetas proporcionados existan en la base de datos
        const existen = await PersonModel.find({ _id: { $in: Personas } });
        if (!existen) {
            return Res.status(400).send("No existen id de las personas introducidas ");
        }

      
        const newPlaneta = new PlanetaModel({
            Nombre,
            Personas,
        });

       
        const savedPlaneta = await newPlaneta.save();

        Res.status(201).send(savedPlaneta);
    } catch (error) {
        console.error(error);
        Res.status(500).send(error);
    }
}