
import { Time } from "@angular/common";

export interface Tarea{
    id_tarea: number;
    nombre: string;
    descripcion: string;
    hora_inicio: Time;
    hora_fin: Time;
    estado: number;
}