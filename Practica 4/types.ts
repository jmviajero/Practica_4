export type Persona={
    nombre: string
}

export type Planeta={
    nombre: string,
    Personas: Persona[]
}

export type Dimension={
    nombre: string,
    Planetas: Planeta[]
}

export type TARDIS={
    Dimensiones: Dimension[]
    camuflaje: string
    regeneracion: number
    año: number
}