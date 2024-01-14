import { IContact } from "../contact/IContact";
import { ILanguage } from "../language/ILanguage";
import { ISkill } from "../skill/ISkill";

export interface IResume {
  id: number | null;
  firstName: string;
  lastName: string;
  age: number;
  location: string;
  positionTitle: string;
  positionDescription: string;
  interests: string;

  contact?: IContact; 
  languages?: ILanguage[];
  skills?: ISkill[];
}
