import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToDo } from './entities/to-do.entity';
import { ToDoService } from './to-do.service';
import { ToDoController } from './to-do.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ToDo])],
  controllers: [ToDoController],
  providers: [ToDoService],
})
export class ToDoModule {}