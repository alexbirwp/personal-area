import Login from './pages/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ContactsPage from './pages/ContactsPage';
import Layout from './components/Layout/Layout';


function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
