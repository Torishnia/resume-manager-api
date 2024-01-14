import { myDataSource } from '../utils/db';
import { IExperience } from '../entity/experience/IExperience';
import { Experience } from '../entity/experience/Experience';

export async function createExperience(experience: IExperience): Promise<void> {
  const { companyName, companyPosition, companyDescription, companyStack, startDate, endDate, resumeId } = experience;

  const experienceRepository = myDataSource
    .getRepository(Experience)
    .create({
      companyName,
      companyPosition,
      companyStack,
      companyDescription,
      startDate,
      endDate,
      resumeId,
    });

  const result = await experienceRepository.save();
  if (!result.id) {
    throw new Error('error with create experience');
  }
}
