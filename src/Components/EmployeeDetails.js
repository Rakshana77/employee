import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GetEmployeeDetailsById } from '../api';

const EmployeeDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [employee, setEmployee] = useState(null);

    // Wrapping fetchEmployeeDetails with useCallback and including 'id' as a dependency
    const fetchEmployeeDetails = useCallback(async () => {
        try {
            const response = await GetEmployeeDetailsById(id); // Fetch employee details by ID
            const data = await response.json();
            setEmployee(data);
        } catch (error) {
            console.error('Error fetching employee details:', error);
        }
    }, [id]); // 'id' should be included in the dependency array

    // Using useEffect to call fetchEmployeeDetails when component mounts or id changes
    useEffect(() => {
        fetchEmployeeDetails(); // Fetch employee details when component mounts
    }, [fetchEmployeeDetails]); // The effect will re-run when fetchEmployeeDetails changes

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-header">
                    <h2>Employee Details</h2>
                </div>
                <div className="card-body">
                    {employee ? (
                        <div className="row mb-3">
                            <div className="col-md-3">
                                <img
                                    src={employee.profileImage}
                                    alt={employee.name}
                                    className="img-fluid rounded"
                                />
                            </div>
                            <div className="col-md-9">
                                <h4>{employee.name}</h4>
                                <p><strong>Email:</strong> {employee.email}</p>
                                <p><strong>Phone:</strong> {employee.phone}</p>
                                <p><strong>Department:</strong> {employee.department}</p>
                                <p><strong>Salary:</strong> {employee.salary}</p>
                            </div>
                        </div>
                    ) : (
                        <p>Loading employee details...</p>
                    )}
                    <button className="btn btn-primary" onClick={() => navigate('/employee')}>
                        Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EmployeeDetails;
