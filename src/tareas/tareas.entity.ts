export enum EstadoTareas {
  PENDING = "PENDING",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE"
}

export class tareas {
  id: string
  titulo: string
  description: string
  status: EstadoTareas
}

