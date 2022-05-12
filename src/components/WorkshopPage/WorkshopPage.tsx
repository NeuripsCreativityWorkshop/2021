import React from 'react';
import styles from './WorkshopPage.module.scss';
import StyledSection from '../StyledSection/StyledSection';
import Title from '../Title/Title';
import Image from '../Image/Image';
import corona from '../../assets/images/corona.png';
import { content } from '../../pagecontent/content';
import Footer from '../Footer/Footer';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconButton } from '@mui/material';

export const WorkshopPage = (): JSX.Element => {
    return (
        <>
            <div className={styles.container}>
                <Title title={content.title} subTitles={content.subtitles} />
                <StyledSection>
                    <Image src={corona} caption={content.imageCaption1} />
                </StyledSection>
                <StyledSection>
                    <IconButton href={'https://twitter.com/ML4CDworkshop'}>
                        <TwitterIcon color="primary"></TwitterIcon>
                    </IconButton>
                    <IconButton
                        href={
                            'http://www.facebook.com/sharer/sharer.php?u=https://neuripscreativityworkshop.github.io/2021'
                        }
                    >
                        <FacebookIcon color="primary"></FacebookIcon>
                    </IconButton>
                    <IconButton
                        href={
                            'http://www.linkedin.com/shareArticle?url=https://neuripscreativityworkshop.github.io/2021&title=NeurIPS 2021 Workshop on Machine Learning for Creativity and Design&source='
                        }
                    >
                        <LinkedInIcon color="primary"></LinkedInIcon>
                    </IconButton>
                </StyledSection>
                <StyledSection title={content.section1.title}>
                    {content.section1.body}
                </StyledSection>
                <StyledSection title={content.section2.title}>
                    {content.section2.body}
                </StyledSection>
                <StyledSection title={content.section3.title}>
                    {content.section3.body}
                </StyledSection>
                <StyledSection title={content.section4.title}>
                    {content.section4.body}
                </StyledSection>
                <StyledSection title={content.section5.title}>
                    {content.section5.body}
                </StyledSection>
                <StyledSection title={content.section6.title}>
                    {content.section6.body}
                </StyledSection>
                <StyledSection title={content.section7.title}>
                    {content.section7.body}
                </StyledSection>
                <StyledSection title={content.section8.title}>
                    {content.section8.body}
                </StyledSection>
                <StyledSection title={content.section9.title}>
                    {content.section9.body}
                </StyledSection>
                <StyledSection title={content.section10.title}>
                    {content.section10.body}
                </StyledSection>
                <StyledSection title={content.section11.title}>
                    {content.section11.body}
                </StyledSection>
                <Footer>{content.footer}</Footer>
            </div>
        </>
    );
};
