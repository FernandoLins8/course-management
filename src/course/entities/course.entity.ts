import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { CourseStudent } from './course-student.entity';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ nullable: true })
  price: number;

  @Column({ default: false })
  hasExpired: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => CourseStudent, (courseStudent) => courseStudent)
  courseStudent: CourseStudent[];
}
