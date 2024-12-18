import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ToDo } from './entities/to-do.entity';

@Injectable()
export class ToDoService {
  constructor(
    @InjectRepository(ToDo)
    private readonly toDoRepository: Repository<ToDo>,
  ) {}

  findAll() {
    return this.toDoRepository.find();
  }

  findOne(id: number) {
    return this.toDoRepository.findOne({ where: { id } });
  }

  create(data: Partial<ToDo>) {
    const toDo = this.toDoRepository.create(data);
    return this.toDoRepository.save(toDo);
  }

  update(id: number, data: Partial<ToDo>) {
    return this.toDoRepository.update(id, data);
  }

  remove(id: number) {
    return this.toDoRepository.delete(id);
  }
}
