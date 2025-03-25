import { TipoIdentificacion } from "./tipo-identificacion";

export interface Empleado{
    id_empleado: number;
    tipoIdentificacion: TipoIdentificacion;
    identificacion: string;
    nombre: string;
    apellidos: string;
    telefono: string;
    correo: string;
    estado: boolean;
    direccion: string;
    puesto: string;
}