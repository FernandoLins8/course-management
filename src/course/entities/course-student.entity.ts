import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Course } from './course.entity';
import { Student } from 'src/student/entities/student.entity';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class CourseStudent {
  @PrimaryGeneratedColumn('uuid')
  registration: string;

  @Column()
  courseId: number;

  @Column()
  studentId: number;

  @ManyToOne(() => Course, (course) => course.courseStudent)
  course: Course;

  @ManyToOne(() => Student, (student) => student.courseStudent)
  student: Student;

  constructor() {
    this.registration = uuidv4();
  }
}
