import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import { IExperience } from "./IExperience";
import { Resume } from "../resume/Resume";
import { IResume } from "../resume/IResume";

@Entity({ schema: 'public', name: 'Experience' })
export class Experience extends BaseEntity implements IExperience {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 64 })
  companyName: string;

  @Column({ length: 128 })
  companyPosition: string;

  @Column({ length: 128 })
  companyStack: string;

  @Column({ length: 500 })
  companyDescription: string;

  @Column({ default: () => "CURRENT_TIMESTAMP" })
  startDate: Date;

  @Column({ default: () => "CURRENT_TIMESTAMP" })
  endDate: Date;

  @Column()
  resumeId: number;

  @ManyToOne(() => Resume, resume => resume.experiences)
  resume: IResume;
}
