import { IExcludeTimestamps } from "../../interfaces";
import { IContact } from "../contact/IContact";
import { ILanguage } from "../language/ILanguage";
import { ISkill } from "../skill/ISkill";

export interface IResume extends IExcludeTimestamps {
  id: number | null;
  firstName: string;
  lastName: string;
  age: number;
  location: string;
  positionTitle: string;
  positionDescription: string | null;
  interests: string | null;

  contact?: IContact; 
  languages?: ILanguage[];
  skills?: ISkill[];
}
