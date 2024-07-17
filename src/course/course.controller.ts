import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { UpdateCoursePriceDto } from './dto/update-price.dto';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.courseService.create(createCourseDto);
  }

  @Get()
  findAll() {
    return this.courseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courseService.findOne(+id);
  }

  @Patch(':id')
  updatePrice(
    @Param('id') id: string,
    @Body() updatePriceCourseDto: UpdateCoursePriceDto,
  ) {
    return this.courseService.updatePrice(+id, updatePriceCourseDto);
  }

  @Patch(':id/finish')
  finishCourse(@Param('id') id: string) {
    return this.courseService.finishCourse(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.courseService.update(+id, updateCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseService.remove(+id);
  }

  @Post(':courseId/student/:studentId')
  addStudentToCourse(
    @Param('courseId') courseId: number,
    @Param('studentId') studentId: number,
  ) {
    return this.courseService.addStudent({
      courseId: +courseId,
      studentId: +studentId,
    });
  }

  @Delete(':courseId/student/:registration')
  @HttpCode(204)
  removeStudentToCourse(@Param('registration') registration: string) {
    return this.courseService.removeStudent(registration);
  }
}
