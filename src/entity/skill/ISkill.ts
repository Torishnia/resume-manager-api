import { IResume } from "../resume/IResume";

export interface ISkill {
  id: number;
  name: string;
  resumeId: number;
 
  resume?: IResume;
}
