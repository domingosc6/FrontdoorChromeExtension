import SummaryList from "./Summary/SummaryList";
import Summary from "./Summary/Summary";
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

export default function Index() {
    return (
        <Router>
            <nav>
                <Link to="/summaries">All Summaries</Link>
                <Link to="/summary/:id">Summary</Link>
            </nav>
            <Routes>
                <Route path="/summaries" element={<SummaryList />} />
                <Route path="/summary/:id" element={<Summary />} />
            </Routes>
        </Router>
    )
}