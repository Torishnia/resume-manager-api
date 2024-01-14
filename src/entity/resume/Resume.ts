import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";

import { IResume } from "./IResume";
import { Contact } from "../contact/Contact";
import { IContact } from "../contact/IContact";
import { Language } from "../language/Language";
import { ILanguage } from "../language/ILanguage";
import { Skill } from "../skill/Skill";
import { ISkill } from "../skill/ISkill";
import { IExperience } from "../experience/IExperience";
import { Experience } from "../experience/Experience";
import { IEducation } from "../education/IEducation";
import { Education } from "../education/Education";
import { Course } from "../course/Course";
import { ICourse } from "../course/ICourse";

@Entity({ schema: 'public', name: 'Resume' })
export class Resume extends BaseEntity implements IResume {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 64 })
  firstName: string;

  @Column({ length: 64 })
  lastName: string;

  @Column()
  age: number;

  @Column({ length: 128 })
  location: string;

  @Column({ length: 128 })
  positionTitle: string;

  @Column({ length: 128, nullable: true })
  positionDescription: string;

  @Column({ length: 500, nullable: true })
  interests: string;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @DeleteDateColumn({ type: "timestamp", nullable: true })
  deletedAt: Date;

  @OneToOne(() => Contact, { "cascade": true })
  contact: IContact;

  @OneToMany(() => Language, language => language.resume)
  languages: ILanguage[];

  @OneToMany(() => Skill, skill => skill.resume)
  skills: ISkill[];

  @OneToMany(() => Experience, experience => experience.resume)
  experiences: IExperience[];
  
  @OneToMany(() => Education, education => education.resume)
  educations: IEducation[];

  @OneToMany(() => Course, course => course.resume)
  courses: ICourse[];
}
