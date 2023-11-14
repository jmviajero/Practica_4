//@ts-ignore
import {Request, Response} from "npm:express@4.18.2"
import { DimensionModel, TARDISmodel } from "../db/Squema.ts";



export const añadir= async(Req:Request, Res:Response)=>{
    try {
        const { Dimensiones, camuflaje, regeneracion, año } = Req.body;

        // Verifica que las dimensiones proporcionadas existan en la base de datos
        const exist = await DimensionModel.find({ _id: { $in: Dimensiones } });
        if (!exist) {
            Res.status(404).send("No se han encontrado estas dimensiones en la base de datos")
            return;
        }

        // Crea una nueva TARDIS
        const newTardis = new TARDISmodel({
            Dimensiones,
            camuflaje,
            regeneracion,
            año,
        });

        // Guarda la nueva TARDIS en la base de datos
        const savedTardis = await newTardis.save();

        Res.status(201).send(savedTardis);
    } catch (error) {
        console.error(error);
        Res.status(500).send(error);
    }
}