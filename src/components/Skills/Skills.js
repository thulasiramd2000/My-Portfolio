import React, { useContext } from 'react';
import Marquee from "react-fast-marquee";
import './Skills.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { skillsData } from '../../data/skillsData';
import { skillsImage } from '../../utils/skillsImage';

function Skills() {
    const { theme } = useContext(ThemeContext);

    const skillBoxStyle = {
        backgroundColor: theme.secondary,
        boxShadow: `0px 0px 30px ${theme.primary30}`
    };

    const skillsList = {
        Frontend: "React.js, Redux, JavaScript, HTML5, CSS, DOM Manipulation, Reusable Component Libraries, Node.js, TypeScript, Jest, Cypress, ESLint",
        "APIs & Backend": "Python, FastAPI, Flask, Django, REST APIs, Pydantic, Swagger, Java, C/C++, SQL",
        "Data & Visualization": "Pandas, NumPy, Snowflake, Plotly, Matplotlib, Seaborn, Tableau, ETL/ELT, Data Pipelines, Data Modeling",
        "Cloud & Infrastructure": "AWS (S3, EC2, Lambda, SageMaker, Bedrock, Cognito), Docker, Kubernetes, OpenShift, CI/CD, Kafka, Airflow, Redis, Hazelcast",
        "AI / ML": "LangChain, RAG, GPT-4, LLaMA, BERT, T5, HuggingFace, PyTorch, TensorFlow, Scikit-Learn, Prompt Engineering, PEFT (LoRA/QLoRA), RLHF, MLflow, MLOps",
        "Monitoring & Performance": "Datadog, Kibana / ELK, Adobe Analytics, Lighthouse, Chrome DevTools, Grafana, Prometheus"
    };

    return (
        <div className="skills" style={{backgroundColor: theme.secondary}}>
            <div className="skillsHeader">
                <h2 style={{color: theme.primary}}>Skills</h2>
            </div>
            <div className="skillsContainer">
                <Marquee 
                    gradient={false} 
                    speed={80} 
                    pauseOnHover={false} // This line is modified to ensure continuous movement
                    pauseOnClick={true} 
                    delay={0}
                    play={true} 
                    direction="left"
                >
                    {skillsData.map((skill, id) => (
                        <div className="skill--box" key={id} style={skillBoxStyle}>
                            <img src={skillsImage(skill)} alt={skill} />
                            <h3 style={{color: theme.tertiary}}>
                                {skill}
                            </h3>
                        </div>
                    ))}
                </Marquee>
            </div>
            {/* Skills List Grid Section */}
            <div className="skillsListGrid">
                {Object.entries(skillsList).map(([category, skills], index) => (
                    <React.Fragment key={index}>
                        <div className="skillsCategory" style={{ color: theme.primary }}>
                            {category}:
                        </div>
                        <div className="skillsDetail" style={{ color: theme.tertiary }}>
                            {skills}
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default Skills;
