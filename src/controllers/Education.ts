import { myDataSource } from '../utils/db';
import { IEducation } from '../entity/education/IEducation';
import { Education } from '../entity/education/Education';

export async function createEducation(education: IEducation): Promise<void> {
  const { institutionName, institutionDegree, institutionFaculty, startDate, endDate, resumeId } = education;

  const educationRepository = myDataSource
    .getRepository(Education)
    .create({
      institutionName,
      institutionDegree,
      institutionFaculty,
      startDate,
      endDate,
      resumeId,
    });

  const result = await educationRepository.save();
  if (!result.id) {
    throw new Error('error with create education');
  }
}
