import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/layout'; // Import your Layout component
import Information from './components/quotes/request-information';
import Dashboard from './components/dashboard';



function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/information" element={<Information />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
