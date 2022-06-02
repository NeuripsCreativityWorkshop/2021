import { Box, Container, Modal, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/CloseSharp';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { GalleryItemObject } from '../GalleryPage/GalleryPage.types';
import styles from './GalleryModal.module.scss';
import ReactReadMoreReadLess from 'react-read-more-read-less';

interface Props {
    item: GalleryItemObject;
    isOpen: boolean;
    onClose: () => void;
}

const GalleryModal = ({ item, isOpen, onClose }: Props): JSX.Element => {
    if (!item) {
        return <></>;
    }

    return (
        <>
            <Modal
                open={isOpen}
                onClose={onClose}
                aria-labelledby={item.Title}
                aria-describedby={item.Description}
            >
                <Box className={styles.modal}>
                    <IconButton
                        size="small"
                        className={styles.closeButton}
                        onClick={onClose}
                    >
                        <CloseIcon className={styles.closeButton} />
                    </IconButton>
                    <Container maxWidth="md" className={styles.container}>
                        <h2 className={styles.title}>{item.Title}</h2>
                        <h3 className={styles.subtitle}>
                            {item.Author}, {item.Year}
                        </h3>
                        <div className={styles.description}>
                            <ReactReadMoreReadLess
                                charLimit={400}
                                readMoreText={'Read more ▼'}
                                readLessText={'Read less ▲'}
                                readMoreClassName={styles.readMoreButton}
                                readLessClassName={styles.readLessButton}
                            >
                                {item.Description}
                            </ReactReadMoreReadLess>
                        </div>
                        <br />
                        {item.Videos.map((videoUrl) => {
                            return (
                                <video
                                    key={item.ID}
                                    controls
                                    autoPlay
                                    poster={item.Thumbnail}
                                    src={videoUrl}
                                />
                            );
                        })}

                        {item.Images.length ? (
                            <h3 className={styles.carouselTitle}>Slideshow</h3>
                        ) : (
                            <></>
                        )}
                        <div className={styles.carousel}>
                            <Carousel
                                fullHeightHover={false} // We want the nav buttons wrapper to only be as big as the button element is
                                navButtonsProps={{
                                    style: {
                                        backgroundColor: 'transparent',
                                        borderRadius: 0,
                                    },
                                }}
                                autoPlay={true}
                                interval={3000}
                                navButtonsAlwaysVisible
                                activeIndicatorIconButtonProps={{
                                    style: {
                                        color: 'white',
                                        opacity: 0.8,
                                    },
                                }}
                                indicatorIconButtonProps={{
                                    style: {
                                        padding: '2px',
                                        color: 'white',
                                        opacity: 0.3,
                                    },
                                }}
                            >
                                {item.Images.map((imageUrl) => {
                                    return (
                                        <a
                                            key={imageUrl}
                                            href={imageUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <img
                                                key={imageUrl}
                                                src={imageUrl}
                                                className={styles.image}
                                            />
                                        </a>
                                    );
                                })}
                            </Carousel>
                        </div>
                    </Container>
                </Box>
            </Modal>
        </>
    );
};

export default GalleryModal;
