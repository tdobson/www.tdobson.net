import React from 'react';
import { Link, Route, Router, useLocation } from 'wouter';
import { Container, Tabs, Tab } from '@mui/material';

import JamesPage from './pages/JamesPage';
import VisitingInfoPage from './pages/VisitingInfoPage';
import HouseholdStuffPage from './pages/HouseholdStuffPage';
import GalleryPage from './pages/GalleryPage';


function App() {
    const [location, setLocation] = useLocation();

    const handleTabChange = (event, newTab) => {
        setLocation(newTab);
    };

    return (
        <div className="App">
            <Container maxWidth="sm">
                <header>
                    <Tabs value={location} onChange={handleTabChange}>
                        <Tab label="James" value="/" component={Link} to="/" />
                        <Tab label="Photos" value="/photos" component={Link} to="/photos" />
                        <Tab label="Visiting Info" value="/visiting-info" component={Link} to="/visiting-info" />
                        <Tab label="Household Stuff" value="/household-stuff" component={Link} to="/household-stuff" />
                    </Tabs>
                </header>
                <Router>
                    <Route path="/" component={JamesPage} />
                    <Route path="/photos" component={GalleryPage} />

                    <Route path="/visiting-info" component={VisitingInfoPage} />
                    <Route path="/household-stuff" component={HouseholdStuffPage} />

                </Router>
            </Container>
        </div>
    );
}

export default App;
