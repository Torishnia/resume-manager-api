import { IResume } from "../resume/IResume";

export interface ICourse {
  id: number;
  courseName: string;
  courseStack: string;
  courseResourse: string;
  courseDate: Date
  resumeId: number;

  resume?: IResume;
}
  