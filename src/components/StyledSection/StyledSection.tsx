import { Container } from '@mui/material';
import React from 'react';
import styles from './StyledSection.module.scss';

interface Props {
    title?: string;
    children?: React.ReactNode;
}

const StyledSection = ({ title, children }: Props): JSX.Element => {
    // Render a subcomponent here
    return (
        <div className={styles.sectionStyle}>
            <Container maxWidth="sm">
                {title && <h3 className={styles.title}>{title}</h3>}
                {children}
            </Container>
        </div>
    );
};

export default StyledSection;
