import { IResume } from "../resume/IResume";

export interface IEducation {
  id: number | null;
  institutionName: string;
  institutionDegree: string;
  institutionFaculty: string;
  startDate: Date;
  endDate: Date;
  resumeId: number;

  resume?: IResume;
}
