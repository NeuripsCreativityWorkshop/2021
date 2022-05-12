import { Container } from '@mui/material';
import React from 'react';
import styles from './Footer.module.scss';

interface Props {
    children: React.ReactNode;
}

const Footer = ({ children }: Props): JSX.Element => {
    return (
        <div className={styles.bgStyle}>
            <Container maxWidth="sm">{children}</Container>
        </div>
    );
};

export default Footer;
