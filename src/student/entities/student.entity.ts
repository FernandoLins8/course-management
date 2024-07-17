import { CourseStudent } from 'src/course/entities/course-student.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => CourseStudent, (courseStudent) => courseStudent)
  courseStudent: CourseStudent[];
}
