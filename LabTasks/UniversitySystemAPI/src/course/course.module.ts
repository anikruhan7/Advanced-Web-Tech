import { Module } from '@nestjs/common';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';

@Module({
  controllers: [CourseController],
  providers: [CourseService],
  exports: [CourseService] // Exported for Inter-Module DI
})
export class CourseModule {}