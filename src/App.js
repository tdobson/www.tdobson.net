import React from 'react';
import { Route, Router, useLocation, useRoute } from 'wouter';
import { Container, Tabs, Tab } from '@mui/material';

import JamesPage from './pages/JamesPage';
import VisitingInfoPage from './pages/VisitingInfoPage';
import HouseholdStuffPage from './pages/HouseholdStuffPage';

function App() {
    const [location, setLocation] = useLocation();
    const [match] = useRoute("/:tab");

    const handleTabChange = (event, newTab) => {
        setLocation(newTab);
    };

    const getCurrentTab = () => {
        const tab = match ? match.params.tab : "/"; // Get the current tab from the URL
        return tab === "/" ? "/" : `/${tab}`; // Add a leading slash to the tab
    };

    return (
        <div className="App">
            <Container maxWidth="sm">
                <header>
                    <Tabs value={getCurrentTab()} onChange={handleTabChange}>
                        <Tab label="James" value="/" />
                        <Tab label="Visiting Info" value="/visiting-info" />
                        <Tab label="Household Stuff" value="/household-stuff" />
                    </Tabs>
                </header>
                <Router>
                    <Route path="/" component={JamesPage} />
                    <Route path="/visiting-info" component={VisitingInfoPage} />
                    <Route path="/household-stuff" component={HouseholdStuffPage} />
                </Router>
            </Container>
        </div>
    );
}

export default App;
