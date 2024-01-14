import { Request, Response, NextFunction } from 'express';

import { myDataSource } from '../utils/db';
import { resumePayload } from '../payload';
import { Resume } from '../entity/resume/Resume';
import { createContact, updateContact } from './Contact';
import { createLanguage } from './Language';
import { createSkill } from './Skill';
import { createExperience } from './Experience';
import { createEducation } from './Education';
import { createCourse } from './Course';

export async function getResumeById(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { id } = req.params;

    const resumeRepository = myDataSource
      .getRepository(Resume)
      .createQueryBuilder('resume')
      .where(`resume.id = ${id}`)
      .leftJoinAndSelect('resume.contact', 'contact')
      .leftJoinAndSelect('resume.languages', 'languages')
      .leftJoinAndSelect('resume.skills', 'skills')
      .leftJoinAndSelect('resume.experiences', 'experiences')
      .leftJoinAndSelect('resume.educations', 'educations')
      .leftJoinAndSelect('resume.courses', 'courses');
      
    const result = await resumeRepository.getOne() ?? {};
    res.status(200).json(result);
    return next();
  } catch (e: any) {
    res.status(404).json();
    return next();
  }
}

export async function getAllResume(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const resumeRepository = myDataSource
      .getRepository(Resume)
      .createQueryBuilder('resume');
      
    const result = await resumeRepository.getMany() ?? [];
    res.status(200).json(result);
    return next();
  } catch (e: any) {
    res.status(404).json([]);
    return next();
  }
}

export async function createResume(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const {
      firstName,
      lastName,
      age,
      location,
      positionTitle,
      positionDescription,
      interests,
      contact,
      languages,
      skills,
      experiences,
      educations,
      courses,
    } = resumePayload;

    const resumeRepository = myDataSource
      .getRepository(Resume)
      .create({
        firstName,
        lastName,
        age,
        location,
        positionTitle,
        positionDescription,
        interests
      });

    const result = await resumeRepository.save();
    if (!result.id) {
      res.status(404).json({ message: "error" });
      return next();
    }

    await createContact({ ...contact, resumeId: result.id });
    languages.map(async (language) => await createLanguage({ ...language, resumeId: result.id }));
    skills.map(async (skill) => await createSkill({ ...skill, resumeId: result.id }));
    experiences.map(async (experience) => await createExperience({ ...experience, resumeId: result.id }));
    educations.map(async (education) => await createEducation({ ...education, resumeId: result.id }));
    courses.map(async (course) => await createCourse({ ...course, resumeId: result.id }));

    res.status(200).json(result);
    return next();
  } catch (e: any) {
    res.status(404).json();
    return next();
  }
}

export async function updateResume(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { id } = req.params;
    const {
      firstName,
      lastName,
      age,
      location,
      positionTitle,
      positionDescription,
      interests,
      contact,
      languages,
      skills,
      experiences,
      educations,
      courses,
    } = resumePayload;

    const resumeRepository = myDataSource.getRepository(Resume);
    const existingResume = await resumeRepository.findOne({ where: { id: +id } });
    if (!existingResume) {
      res.status(404).json({ message: 'Resume not found' });
      return next();
    }

    resumeRepository.merge(
      existingResume,
      { firstName, lastName, age, location, positionTitle, positionDescription, interests },
    );
      
    const result = await resumeRepository.save(existingResume);
    if (!result.id) {
      res.status(404).json({ message: "error" });
      return next();
    }

    await updateContact({ ...contact, resumeId: result.id });

    res.status(200).json();
    return next();
  } catch (e: any) {
    res.status(404).json([]);
    return next();
  }
}

export async function deleteResume(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { id } = req.params;
    const resumeRepository = myDataSource.getRepository(Resume);
    
    const resumeToDelete = await resumeRepository.findOne({ where: { id: +id } });
    if (!resumeToDelete) {
      res.status(404).json({ message: "Resume with such id does not exist" });
      return next();
    }

    await resumeRepository.softRemove(resumeToDelete);
    res.status(200).json({ message: 'Resume was deleted successfully' });
    return next();
  } catch (e: any) {
    res.status(404).json({ error: 'Resume not found' });
    return next();
  }
}
