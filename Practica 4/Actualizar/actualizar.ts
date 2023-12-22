//@ts-ignore
import {Request, Response} from "npm:express@4.18.2"
import { DimensionModel, PersonModel, PlanetaModel, TARDISmodel } from "../db/Squema.ts";

export const actualizar= async (req:Request, res:Response)=>{
    try {
        const tardisId = req.params.id;

        const existe = await TARDISmodel.findById(tardisId).exec()

        if (existe) {
            const { Dimensiones, camuflaje, regeneracion, año } = req.body;

            const actualizar= await TARDISmodel.findOneAndUpdate({_id: tardisId},{
                Dimensiones: Dimensiones,
                camuflaje: camuflaje,
                regeneracion: regeneracion,
                año: año
            })

            res.send(201).send(actualizar);
        }
        
        const pla = await DimensionModel.findById(tardisId).exec();

        if (pla){
            const {Nombre, Planetas} = req.body;

            const actualizar= await DimensionModel.findOneAndUpdate({_id: tardisId},{
                Nombre: Nombre,
                Planetas: Planetas
            })

            res.send(201).send(actualizar);
        }
 
        const per = await PlanetaModel.findById(tardisId).exec();

        if(per){
            const {Nombre, Personas } = req.body;

            const actualizar= await PlanetaModel.findOneAndUpdate({_id: tardisId},{
                Nombre: Nombre,
                Personas: Personas
            })

            res.send(201).send(actualizar);
        }
      
        const nombre = await PersonModel.findById(tardisId).exec();

        if(nombre){
            const {nombre} = req.body;

            const actualizar= await PersonModel.findOneAndUpdate({_id: tardisId},{
                nombre: nombre
            })

            res.send(201).send(actualizar);
        }

        if (!existe || !pla || !per || !nombre) {
            res.status(404).send("No se ha encontardo este identificador en la base de datos")
        }
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}
