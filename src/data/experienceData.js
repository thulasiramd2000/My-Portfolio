// experienceData.js
import logo from "../assets/svg/experience/accenture.svg"
import logo2 from "../assets/svg/experience/xcel.svg"

export const experienceData = [
    {
        id: 1,
        jobtitle: 'Associate Software Engineer',
        company: 'Accenture Solutions',
        startYear: '2021',
        endYear: '2022',
        logo: logo,

        

        jobDescription: [
            '•	Collaborated with a team of full stack engineers in a Spring Boot project to enhance banking transaction system, achieving 25% faster processing and improved reliability.',
            ' •	Contributed to the development and comprehensive testing of a RESTful API using Spring Boot, successfully optimizing performance to achieve an outstanding response time of 400 milliseconds.',
            '•	Associated with a team of experienced DevOps engineers, utilizing automated testing and CI/CD tools to streamline complex pipelines, resulting in a 33% reduction in complexity and enhancing version control automation to the client server.',
            '•	Developed containerized microservices for a banking app on Azure with Docker and Kubernetes, cutting server provisioning by 50%',
            '•	Successfully optimized database operations in the banking CRM systems by integrating MySQL and NoSQL technologies, achieving a 25% improvement in response times for large data sets'
        ]
    },
    {
        id: 2,
        company: 'XCEL Corp',
        jobtitle: 'Android Application Developer (Intern)',
        startYear: 'June 2019',
        endYear: 'November 2019',
        logo: logo2,
        jobDescription: [
            '•	Utilized Java to write scalable and maintainable code, contributing to backend development that ensured a 40% reduction in data synchronization times between the mobile app and the server',
            '•	Applied advanced algorithms and data structures to enhance the app’s search functionality, achieving a 35% quicker search result retrieval, significantly saving time for users looking for specific customer data and sales histories',
            '•	Involved in the UI/UX design and layout of 15 APK’s and handled backend servers; upscaled authorization effectiveness by 20% and reduced latency issues by 50%',
            '•	Improved Android Web View performance by 90% using glide libraries for better image scaling and caching'
        ]
    }
    // Add more experiences as needed
];
