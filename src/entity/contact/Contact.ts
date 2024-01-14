import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import { IContact } from "./IContact";
import { Resume } from "../resume/Resume";
import { IResume } from "../resume/IResume";

@Entity({ schema: 'public', name: 'Contact' })
export class Contact extends BaseEntity implements IContact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 12 })
  phone: string;

  @Column({ length: 64 })
  email: string;

  @Column({ length: 128 })
  linkedInURL: string;

  @Column({ length: 128 })
  telegramURL: string;

  @Column({ length: 128 })
  gitHubURL: string;

  @OneToOne(() => Resume, { "cascade": true, nullable: false })
  @JoinColumn({ name: "resumeId" })
  resume: IResume;
}
