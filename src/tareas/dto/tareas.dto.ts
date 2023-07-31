import { EstadoTareas } from "../tareas.entity"
export class creatTarea {
  titulo: string;
  descripcion: string;
}
export class updaterTarea {
  titulo?: string;
  descripcion?: string;
  status?: EstadoTareas;
}