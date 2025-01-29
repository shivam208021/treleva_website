import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './pages/public/Login';
import SideNavigation from './pages/public/SideNavigation';
import HolidayListUpload from './components/holiday/HolidayListUpload';
import AuthService from './services/authService';
import PrivateRoutes from './pages/private/PrivateRoutes';
function App() {
  const isAuthenticated = AuthService.isAuthenticated();

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Private routes with SideNavigation */}
        <Route
          path="/user/*"
          element={
            isAuthenticated ? (
              <SideNavigation />
            ) : (
              <Navigate to="/login" />
            )
          }
        >
          <Route index element={<PrivateRoutes />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;