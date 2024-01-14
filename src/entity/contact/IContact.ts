import { IExcludeTimestamps } from "../../interfaces";
import { IResume } from "../resume/IResume";

export interface IContact extends IExcludeTimestamps {
  id: number | null;
  phone: string | null;
  email: string | null;
  linkedInURL: string | null;
  telegramURL: string | null;
  gitHubURL: string | null;
  resumeId: number;

  resume?: IResume;
}
