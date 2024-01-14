import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import { ISkill } from "./ISkill";
import { Resume } from "../resume/Resume";
import { IResume } from "../resume/IResume";

@Entity({ schema: 'public', name: 'Skill' })
export class Skill extends BaseEntity implements ISkill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 64 })
  name: string;

  @Column()
  resumeId: number;

  @ManyToOne(() => Resume, resume => resume.skills)
  resume: IResume;
}
