import React from 'react';
import { Link, Route, Router, useLocation } from 'wouter';
import { Container, Tabs, Tab } from '@mui/material';

import JamesPage from './pages/JamesPage';
import VisitingInfoPage from './pages/VisitingInfoPage';
import HouseholdStuffPage from './pages/HouseholdStuffPage';

function App() {
    const [location, setLocation] = useLocation(); // Get the current location and a setter function

    const handleTabChange = (event, newLocation) => {
        setLocation(newLocation); // Update the location when a tab is clicked
    };

    return (
        <div className="App">
            <Container maxWidth="sm">
                <header>
                    <Tabs value={location}>
                        <Tab label="James" value="/" component={Link} to="/" onClick={handleTabChange} />
                        <Tab label="Visiting Info" value="/visiting-info" component={Link} to="/visiting-info" onClick={handleTabChange} />
                        <Tab label="Household Stuff" value="/household-stuff" component={Link} to="/household-stuff" onClick={handleTabChange} />
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
