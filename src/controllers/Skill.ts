import { myDataSource } from '../utils/db';
import { ISkill } from '../entity/skill/ISkill';
import { Skill } from '../entity/skill/Skill';

export async function createSkill(skill: ISkill): Promise<void> {
  const { name, resumeId } = skill;

  const skillRepository = myDataSource
    .getRepository(Skill)
    .create({ name, resumeId });

  const result = await skillRepository.save();
  if (!result.id) {
    throw new Error('error with create skill');
  }
}
