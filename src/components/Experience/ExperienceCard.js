import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeContext } from '../../contexts/ThemeContext';
import './Experience.css';

function ExperienceCard({ id, company, jobtitle, startYear, endYear, jobDescription, logo }) {
    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles(() => ({
        experienceCard: {
            backgroundColor: theme.primary30,
            "&:hover": {
                backgroundColor: theme.primary50,
            },
        },
    }));

    const classes = useStyles();

    return (
        <Fade bottom>
            <div className={`experience-card ${classes.experienceCard}`}>
                <div className="expcard-img" style={{ backgroundColor: theme.primary }}>
                    <img src={logo} alt={`${company} Logo`} style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
                <div className="experience-details">
                    <h5 className="expcard-company" style={{ color: theme.tertiary80 }}>{company}</h5>
                    <h4 className="expcard-jobtitle" style={{ color: theme.tertiary }}>{jobtitle}</h4>
                    <h6 className="expcard-duration" style={{ color: theme.primary }}>{startYear} – {endYear}</h6>
                    {jobDescription.map((point, index) => (
                        <p key={index} className="expcard-point" style={{ color: theme.tertiary80 }}>{point}</p>
                    ))}
                </div>
            </div>
        </Fade>
    );
}

export default ExperienceCard;
