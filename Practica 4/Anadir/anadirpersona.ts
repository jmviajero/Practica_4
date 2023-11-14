//@ts-ignore
import {Request, Response} from "npm:express@4.18.2"
import { PersonModel } from "../db/Squema.ts";

export const añadirpersona = async(Req:Request, Res:Response)=>{
    try {
        const { nombre } = Req.body;

       
        const newPerson = new PersonModel({
            nombre
        });


        const Person = await newPerson.save();

        Res.status(201).send(Person);
    } catch (error) {
        console.error(error);
        Res.status(500).send(error);
    }
}