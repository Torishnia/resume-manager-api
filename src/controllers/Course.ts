import { myDataSource } from '../utils/db';
import { ICourse } from '../entity/course/ICourse';
import { Course } from '../entity/course/Course';

export async function createCourse(course: ICourse): Promise<void> {
  const { courseName, courseAuthor, courseResourse, startDate, endDate, resumeId } = course;

  const courseRepository = myDataSource
    .getRepository(Course)
    .create({
      courseName,
      courseAuthor,
      courseResourse,
      startDate,
      endDate,
      resumeId,
    });

  const result = await courseRepository.save();
  if (!result.id) {
    throw new Error('error with create course');
  }
}

export async function updateCourse(course: ICourse): Promise<void> {
  const { courseName, courseAuthor, courseResourse, startDate, endDate, resumeId } = course;
  // TODO. Need create logic for update course.
}