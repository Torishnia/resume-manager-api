import { E_INSTITUTION_DEGREE } from "./enums/institutionDegree.enum";
import { E_LANGUAGE_LEVEL } from "./enums/languageLevel.enum";

export const resumePayload: ICreateResumePayload = {
  id: null,
  firstName: "VALERIIA",
  lastName: "TORISHNIA",
  age: 24,
  location: "Kyiv, Ukraine",
  positionTitle: "Junior Full-Stack Developer",
  positionDescription: "(Node.js + React.js)",
  interests: "Website development, design, traveling, personal development, reading books, yoga.",
  contact: {
    id: null,
    phone: "380954151768",
    email: "valeri.torishnya@gmail.com",
    linkedInURL: "linkedin.com/in/torishnia",
    telegramURL: "t.me/valeritor",
    gitHubURL: "github.com/Torishnia",
  },
  languages: [
    { id: null, name: "English", level: E_LANGUAGE_LEVEL.MIDDLE },
    { id: null, name: "Chinese", level: E_LANGUAGE_LEVEL.MIDDLE },
    { id: null, name: "Ukrainian", level: E_LANGUAGE_LEVEL.NATIVE },
  ],
  skills: [
    { id: null, name: "HTML5" },
    { id: null, name: "CSS3/ SCSS / SASS" },
    { id: null, name: "JavaScript / TS" },
    { id: null, name: "React.js / Redux" },
    { id: null, name: "Node.js" },
    { id: null, name: "TypeORM" },
    { id: null, name: "PostgreSQL" },
    { id: null, name: "MongoDB" },
    { id: null, name: "Git / GitHub" },
    { id: null, name: "Figma" },
  ],
  experiences: [
    {
      id: null,
      companyName: "JustThink AI",
      companyPosition: "Front-End Software Engineer",
      companyStack: "React.js, Redux",
      companyDescription: "Pet projects:",
      startDate: new Date("2023-06-01 14:19:46.822"),
      endDate: new Date("2023-10-01 14:19:46.822"),
    },
  ],
  educations: [
    {
      id: null,
      institutionName: "Borys Grinchenko Kyiv University, Kyiv",
      institutionDegree: E_INSTITUTION_DEGREE.BACHELOR,
      institutionFaculty: "Language and Literature (Chinese)",
      startDate: new Date("2017-09-01 14:19:46.822"),
      endDate: new Date("2021-07-01 14:19:46.822"),
    },
  ],
  courses: [
    {
      id: null,
      courseName: "Front-End Developer Internship",
      courseAuthor: "JustThink AI",
      courseResourse: "https://www.justthink.ai/",
      startDate: new Date("2023-06-01 14:19:46.822"),
      endDate: new Date("2023-08-01 14:19:46.822"),
    },
    {
      id: null,
      courseName: "React - The Complete Guide 2024 (incl. React Router & Redux)",
      courseAuthor: "Author: Maximilian Schwarzmuller",
      courseResourse: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
      startDate: new Date("2023-07-01 14:19:46.822"),
      endDate: new Date("2023-09-01 14:19:46.822"),
    },
  ],
}

export interface ICreateResumePayload {
  id: number | null;
  firstName: string;
  lastName: string;
  age: number;
  location: string;
  positionTitle: string;
  positionDescription?: string;
  interests?: string;
  contact: ICreateContactPayload;
  languages: ICreateLanguagePayload[] | null;
  skills: ICreateSkillPayload[] | null;
  experiences: ICreateExperiencePayload[] | null;
  educations: ICreateEducationPayload[] | null;
  courses: ICreateCoursePayload[] | null;
}

export interface ICreateContactPayload {
  id: number | null,
  phone: string;
  email: string;
  linkedInURL: string;
  telegramURL: string;
  gitHubURL: string;
}

export interface ICreateLanguagePayload {
  id: number | null;
  name: string;
  level: E_LANGUAGE_LEVEL;
}

export interface ICreateSkillPayload {
  id: number | null;
  name: string;
}

export interface ICreateExperiencePayload {
  id: number | null;
  companyName: string;
  companyPosition: string | null;
  companyStack: string | null;
  companyDescription: string | null;
  startDate: Date;
  endDate: Date;
}

export interface ICreateEducationPayload {
  id: number | null;
  institutionName: string;
  institutionDegree: E_INSTITUTION_DEGREE;
  institutionFaculty: string;
  startDate: Date;
  endDate: Date;
}

export interface ICreateCoursePayload {
  id: number | null;
  courseName: string;
  courseAuthor: string | null;
  courseResourse: string | null;
  startDate: Date;
  endDate: Date;
}
