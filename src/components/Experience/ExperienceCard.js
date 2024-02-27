import React from 'react';
import Fade from 'react-reveal/Fade';

// Assuming you've already defined and imported your useStyles hook from Material-UI and ThemeContext for theming
import { makeStyles } from '@material-ui/core/styles';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import './Experience.css'; // Ensure your CSS file is correctly located and imported

// Component function accepting props
function ExperienceCard({ id, company, jobtitle, startYear, endYear, jobDescription, logo }) {
    const { theme } = useContext(ThemeContext); // Using context to access the theme

    const useStyles = makeStyles(() => ({
        experienceCard: {
            backgroundColor: theme.primary30,
            "&:hover": {
                backgroundColor: theme.primary50,
            },
        },
        // Define additional styles as needed
    }));

    const classes = useStyles(); // Using the custom styles

    return (
        <Fade bottom> {/* Animation wrapper for a nice effect */}
            <div className={`experience-card ${classes.experienceCard}`}>
                <div className="expcard-img" style={{ backgroundColor: theme.primary }}>
                    <img src={logo} alt={`${company} Logo`} style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
                <div className="experience-details">
                    <h5 style={{ color: theme.tertiary80, fontSize: "32px" }}>{company}</h5>
                    <h4 style={{ color: theme.tertiary, fontSize: "32px" }}>{jobtitle}</h4>
                    <h6 style={{ color: theme.primary, fontSize: "32px" }}>{startYear} - {endYear}</h6>
                    {jobDescription.map((point, index) => (
                        <p key={index} style={{ color: '#000', fontSize: "28px" }}>{point}</p> // Iterating over jobDescription array to list each point
                    ))}
                </div>
            </div>
        </Fade>
    );
}

export default ExperienceCard;
