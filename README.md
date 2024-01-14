# RESUME-API
*You can start RESUME-API project on your local machine or use RESUME-API on vercel.*

### 1. Init RESUME-API project on local machine. (Skip if you use online)
1. Run *git clone* https://github.com/Torishnia/resume-manager-api.git in terminal
2. Run *"cd ./resume-manager-api"* in terminal
3. Run *"npm install"* in terminal
4. Run *"npm run dev"* in terminal

### 2. Init RESUME-API project on vercel. (Skip if you use local)
1. Open [postman](https://www.postman.com/) application.
2. Copy vercel [enpoint](https://resume-manager-api-git-main-torishnia.vercel.app)
3. Use endpoint in Postman.

### 3. Routes for using.

1. Get all resumes.
  - method = "GET"
  - url = "https://resume-manager-api-git-main-torishnia.vercel.app/resumes"
---

2. Get resume by id.
  - method = "GET"
  - url = "https://resume-manager-api-git-main-torishnia.vercel.app/resumes/:id"
---

3. Create resume by payload.
  - method = "POST"
  - url = "https://resume-manager-api-git-main-torishnia.vercel.app/resumes/create"

```
const payload = {
  "id": null,
  "firstName": "VALERIIA",
  "lastName": "TORISHNIA",
  "age": "24",
  "location": "Kyiv, Ukraine",
  "positionTitle": "Junior Full-Stack Developer",
  "positionDescription": "(Node.js + React.js)",
  "interests": "Some text",
  "contact": {
    "id": null,
    "phone": "380954151768",
    "email": "valeri.torishnya@gmail.com",
    "linkedInURL": "linkedin.com/in/torishnia",
    "telegramURL": "t.me/valeritor",
    "gitHubURL": "github.com/Torishnia"
  },
  "languages": [
    {
      "id": null,
      "name": "English",
      "level": "MIDDLE"
    }
  ],
  "skills": [
    {
      "id": null,
      "name": "Skill 1"
    }
  ],
  "experiences": [
    {
      "id": null,
      "companyName": "Company Name",
      "companyPosition": "Company Position",
      "companyStack": "Company Stack",
      "companyDescription": "Company Description",
      "startDate": "2020-01-01 00:00:00.000",
      "endDate": "2024-01-01 00:00:00.000"
    }
  ],
  "educations": [
    {
      "id": null,
      "institutionName": "Institution Name",
      "institutionDegree": "BACHELOR",
      "institutionFaculty": "Institution Faculty",
      "startDate": "2015-01-01 00:00:00.000",
      "endDate": "2020-01-01 00:00:00.000"
    }
  ],
  "courses": [
    {
      "id": null,
      "courseName": "Course Name",
      "courseAuthor": "Course Author",
      "courseResourse": "Course Resourse",
      "courseDate": "2024-01-01 00:00:00.000"
    }
  ]
}
```
---

4. Update resume by payload.
  - method = "PATCH"
  - url = "https://resume-manager-api-git-main-torishnia.vercel.app/resumes/:id"
  ```
  const payload = {
    // the same structure as in Create method
  }
  ```
  ---

5. Delete resume by id.
  - method = "DELETE"
  - url = "https://resume-manager-api-git-main-torishnia.vercel.app/resumes/:id"
  ---




