import { E_LANGUAGE_LEVEL } from "../../enums/languageLevel.enum";
import { IResume } from "../resume/IResume";

export interface ILanguage {
  id: number;
  name: string;
  level: E_LANGUAGE_LEVEL;
  resumeId: number;

  resume?: IResume;
}
