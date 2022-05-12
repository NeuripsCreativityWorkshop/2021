import React from 'react';
import styles from './Image.module.scss';

interface Props {
    src: string;
    caption?: string | React.ReactNode;
}

const Image = ({ src, caption }: Props): JSX.Element => {
    // Render a subcomponent here
    return (
        <>
            <div>
                <img src={src} className={styles.image} />
            </div>
            <div className={styles.caption}>{caption}</div>
        </>
    );
};

export default Image;
