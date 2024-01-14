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

import { ICourse } from "./ICourse";
import { Resume } from "../resume/Resume";
import { IResume } from "../resume/IResume";

@Entity({ schema: 'public', name: 'Course' })
export class Course extends BaseEntity implements ICourse {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 128 })
  courseName: string;
  
  @Column({ length: 128, nullable: true })
  courseAuthor: string;

  @Column({ length: 128, nullable: true })
  courseResourse: string;

  @Column({ default: () => "CURRENT_TIMESTAMP" })
  courseDate: Date;

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
