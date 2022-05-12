import React from 'react';
import { GalleryItemObject } from '../GalleryPage/GalleryPage.types';
import styles from './GalleryItem.module.scss';

interface Props {
    item: GalleryItemObject;
    size?: 'sm' | 'lg';
    onClick?: (item: GalleryItemObject) => void;
}

const GalleryItem = ({ item, size, onClick }: Props): JSX.Element => {
    return (
        <div className={styles.galleryItem}>
            <div
                className={styles.imageOverlay}
                role="button"
                onClick={() => {
                    onClick(item);
                }}
            ></div>
            <img src={item.Images[0]} className={styles.imageThumbnail} />
        </div>
    );
};

export default GalleryItem;
