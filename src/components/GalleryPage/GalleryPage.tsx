import { Container, Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import GalleryModal from '../GalleryModal/GalleryModal';
import { GalleryItems as GalleryItems } from './GalleryData';
import styles from './GalleryPage.module.scss';
import { GalleryItemObject } from './GalleryPage.types';

const FEATURED_ARTWORK_IDS = [14, 33, 50, 86];

const GalleryPage = (): JSX.Element => {
    const [isItemOpened, setIsItemOpened] = useState(false);
    const [openItemed, setOpenedItem] = useState<GalleryItemObject>();

    useEffect(() => {
        // set scroll position to top
        window.scrollTo(0, 0);
    }, []);

    const onCloseItem = () => {
        setIsItemOpened(false);
    };

    const onOpenItem = (item: GalleryItemObject) => {
        setIsItemOpened(true);
        setOpenedItem(item);
    };

    const featuredItems = GalleryItems.filter((item) =>
        FEATURED_ARTWORK_IDS.includes(item.ID),
    ).map((item) => {
        return (
            <Grid item xs={12} md={6} key={item.ID}>
                <GalleryItem item={item} size="lg" onClick={onOpenItem} />
            </Grid>
        );
    });

    const allItems = GalleryItems.filter(
        (item) => !FEATURED_ARTWORK_IDS.includes(item.ID),
    ).map((item) => {
        return (
            <Grid item xs={6} md={4} key={item.ID}>
                <GalleryItem item={item} size="sm" onClick={onOpenItem} />
            </Grid>
        );
    });

    return (
        <div className={styles.background}>
            <GalleryModal
                item={openItemed}
                isOpen={isItemOpened}
                onClose={onCloseItem}
            ></GalleryModal>
            <Container maxWidth="xl" className={styles.container}>
                <h1 className={styles.title}>
                    Machine Learning for Creativity and Design
                </h1>
                <h3 className={styles.subtitle}>2021 Art Gallery</h3>
                <p className={styles.subsubtitle}>
                    Showcased at the{' '}
                    <a href="/2021/#/">
                        NeurIPS Workshop on Machine Learning for Creativity and
                        Design
                    </a>
                    .
                </p>
                <h3 className={styles.heading}>Spotlights</h3>
                <Grid container spacing={4} className={styles.gridFeatured}>
                    {featuredItems}
                </Grid>
                <h3 className={styles.heading}>All Artworks</h3>
                <Grid container spacing={3} className={styles.gridAll}>
                    {allItems}
                </Grid>
            </Container>
        </div>
    );
};

export default GalleryPage;
