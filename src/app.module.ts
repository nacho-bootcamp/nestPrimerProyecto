import { Module } from '@nestjs/common';
import { TareasModule } from './tareas/tareas.module';
import { TareaController } from './tarea/tarea.controller';


@Module({
  imports: [TareasModule],
  controllers: [TareaController],
  providers: [],
})
export class AppModule {}
