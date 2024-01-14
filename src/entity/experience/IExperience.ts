import { IResume } from "../resume/IResume";

export interface IExperience {
  id: number;
  companyName: string;
  companyPosition: string;
  companyStack: string;
  companyDescription: string;
  startDate: Date;
  endDate: Date;
  resumeId: number;

  resume?: IResume;
}
