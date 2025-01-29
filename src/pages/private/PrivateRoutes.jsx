import React from 'react'
import HolidayListUpload from '../../components/holiday/HolidayListUpload'
import { Route,Routes } from 'react-router-dom'
function PrivateRoutes() {
    return (
      <Routes>
        <Route path="holiday" element={<HolidayListUpload />} />
        {/* Add more routes for /user namespace as needed */}
      </Routes>
    );
  }
export default PrivateRoutes
