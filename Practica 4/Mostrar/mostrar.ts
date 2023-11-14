//@ts-ignore
import {Request, Response} from "npm:express@4.18.2"
import { TARDISmodel } from "../db/Squema.ts";

export const mostrar = async(req:Request, res:Response)=>{
    try {

        // Busca la TARDIS por ID
        const foundTardis = await TARDISmodel.find()
        .populate({
            path: "Dimensiones",
            populate: {
                path: "Planetas",
                populate: {
                    path: "Personas",
                },
            },
        })
        .exec();

        if (!foundTardis) {
            return res.status(404).json({ error: 'TARDIS no encontrada.' });
        }

        res.status(200).json(foundTardis);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor.' });
    }
}
