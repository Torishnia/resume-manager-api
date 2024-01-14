import { Request, Response, NextFunction } from 'express';

import { myDataSource } from '../utils/db';

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

export function createResume(req: Request, res: Response, next: NextFunction): void {
  try {

    res.status(200).json();
    next();
  } catch (e: any) {
    res.status(404).json([]);
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
