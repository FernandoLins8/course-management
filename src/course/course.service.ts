import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Course } from './entities/course.entity';
import { UpdateCourseDto } from './dto/update-course.dto';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCoursePriceDto } from './dto/update-price.dto';
import { CourseStudent } from './entities/course-student.entity';
import { AddStudentToCourseDto } from './dto/add-student-to-course.dto';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private courseRepository: Repository<Course>,
    @InjectRepository(CourseStudent)
    private courseStudentRepository: Repository<CourseStudent>,
  ) {}

  findAll(): Promise<Course[]> {
    return this.courseRepository.find();
  }

  findOne(id: number): Promise<Course> {
    return this.courseRepository.findOneBy({ id });
  }

  async create(createCourseDto: CreateCourseDto): Promise<Course> {
    return this.courseRepository.save(createCourseDto);
  }

  async addStudent(
    addStudentToCourseDto: AddStudentToCourseDto,
  ): Promise<CourseStudent> {
    return this.courseStudentRepository.save(addStudentToCourseDto);
  }

  async removeStudent(registration: string): Promise<DeleteResult> {
    return this.courseStudentRepository.delete(registration);
  }

  async updatePrice(
    id: number,
    updatePriceCourseDto: UpdateCoursePriceDto,
  ): Promise<Course> {
    await this.courseRepository.update(id, updatePriceCourseDto);
    return this.courseRepository.findOneBy({ id });
  }

  async update(id: number, updateCourseDto: UpdateCourseDto): Promise<Course> {
    await this.courseRepository.update(id, updateCourseDto);
    return this.courseRepository.findOneBy({ id });
  }

  async finishCourse(id: number): Promise<Course> {
    await this.courseRepository.update(id, {
      hasExpired: true,
    });
    return this.courseRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.courseRepository.delete(id);
  }
}
