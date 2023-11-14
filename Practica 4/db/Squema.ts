
import mongoose from "npm:mongoose@7.6.3"
import {Dimension, Persona, Planeta, TARDIS} from "../types.ts"


const Schema = mongoose.Schema;

const SchemaPersona = new Schema({
    nombre: {type: String, required:true, unique: true},
},{
    timestamps:true
});

export type PersonamodelType= mongoose.Document & Persona;

export const PersonModel= mongoose.model<PersonamodelType>("Persona" , SchemaPersona);

const SchemaPlaneta = new Schema({
    Nombre: {type: String, required:true, unique: true},
    Personas: {type: Array<Persona>, required:true, ref: 'Persona'}
},{
    timestamps:true
});

export type PlaneramodelType= mongoose.Document & Planeta;

export const PlanetaModel= mongoose.model<PlaneramodelType>("Planeta" , SchemaPlaneta);

const SchemaDimension = new Schema({
    Nombre: {type: String, required:true, unique: true},
    Planetas: {type: Array<Planeta>, required:true, ref: 'Planeta'}
},{
    timestamps:true
});

export type DimensionmodelType= mongoose.Document & Dimension;

export const DimensionModel= mongoose.model<DimensionmodelType>("Dimension", SchemaDimension);

const SchemaTARDIS = new Schema({
    Dimensiones: {type: Array<Dimension>, required:true, ref: 'Dimension'},
    camuflaje: {type: String, required:true},
    regeneracion: {type:Number, required:true},
    año: {type: Number, required:true}
},{
    timestamps: true
});

export type TARDISmodelType= mongoose.Document & TARDIS;

export const TARDISmodel= mongoose.model<TARDISmodelType>("TARDIS", SchemaTARDIS);