import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import { ICourse } from "./ICourse";
import { Resume } from "../resume/Resume";
import { IResume } from "../resume/IResume";

@Entity({ schema: 'public', name: 'Course' })
export class Course extends BaseEntity implements ICourse {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 128 })
  courseName: string;
  
  @Column({ length: 128 })
  courseStack: string;

  @Column({ length: 128 })
  courseResourse: string;

  @Column({ default: () => "CURRENT_TIMESTAMP" })
  courseDate: Date;

  @Column()
  resumeId: number;

  @ManyToOne(() => Resume, resume => resume.experiences)
  resume: IResume;
}
