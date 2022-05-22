import React from 'react';
import { GalleryItemObject } from '../GalleryPage/GalleryPage.types';
import styles from './GalleryItem.module.scss';

interface Props {
    item: GalleryItemObject;
    size?: 'sm' | 'lg';
    onClick?: (item: GalleryItemObject) => void;
}

const MAX_TITLE_CHAR_LEN = 60;
const MAX_AUTHOR_CHAR_LEN = 140;

const truncateText = (text: string, maxLen: number) =>
    text.length <= maxLen ? text : text.substring(0, maxLen) + '...';

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
                <p className={styles.imageOverlayTitle}>
                    {truncateText(item.Title, MAX_TITLE_CHAR_LEN)}
                </p>
                <p className={styles.imageOverlayAuthor}>
                    {truncateText(item.Author, MAX_AUTHOR_CHAR_LEN)}
                </p>
            </div>
            <img src={item.Images.at(0)} className={styles.imageThumbnail} />
        </div>
    );
};

export default GalleryItem;
