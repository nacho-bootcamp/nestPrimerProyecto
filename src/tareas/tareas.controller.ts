import { Controller, Get, Post, Body } from '@nestjs/common';
import { TareasService } from "./tareas.service"
import { creatTarea } from "./dto/tareas.dto"


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
}

//para usar los metodos creados en el archivo service 
//vamos tener que añadir el metodo dentro del contructor