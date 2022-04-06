import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import ContactsPage from './pages/ContactsPage';
import Layout from './components/Layout/Layout';


function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route 
          path="/" 
          element={<LoginPage />} />
          <Route 
          path="/contacts" 
          element={<ContactsPage />} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
