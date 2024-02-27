import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';
import { ThemeContext } from '../../contexts/ThemeContext';
import { AiOutlineFolder } from "react-icons/ai";
import './Achievement.css';

function AchievementCard({id, title, details, date, field, image, link}) {
    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        achievementCard: {
            backgroundColor: theme.primary30,
            "&:hover": {
                backgroundColor: theme.primary50,
            },
            textDecoration: 'none', // Remove underline from links
            color: 'inherit', // Inherit text color instead of default link color
        },
    }));

    const classes = useStyles();

    return (
        <Fade bottom>
            <a href={link} target="_blank" rel="noopener noreferrer" className={classes.achievementCard} style={{ textDecoration: 'none' }}>
                <div key={id} className="achievement-card">
                    <div className="achievecard-content">
                        <div className="achievecard-details1">
                            <h2 style={{ color: theme.tertiary }}>{title}</h2>
                            <p style={{ color: theme.tertiary80 }}>{details}</p>
                        </div>
                        <div className="achievecard-details2" style={{ color: theme.primary }}>
                            <h5>{date}</h5>
                            <div className="achievecard-field">
                                <AiOutlineFolder />
                                <h5>{field}</h5>
                            </div>
                        </div>
                    </div> 
                    <div className="achievecard-imgcontainer">
                        <img src={image} alt={title} />
                    </div>
                </div>
            </a>
        </Fade>
    );
}

export default AchievementCard;
