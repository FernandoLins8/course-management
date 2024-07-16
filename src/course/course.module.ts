import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { CourseStudent } from './entities/course-student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Course, CourseStudent])],
  controllers: [CourseController],
  providers: [CourseService],
})
export class CourseModule {}
