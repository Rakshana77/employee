
import React from 'react';
import { Link } from 'react-router-dom';

function EmployeeTable({
    employees = [],
    pagination = { currentPage: 1, totalPages: 1 },
    fetchEmployees, 
    handleUpdateEmployee,
    handleDeleteEmployee  // Ensure this function is passed as a prop
}) {
    const headers = ['Name', 'Email', 'Phone', 'Department', 'Actions'];
    const { currentPage, totalPages } = pagination;

    const handlePagination = (page) => {
        fetchEmployees('', page, 5);  // Fetch employees for the specified page
    };

    const TableRow = ({ employee }) => (
        <tr>
            <td>
                <Link to={`/employee/${employee._id}`} className="text-decoration-none">
                    {employee.name}
                </Link>
            </td>
            <td>{employee.email}</td>
            <td>{employee.phone}</td>
            <td>{employee.department}</td>
            <td>
                <i
                    className='bi bi-pencil-fill text-warning me-4'
                    role="button"
                    title="Edit"
                    onClick={() => handleUpdateEmployee(employee)}
                ></i>
                <i
                    className='bi bi-trash-fill text-danger'
                    role="button"
                    title="Delete"
                    onClick={() => handleDeleteEmployee(employee._id)}  // Call handleDeleteEmployee with the employee ID
                ></i>
            </td>
        </tr>
    );

    return (
        <>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        {headers.map((header, i) => (
                            <th key={i}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(employees) && employees.length === 0 ? (
                        <tr><td colSpan={5}>Data Not Found</td></tr>
                    ) : (
                        employees.map(emp => <TableRow employee={emp} key={emp._id} />)
                    )}
                </tbody>
            </table>
            {/* Pagination controls */}
            <div className="d-flex justify-content-between">
                <button
                    className="btn btn-secondary"
                    onClick={() => handlePagination(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span> Page {currentPage} of {totalPages} </span>
                <button
                    className="btn btn-secondary"
                    onClick={() => handlePagination(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </>
    );
}

export default EmployeeTable;
