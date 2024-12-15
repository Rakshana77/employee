import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';



import EmployeeManagementApp from './Components/EmployeeManagementApp';
import EmployeeDetails from './Components/EmployeeDetails';
import Signup from './Components/Signup'
import Login from './Components/Login';
function App() {
;
		
  return (
    <div>
      <BrowserRouter>
         <div><Routes>
        
				
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/emp" element={<Navigate to="employee" />} />
          <Route path="/employee" element={<EmployeeManagementApp />} />
          <Route path="/employee/:id" element={<EmployeeDetails />} />
        </Routes>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
