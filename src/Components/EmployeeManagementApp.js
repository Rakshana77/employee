
import React, { useEffect, useState } from 'react';
import EmployeeTable from './EmployeeTable.js';
import AddEmployee from './AddEmployee.js';
import { DeleteEmployeeById, GetAllEmployees } from '../api.js';
import { ToastContainer } from 'react-toastify';
import { notify } from '../utils';

const EmployeeManagementApp = () => {
    const [showModal, setShowModal] = useState(false);
    const [employeeObj, setEmployeeObj] = useState(null);
    const [employeesData, setEmployeesData] = useState({
        employees: [],
        pagination: {
            currentPage: 1,
            pageSize: 5,
            totalEmployees: 0,
            totalPages: 0
        }
    });

    const fetchEmployees = async (search = '', page = 1, limit = 5) => {
        try {
            const data = await GetAllEmployees(search, page, limit);
            setEmployeesData(data);
        } catch (err) {
            notify('Error fetching employees: ' + err.message, 'error');
        }
    };

    const handleDeleteEmployee = async (employeeId) => {
        try {
            await DeleteEmployeeById(employeeId);  // Call API to delete employee
            notify('Employee deleted successfully', 'success');
            fetchEmployees();  // Refresh the list after deletion
        } catch (error) {
            notify('Error deleting employee: ' + error.message, 'error');
        }
    };

    const handleSearch = (e) => {
        fetchEmployees(e.target.value);
    };

    const handleUpdateEmployee = (emp) => {
        setEmployeeObj(emp);
        setShowModal(true);
    };

    useEffect(() => {
        fetchEmployees();
    }, []);

    return (
        <div className='d-flex flex-column justify-content-center align-items-center w-100 p-3'>
            <h1>Employee Management App</h1>
            <div className='w-100 d-flex justify-content-center'>
                <div className='w-80 border bg-light p-3' style={{ width: '80%' }}>
                    <div className='d-flex justify-content-between mb-3'>
                        <button className='btn btn-primary' onClick={() => setShowModal(true)}>Add</button>
                        <input
                            onChange={handleSearch}
                            type="text"
                            placeholder="Search Employees..."
                            className='form-control w-50'
                        />
                    </div>
                    <EmployeeTable
                        employees={employeesData.employees}
                        pagination={employeesData.pagination}
                        fetchEmployees={fetchEmployees}
                        handleUpdateEmployee={handleUpdateEmployee}
                        handleDeleteEmployee={handleDeleteEmployee}  // Pass the delete function here
                    />

                    <AddEmployee
                        fetchEmployees={fetchEmployees}
                        showModal={showModal}
                        setShowModal={setShowModal}
                        employeeObj={employeeObj}
                    />
                </div>
            </div>
            <ToastContainer
                position='top-right'
                autoClose={3000}
                hideProgressBar={false}
            />
        </div>
    );
};

export default EmployeeManagementApp;
