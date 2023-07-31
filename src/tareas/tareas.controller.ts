import { Controller, Get, Post, Body, Delete, Param, Patch } from '@nestjs/common';
import { TareasService } from './tareas.service';
import { creatTarea, updaterTarea } from "./dto/tareas.dto"


@Controller('tareas')
export class TareasController {
  constructor(private tareasService: TareasService) { }
  @Get()
  getAllTareas() {
    return this.tareasService.getAllTareas()
  }
  @Post()
  createTarea(@Body() nuevaTarea: creatTarea) {
    return this.tareasService.createTareas(nuevaTarea.titulo, nuevaTarea.descripcion)
  }

  @Delete(":id")
  // esta diciendo que va a recibir una propiedad id que se va a guardar en una propiedad id de tipo string
  eliminarTarea(@Param("id") id: string) {
    this.tareasService.deleteTareas(id)
  }
  @Patch(":id")
  updateTarea(@Param("id") id: string, @Body() updateTareas: updaterTarea) {
    return this.tareasService.updateTareas(id, updateTareas)
  }

}

//para usar los metodos creados en el archivo service 
//vamos tener que añadir el metodo dentro del contructor