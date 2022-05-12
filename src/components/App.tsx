import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { WorkshopPage } from './WorkshopPage/WorkshopPage';
import styles from './App.module.scss';
import { Route, Switch } from 'react-router-dom';
import GalleryPage from './GalleryPage/GalleryPage';

const App = (): JSX.Element => {
    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 700,
                md: 1000,
                lg: 1200,
                xl: 1536,
            },
        },
    });

    return (
        <div className={styles.appContainer}>
            <ThemeProvider theme={theme}>
                <Switch>
                    <Route exact path="/">
                        <WorkshopPage />
                    </Route>
                    <Route path="/gallery">
                        <GalleryPage />
                    </Route>
                </Switch>
            </ThemeProvider>
        </div>
    );
};

export default App;
