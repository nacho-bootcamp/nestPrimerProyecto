import { Injectable } from '@nestjs/common';
import { tareas, EstadoTareas } from './tareas.entity';
import { updaterTarea } from "./dto/tareas.dto"
import { v4 } from "uuid"

@Injectable()
export class TareasService {
  private tareas: tareas[] = [{
    id: "1",
    titulo: "Recordando NextJS",
    description: "Este año se consegui trabajo",
    status: EstadoTareas.PENDING
  }]
  //los servicios sirven para crear metodos para que podamos utilizar
  //por ejemplo:
  getAllTareas() {
    return this.tareas
  }
  createTareas(titulo: string, description: string) {
    const tareas = {
      id: v4(),
      titulo,
      description,
      status: EstadoTareas.PENDING

    }

    // nosotros vamos a decir que cuando se cree una tarea 
    // se agregue al arreglo que habiamos creado con esto
    this.tareas.push(tareas)
    return tareas
  }
  deleteTareas(id: string) {
    this.tareas = this.tareas.filter(tarea => tarea.id !== id)
  }

  getTarreaById(id: string): tareas {
    return this.tareas.find(tarea => tarea.id === id)
  }
  updateTareas(id: string, updateTarea: updaterTarea): tareas {
    const tarea = this.getTarreaById(id);
    const nuevaTarea = Object.assign(tarea, updateTarea)
    this.tareas = this.tareas.map((tarea) => (tarea.id === id ? nuevaTarea : tarea))
    return nuevaTarea
  }
}

//para poder utilizar estos metodos en otro lado debo injectar esta clase 
// en la carpeta o archivo donde quiera utilizar

