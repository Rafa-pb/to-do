import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToDoModule } from './to-do/to-do.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345678',
      database: 'todo',
      autoLoadEntities: true, // Carregar automaticamente as entidades registradas
      synchronize: true, // Apenas para desenvolvimento (sincroniza as entidades com o banco)
    }),
    ToDoModule,
  ],
})
export class AppModule {}
