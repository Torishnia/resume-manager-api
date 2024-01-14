import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { IEducation } from "./IEducation";
import { Resume } from "../resume/Resume";
import { IResume } from "../resume/IResume";
import { E_INSTITUTION_DEGREE } from "../../enums/institutionDegree.enum";

@Entity({ schema: 'public', name: 'Education' })
export class Education extends BaseEntity implements IEducation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 128 })
  institutionName: string;

  @Column({ type: "enum", enum: E_INSTITUTION_DEGREE, default: E_INSTITUTION_DEGREE.BACHELOR })
  institutionDegree: string;
  
  @Column({ length: 128 })
  institutionFaculty: string;

  @Column({ default: () => "CURRENT_TIMESTAMP" })
  startDate: Date;

  @Column({ default: () => "CURRENT_TIMESTAMP" })
  endDate: Date;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @DeleteDateColumn({ type: "timestamp", nullable: true })
  deletedAt: Date;

  @Column()
  resumeId: number;

  @ManyToOne(() => Resume, resume => resume.educations)
  resume: IResume;
}
