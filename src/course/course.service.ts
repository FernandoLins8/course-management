import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './entities/course.entity';
import { UpdateCourseDto } from './dto/update-course.dto';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCoursePriceDto } from './dto/update-price.dto';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private courseRepository: Repository<Course>,
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
