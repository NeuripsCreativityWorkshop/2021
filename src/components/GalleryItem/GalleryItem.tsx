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
            >
                <p className={styles.imageOverlayTitle}>{item.Title}</p>
                <p className={styles.imageOverlayAuthor}>{item.Author}</p>
            </div>
            <img src={item.Thumbnail} className={styles.imageThumbnail} />
        </div>
    );
};

export default GalleryItem;
