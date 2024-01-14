import { myDataSource } from '../utils/db';
import { ICourse } from '../entity/course/ICourse';
import { Course } from '../entity/course/Course';

export async function createCourse(course: ICourse): Promise<void> {
  const { courseName, courseAuthor, courseResourse, courseDate, resumeId } = course;

  const courseRepository = myDataSource
    .getRepository(Course)
    .create({
      courseName,
      courseAuthor,
      courseResourse,
      courseDate,
      resumeId,
    });

  const result = await courseRepository.save();
  if (!result.id) {
    throw new Error('error with create course');
  }
}

export async function updateCourse(course: ICourse): Promise<void> {
  const { courseName, courseAuthor, courseResourse, courseDate, resumeId } = course;
  // TODO. Need create logic for update course.
}