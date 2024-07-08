import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmployeeForm from './EmployeeForm';

function App() {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const saveData = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
  };

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={
            <>
              <EmployeeForm onSubmit={addEmployee} />
              <div className="save-button-container">
              <button onClick={saveData}>Save Data</button>
              </div>
            </>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
