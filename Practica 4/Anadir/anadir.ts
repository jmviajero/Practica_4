//@ts-ignore
import {Request, Response} from "npm:express@4.18.2"
import { DimensionModel, TARDISmodel } from "../db/Squema.ts";



export const añadir= async(Req:Request, Res:Response)=>{
    try {
        const { Dimensiones, camuflaje, regeneracion, año } = Req.body;

        
        const existe = await DimensionModel.find({ _id: { $in: Dimensiones } });
        if (!existe) {
            Res.status(404).send("No se han encontrado estas dimensiones en la base de datos")
            return;
        }

        
        const newTardis = new TARDISmodel({
            Dimensiones,
            camuflaje,
            regeneracion,
            año,
        });

     
        const saved = await newTardis.save();

        Res.status(201).send(saved);
    } catch (error) {
        console.error(error);
        Res.status(500).send(error);
    }
}
