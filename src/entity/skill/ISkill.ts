import { IExcludeTimestamps } from "../../interfaces";
import { IResume } from "../resume/IResume";

export interface ISkill extends IExcludeTimestamps {
  id: number | null;
  name: string;
  resumeId: number;
 
  resume?: IResume;
}
