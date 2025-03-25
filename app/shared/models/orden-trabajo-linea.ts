import { OrdenTrabajo } from "./orden-trabajo";
import { Tarea } from "./tarea";

export interface OrdenTrabajoLinea{
    id_orden_trabajo_linea: number;
    ordenTrabajo: OrdenTrabajo;
    tarea: Tarea;
}