import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import ContactsPage from './pages/ContactsPage';
import Layout from './components/Layout/Layout';


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="*" element={<Navigate to={'/'} ></Navigate>} />
          <Route 
          path="/" 
          element={<LoginPage />} />
          <Route 
          path="/contacts" 
          element={<ContactsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
