require("dotenv").config();
import "reflect-metadata";
import { DataSource } from "typeorm";

import { Resume } from "../entity/resume/Resume";
import { Contact } from "../entity/contact/Contact";
import { Language } from "../entity/language/Language";
import { Skill } from "../entity/skill/Skill";
import { Experience } from "../entity/experience/Experience";
import { Education } from "../entity/education/Education";
import { Course } from "../entity/course/Course";

export const myDataSource = new DataSource({
  type: 'postgres',
  port: 5432,
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [
    Resume,
    Contact,
    Language,
    Skill,
    Experience,
    Education,
    Course,
  ],
  logging: true,
  synchronize: true, // Turn on just only dev environment.
});
