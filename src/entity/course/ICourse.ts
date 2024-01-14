import { IResume } from "../resume/IResume";

export interface ICourse {
  id: number | null;
  courseName: string;
  courseAuthor: string | null;
  courseResourse: string | null;
  courseDate: Date
  resumeId: number;

  resume?: IResume;
}
  