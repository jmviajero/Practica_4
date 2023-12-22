//@ts-ignore
import {Request, Response} from "npm:express@4.18.2"
import { TARDISmodel } from "../db/Squema.ts";

export const mostrar = async(req:Request, res:Response)=>{
    try {

        const encontrar= await TARDISmodel.find().populate({ path: "Dimensiones",
                                                               populate: { path: "Planetas",
                                                                          populate: { path: "Personas",
                                                                                    },
                                                                         },
                                                           }).exec();
        

        if (!encontrar) {
            return res.status(404).json({ "TARDIS no encontrada" });
        }

        res.status(200).json(encontrar);
    } catch (error) {
        console.error(error);
        Res.status(500).send(error);
    }
}
