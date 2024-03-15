import { IExcludeTimestamps } from "../../interfaces";
import { IResume } from "../resume/IResume";

export interface ICourse extends IExcludeTimestamps {
  id: number | null;
  courseName: string;
  courseAuthor: string | null;
  courseResourse: string | null;
  startDate: Date;
  endDate: Date;
  resumeId: number;

  resume?: IResume;
}
  