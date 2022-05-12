import { Container } from '@mui/material';
import React from 'react';
import styles from './Title.module.scss';

interface Props {
    title: string;
    subTitles: string[];
}

const Title = ({ title, subTitles }: Props): JSX.Element => {
    const subtitles = subTitles.map((subtitle: string, index: number) => {
        return (
            <h3 key={`subtitle_${index}`} className={styles.subtitleStyle}>
                {subtitle}
            </h3>
        );
    });

    // Render a subcomponent here
    return (
        <div className={styles.container}>
            <Container maxWidth="sm">
                <h2 className={styles.titleStyle}>{title}</h2>
                {subtitles}
            </Container>
        </div>
    );
};

export default Title;
