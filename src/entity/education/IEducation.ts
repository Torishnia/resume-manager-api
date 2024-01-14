import { IExcludeTimestamps } from "../../interfaces";
import { IResume } from "../resume/IResume";

export interface IEducation extends IExcludeTimestamps {
  id: number | null;
  institutionName: string;
  institutionDegree: string;
  institutionFaculty: string;
  startDate: Date;
  endDate: Date;
  resumeId: number;

  resume?: IResume;
}
