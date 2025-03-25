import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'app',
        loadComponent: () => import('./shared/layout/layout.component').then(m => m.LayoutComponent),
        children: [
            {
                path: 'inicio',
                title: 'Inicio',
                loadComponent: () => import('./web/inicio/inicio.component').then(m => m.InicioComponent)
            },
            {
                path: 'reportes',
                title: 'Reportes',
                loadComponent: () => import('./web/reportes/reportes.component').then(m => m.ReportesComponent)
            },
            {
                path: 'tipo-identificacion',
                title: 'Tipos de identificación',
                loadComponent: () => import('./web/tipo-identificacion/listar-tipo-identificacion/listar-tipo-identificacion.component').then(m => m.ListarTipoIdentificacionComponent)
            },
            {
                path: 'tipo-identificacion/nuevo',
                title: 'Nuevo tipo de identificación',
                loadComponent: () => import('./web/tipo-identificacion/guardar-tipo-identificacion/guardar-tipo-identificacion.component').then(m => m.GuardarTipoIdentificacionComponent)
            },
            {
                path: 'tipo-identificacion/actualizar/:id',
                title: 'Actualizar tipo de identificación',
                loadComponent: () => import('./web/tipo-identificacion/actualizar-tipo-identificacion/actualizar-tipo-identificacion.component').then(m => m.ActualizarTipoIdentificacionComponent)
            },
            {
                path: 'tipo-identificacion/eliminar/:id',
                title: 'Eliminar tipo de identificación',
                loadComponent: () => import('./web/tipo-identificacion/eliminar-tipo-identificacion/eliminar-tipo-identificacion.component').then(m => m.EliminarTipoIdentificacionComponent)
            },
            {
                path: 'tarea',
                title: 'Tareas',
                loadComponent: () => import('./web/tarea/listar-tarea/listar-tarea.component').then(m => m.ListarTareaComponent)
            },
            {
                path: 'tarea/nueva',
                title: 'Nueva tarea',
                loadComponent: () => import('./web/tarea/guardar-tarea/guardar-tarea.component').then(m => m.GuardarTareaComponent)
            },
            {
                path: 'tarea/actualizar/:id',
                title: 'Actualizar tarea',
                loadComponent: () => import('./web/tarea/actualizar-tarea/actualizar-tarea.component').then(m => m.ActualizarTareaComponent)            
            },
            {
                path: 'tarea/estado/:id',
                title: 'Actualizar estado de una tarea',
                loadComponent: () => import('./web/tarea/estado-tarea/estado-tarea.component').then(m => m.EstadoTareaComponent)            
            },
            {
                path: 'tarea/eliminar/:id',
                title: 'Eliminar tarea',
                loadComponent: () => import('./web/tarea/eliminar-tarea/eliminar-tarea.component').then(m => m.EliminarTareaComponent)
            },
            {
                path: 'empleado',
                title: 'Empleados',
                loadComponent: () => import('./web/empleado/listar-empleado/listar-empleado.component').then(m => m.ListarEmpleadoComponent)            
            },
            {
                path: 'empleado/nuevo',
                title: 'Nuevo empleado',
                loadComponent: () => import('./web/empleado/guardar-empleado/guardar-empleado.component').then(m => m.GuardarEmpleadoComponent)            
            },
            {
                path: 'empleado/actualizar/:id',
                title: 'Actualizar empleado',
                loadComponent: () => import('./web/empleado/actualizar-empleado/actualizar-empleado.component').then(m => m.ActualizarEmpleadoComponent)            
            },
            {
                path: 'empleado/actualizar/:id',
                title: 'Actualizar el estado de un empleado',
                loadComponent: () => import('./web/empleado/estado-empleado/estado-empleado.component').then(m => m.EstadoEmpleadoComponent)
            },
            {
                path: 'empleado/eliminar/:id',
                title: 'Eliminar empleado',
                loadComponent: () => import(`./web/empleado/eliminar-empleado/eliminar-empleado.component`).then(m => m.EliminarEmpleadoComponent)
            },
            {
                path: 'estado-orden',
                title: 'Estados de las ordenes',
                loadComponent: () => import('./web/estado-orden/listar-estado-orden/listar-estado-orden.component').then(m => m.ListarEstadoOrdenComponent)            
            },
            {
                path: 'estado-orden/nuevo',
                title: 'Nuevo estado de orden',
                loadComponent: () => import('./web/estado-orden/guardar-estado-orden/guardar-estado-orden.component').then(m => m.GuardarEstadoOrdenComponent)            
            },
            {
                path: 'estado-orden/actualizar/:id',
                title: 'Actualizar estado de orden',
                loadComponent: () => import('./web/estado-orden/actualizar-estado-orden/actualizar-estado-orden.component').then(m => m.ActualizarEstadoOrdenComponent)            
            },
            {
                path: 'estado-orden/eliminar/:id',
                title: 'Eliminar un estado de orden',
                loadComponent: () => import('./web/estado-orden/eliminar-estado-orden/eliminar-estado-orden.component').then(m => m.EliminarEstadoOrdenComponent)
            },
            {
                path: 'orden-trabajo',
                title: 'Órdenes de trabajo',
                loadComponent: () => import('./web/orden-trabajo/listar-orden-trabajo/listar-orden-trabajo.component').then(m => m.ListarOrdenTrabajoComponent)            
            },
            {
                path: 'orden-trabajo/nueva',
                title: 'Nueva orden de trabajo',
                loadComponent: () => import('./web/orden-trabajo/guardar-orden-trabajo/guardar-orden-trabajo.component').then(m => m.GuardarOrdenTrabajoComponent)            
            },
            {
                path: 'orden-trabajo/eliminar/:id',
                title: 'Eliminar una orden de trabajo',
                loadComponent: () => import('./web/orden-trabajo/eliminar-orden-trabajo/eliminar-orden-trabajo.component').then(m => m.EliminarOrdenTrabajoComponent)
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'app/inicio'
    },
    {
        path: '',
        redirectTo: 'app/inicio',
        pathMatch: 'full'
    }

];
