import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FiPhone, FiAtSign } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

import { ThemeContext } from '../../contexts/ThemeContext';
import { socialsData } from '../../data/socialsData';
import { contactsData } from '../../data/contactsData';
import './Contacts.css';

function Contacts() {
    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        detailsIcon: {
            backgroundColor: theme.primary,
            color: theme.secondary,
            borderRadius: '50%',
            width: '45px',
            height: '45px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '23px',
            transition: '250ms ease-in-out',
            '&:hover': {
                transform: 'scale(1.1)',
                color: theme.secondary,
                backgroundColor: theme.tertiary,
            },
        },
        socialIcon: {
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '21px',
            backgroundColor: theme.primary,
            color: theme.secondary,
            transition: '250ms ease-in-out',
            margin: '0 10px', // Added margin for spacing between icons
            '&:hover': {
                transform: 'scale(1.1)',
                color: theme.secondary,
                backgroundColor: theme.tertiary,
            },
        },
    }));

    const classes = useStyles();

    return (
        <div
            className='contacts'
            id='contacts'
            style={{ backgroundColor: theme.secondary }}
        >
            <div className='contacts--container'>
                <h1 style={{ color: theme.primary }}>Contacts</h1>
                <div className='contacts-details'>
                    <a
                        href={`mailto:${contactsData.email}`}
                        className='personal-details'
                    >
                        <div className={classes.detailsIcon}>
                            <FiAtSign />
                        </div>
                        <p style={{ color: theme.tertiary }}>
                            {contactsData.email}
                        </p>
                    </a>
                    <a
                        href={`tel:${contactsData.phone}`}
                        className='personal-details'
                    >
                        <div className={classes.detailsIcon}>
                            <FiPhone />
                        </div>
                        <p style={{ color: theme.tertiary }}>
                            {contactsData.phone}
                        </p>
                    </a>
                    <div className='personal-details'>
                        <div className={classes.detailsIcon}>
                            <HiOutlineLocationMarker />
                        </div>
                        <p style={{ color: theme.tertiary }}>
                            {contactsData.address}
                        </p>
                    </div>
                    <div className='socialmedia-icons'>
                        {socialsData.github && (
                            <a
                                href={socialsData.github}
                                target='_blank'
                                rel='noreferrer'
                                className={classes.socialIcon}
                            >
                                <FaGithub aria-label='GitHub' />
                            </a>
                        )}
                        {socialsData.linkedIn && (
                            <a
                                href={socialsData.linkedIn}
                                target='_blank'
                                rel='noreferrer'
                                className={classes.socialIcon}
                            >
                                <FaLinkedinIn aria-label='LinkedIn' />
                            </a>
                        )}
                        {socialsData.instagram && (
                            <a
                                href={socialsData.instagram}
                                target='_blank'
                                rel='noreferrer'
                                className={classes.socialIcon}
                            >
                                <FaInstagram aria-label='Instagram' />
                            </a>
                        )}
                    </div>
                </div>
            </div>
            <img
                src={theme.contactsimg}
                alt='contacts'
                className='contacts--img'
            />
        </div>
    );
}

export default Contacts;
