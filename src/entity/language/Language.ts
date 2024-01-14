import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import { ILanguage } from "./ILanguage";
import { Resume } from "../resume/Resume";
import { IResume } from "../resume/IResume";
import { E_LANGUAGE_LEVEL } from "../../enums/languageLevel.enum";

@Entity({ schema: 'public', name: 'Language' })
export class Language extends BaseEntity implements ILanguage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 64 })
  name: string;

  @Column({ type: 'enum', enum: E_LANGUAGE_LEVEL, default: E_LANGUAGE_LEVEL.BAD })
  level: E_LANGUAGE_LEVEL;

  @Column()
  resumeId: number;

  @ManyToOne(() => Resume, resume => resume.languages)
  resume: IResume;
}
