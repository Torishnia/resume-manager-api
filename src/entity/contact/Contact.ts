import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { IContact } from "./IContact";
import { Resume } from "../resume/Resume";
import { IResume } from "../resume/IResume";

@Entity({ schema: 'public', name: 'Contact' })
export class Contact extends BaseEntity implements IContact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 12, nullable: true })
  phone: string;

  @Column({ length: 64, nullable: true })
  email: string;

  @Column({ length: 128, nullable: true })
  linkedInURL: string;

  @Column({ length: 128, nullable: true })
  telegramURL: string;

  @Column({ length: 128, nullable: true })
  gitHubURL: string;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @DeleteDateColumn({ type: "timestamp", nullable: true })
  deletedAt: Date;

  @Column({ nullable: false })
  resumeId: number;

  @OneToOne(() => Resume, resume => resume.contact, { nullable: false })
  @JoinColumn({ name: 'resumeId' })
  resume: IResume;
}
