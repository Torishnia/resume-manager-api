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

import { IExperience } from "./IExperience";
import { Resume } from "../resume/Resume";
import { IResume } from "../resume/IResume";

@Entity({ schema: 'public', name: 'Experience' })
export class Experience extends BaseEntity implements IExperience {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 64 })
  companyName: string;

  @Column({ length: 128, nullable: true })
  companyPosition: string;

  @Column({ length: 128, nullable: true })
  companyStack: string;

  @Column({ length: 500, nullable: true })
  companyDescription: string;

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

  @ManyToOne(() => Resume, resume => resume.experiences)
  resume: IResume;
}
