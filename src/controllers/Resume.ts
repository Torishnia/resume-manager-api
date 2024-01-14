import { Request, Response, NextFunction } from 'express';

import { myDataSource } from '../utils/db';
import { resumePayload } from '../payload';
import { Resume } from '../entity/resume/Resume';
import { createContact } from './Contact';
import { createLanguage } from './Language';
import { createSkill } from './Skill';
import { createExperience } from './Experience';
import { createEducation } from './Education';
import { createCourse } from './Course';

export async function getResumeById(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {

    res.status(200).json();
    next();
  } catch (e: any) {
    res.status(404).json([]);
  }
}

export async function getAllResume(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {

    res.status(200).json();
    next();
  } catch (e: any) {
    res.status(404).json([]);
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
      next();
    }

    createContact({ ...contact, resumeId: result.id });
    languages.map((language) => createLanguage({ ...language, resumeId: result.id }));
    skills.map((skill) => createSkill({ ...skill, resumeId: result.id }));
    experiences.map((experience) => createExperience({ ...experience, resumeId: result.id }));
    educations.map((education) => createEducation({ ...education, resumeId: result.id }));
    courses.map((course) => createCourse({ ...course, resumeId: result.id }));

    res.status(200).json(result);
    next();
  } catch (e: any) {
    res.status(404).json();
  }
}

export function updateResume(req: Request, res: Response, next: NextFunction): void {
  try {

    res.status(200).json();
    next();
  } catch (e: any) {
    res.status(404).json([]);
  }
}

export function deleteResume(req: Request, res: Response, next: NextFunction): void {
  try {

    res.status(200).json();
    next();
  } catch (e: any) {
    res.status(404).json([]);
  }
}
