# Getting Started with Create React App

# Employee Management App

A full-stack Employee Management Application that allows users to manage employee data. Built using React.js for the frontend and Node.js with Express for the backend, this app enables users to view, add, update, and delete employee records, stored in a MongoDB database.

## Features

Employee List: View employees' details such as name, email, phone, and department.
Search: Search for employees by name.
Pagination: Navigate through employees' pages for easier browsing.
Add Employee: Add new employees to the system.
Edit Employee: Update the details of existing employees.
Delete Employee: Remove employees from the list.
Notifications: Get notifications on actions (like adding or deleting employees) using React Toastify.
Technologies Used
Frontend:
React.js: A JavaScript library for building user interfaces.
React-Bootstrap: UI components for quick and responsive design.
React Router (optional): For navigating between pages (if used).
React Toastify: For showing notifications to the user.
Axios: To make HTTP requests to the backend API.
Backend:
Node.js: JavaScript runtime for building the server-side logic.
Express.js: Web framework for creating the API.
MongoDB: NoSQL database for storing employee data.
Mongoose: ODM (Object Data Modeling) library to interact with MongoDB.
Development Tools:
Babel: JavaScript compiler to use modern ES6+ features.
Webpack: Module bundler for frontend assets.
npm: Node package manager to manage project dependencies.

### Setup Instructions

1. Clone the Repository
   bash
   Copy code
   git clone https://github.com/Rakshana77/EmployeeManagementApp.git
   cd EmployeeManagementApp
2. Install Backend Dependencies
   Navigate to the backend directory:

bash
Copy code
cd backend
npm install 3. Install Frontend Dependencies
Navigate to the frontend directory:

bash
Copy code
cd frontend
npm install 4. Configure MongoDB
Create a .env file in the backend directory and add the MongoDB connection string:

env
Copy code
MONGODB_URI=your_mongodb_connection_string
PORT=5000
If you're using MongoDB Atlas, get your connection string from the Atlas Dashboard.

5. Start the Application
   In the backend directory, run:

bash
Copy code
npm start
In a separate terminal window, navigate to the frontend directory and run:

bash
Copy code
npm start
The app will be available on:

Frontend: http://localhost:3000
Backend: http://localhost:5000
API Endpoints
GET /api/employees: Fetch all employee records (supports pagination).
POST /api/employees: Add a new employee.
PUT /api/employees/:id: Update an existing employee.
DELETE /api/employees/:id: Delete an employee by ID.
Contributing
Feel free to fork this project and submit pull requests for any improvements, bug fixes, or feature requests.

License
This project is licensed under the MIT License.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
