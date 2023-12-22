//@ts-ignore
import {Request, Response} from "npm:express@4.18.2"
import { DimensionModel, PlanetaModel } from "../db/Squema.ts";

export const añadirdimension = async(Req:Request, Res:Response)=>{
    try {
        const { Nombre, Planetas } = Req.body;

       
        const existe = await PlanetaModel.find({ _id:  { $in: Planetas } } );
        if (!existe) {
            return Res.status(400).send("No existen id de los planetas introducidos ");
        }

     
        const newDimension = new DimensionModel({
            Nombre,
            Planetas,
        });

     
        const savedDimension = await newDimension.save();

        Res.status(201).send(savedDimension);
    } catch (error) {
        console.error(error);
        Res.status(500).send(error);
    }
}
