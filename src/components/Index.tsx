import SummaryList from "./Summary/SummaryList";

import AddNewButton from './AddNewButton';
import { MemoryRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { Button, ButtonGroup } from '@mui/material';
import Summary from "./Summary/Summary";

export default function Index() {
    return (
        <Router>
            <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 10, mb: 2, ml: 1}} component={Link} to="/summaries">All Summaries</Button>
            <Routes>
                <Route path ="/">
                    
                </Route>
                <Route path="/summaries" element={<SummaryList />} />
                <Route path="/summary/:id" element={<Summary/>} />
            </Routes>
        </Router>
    )
}