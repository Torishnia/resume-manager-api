import { IResume } from "../resume/IResume";

export interface ISkill {
  id: number | null;
  name: string;
  resumeId: number;
 
  resume?: IResume;
}
