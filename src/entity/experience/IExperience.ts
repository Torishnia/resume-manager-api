import { IExcludeTimestamps } from "../../interfaces";
import { IResume } from "../resume/IResume";

export interface IExperience extends IExcludeTimestamps {
  id: number | null;
  companyName: string;
  companyPosition: string | null;
  companyStack: string | null;
  companyDescription: string | null;
  startDate: Date;
  endDate: Date;
  resumeId: number;

  resume?: IResume;
}
