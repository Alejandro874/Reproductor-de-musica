import { Empleado } from "./empleado";
import { EstadoOrden } from "./estado-orden";

export interface OrdenTrabajo{
    id_orden_trabajo: number;
    empleado: Empleado;
    estadoOrden: EstadoOrden;
    fecha: String;
    descripcion: Text;
}