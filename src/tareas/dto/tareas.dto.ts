import { EstadoTareas } from "../tareas.entity"
import { IsString, MinLength, IsNotEmpty, IsOptional, IsIn } from "class-validator"
export class creatTarea {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  titulo: string;
  @IsString()
  descripcion: string;
}
export class updaterTarea {
  @IsString()
  @IsOptional()
  titulo?: string;
  @IsString()
  @IsOptional()
  descripcion?: string;
  @IsString()
  @IsOptional()
  @IsIn([EstadoTareas.DONE, EstadoTareas.IN_PROGRESS, EstadoTareas.PENDING])
  status?: EstadoTareas;
}