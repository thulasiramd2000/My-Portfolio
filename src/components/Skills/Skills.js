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

    // Skills list object
    const skillsList = {
        Languages: "C, C++, Java, JavaScript, SQL, Python, HTML, CSS",
        Frameworks: "Spring Boot, React, NodeJS, J2EE",
        "Tools & Technologies": "Git, JUnit, Visual Studio, REST API, Kubernetes, Eclipse, DevOps, Jenkins, Docker",
        "Databases & Cloud Services": "MySQL, PostgreSQL, MongoDB, AWS, Azure",
        Subjects: "Data Structures & Algorithms, Object Oriented Programming, NLP"
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
