enum EstadoTareas{
  PENDING="PENDING",
  IN_PROGRESS="IN_PROGRESS",
  DONE="DONE"
}

class tareas{
  id:string
  titulo:string
  despcription: string
  status:EstadoTareas
}