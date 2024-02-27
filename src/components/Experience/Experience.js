import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { experienceData } from '../../data/experienceData';
import ExperienceCard from './ExperienceCard';
import './Experience.css';

function Experience() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="experience" id="experience" style={{ backgroundColor: theme.secondary }}> 
            <div className="experience-body">
                {/* Removed the image div */}
                <div className="experience-description">
                    <h1 style={{ color: theme.primary }}>Experience</h1>
                    {experienceData.map(exp => (
                        <ExperienceCard 
                            key={exp.id}
                            id={exp.id}
                            logo={exp.logo}
                            jobtitle={exp.jobtitle}
                            company={exp.company}
                            startYear={exp.startYear}
                            endYear={exp.endYear}
                            jobDescription={exp.jobDescription} // Ensure this prop is accepted and displayed by ExperienceCard
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Experience;
