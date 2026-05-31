import AWS from '../assets/png/AWS.png'
import irjet from '../assets/png/IRJET.png'
import udemy from '../assets/svg/achievements/udemy.svg'
import databricks from '../assets/svg/achievements/databricks.svg'
import micro1 from '../assets/svg/achievements/micro1.svg'

export const achievementData = {
    achievements: [
        {
            id: 1,
            title: 'AWS Certified Developer – Associate',
            details: 'Validates expertise in developing and maintaining AWS-based applications. Covers Lambda, DynamoDB, S3, SQS, SNS, Cognito, and Elastic Beanstalk. Valid through March 2027.',
            date: 'Mar 6, 2024',
            field: 'Cloud',
            image: AWS,
            link: 'https://www.credly.com/badges/d0be3813-2ac9-4621-a86b-ecd98d13d6d2/linked_in_profile',
        },
        {
            id: 2,
            title: 'LLM Engineering: Master AI & Large Language Models',
            details: 'Completed a 25.5-hour Udemy course by Ed Donner (Founder, Nebula.io) covering LLM architectures, fine-tuning, RAG systems, prompt engineering, and production deployment.',
            date: 'Dec 15, 2024',
            field: 'AI / LLMs',
            image: udemy,
            link: 'https://ude.my/UC-750b526b-043a-4430-86dd-e3354bdc8823',
        },
        {
            id: 3,
            title: 'Databricks Fundamentals Accreditation',
            details: 'Databricks Academy accreditation covering the Lakehouse architecture, Delta Lake, Apache Spark fundamentals, and data engineering workflows.',
            date: 'Dec 21, 2024',
            field: 'Data Engineering',
            image: databricks,
            link: 'https://credentials.databricks.com/f5397e5d-5db9-4d2a-a816-f3b200b13c39',
        },
        {
            id: 4,
            title: 'Micro1 — Top 1% Data Manipulation (Senior)',
            details: 'Ranked in the top 1% of all candidates through Micro1\'s AI-powered vetting process, demonstrating senior-level proficiency in Data Manipulation.',
            date: 'Nov 17, 2024',
            field: 'AI / Data',
            image: micro1,
            link: 'https://drive.google.com/file/d/1G969MRTRVAZJYAE3wp7flkne-tjmtJrL/view?usp=sharing',
        },
        {
            id: 5,
            title: 'IRJET Journal Publication',
            details: 'Published a research paper in the International Research Journal of Engineering and Technology (IRJET), Volume 8, Issue 5. Impact factor 7.8.',
            date: 'May 20, 2021',
            field: 'Research',
            image: irjet,
            link: 'https://drive.google.com/file/d/1kk564whB_weX4355xHIIdgYEA5jDD799/view?usp=drive_link',
        },
    ]
}
