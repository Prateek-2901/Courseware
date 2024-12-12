# Courseware
A web-based platform built using React.js and Spring Boot to manage and organize course materials. The system allows students to view and access course details, including syllabus, videos, and teacher information. Admins can manage course and teacher data with Role-Based Access Control (RBAC) to ensure secure and efficient management
Courseware Management System
A fully functional Courseware Management System developed using React.js for the frontend and Spring Boot for the backend. This system is designed to help manage and organize course materials such as course syllabi, teacher information, and videos. It provides separate interfaces for students and administrators with role-based access control for secure and efficient data management.

Features:
Student View:

Students can view courses, syllabus, videos, and teacher information.
Access all the relevant details required for their learning journey.
Admin Panel:

Admins can securely manage course details, syllabus, videos, and teacher information.
Admins can add, modify, or delete courses and related materials.
Role-Based Access Control (RBAC):

Students and admins have different access levels to ensure that only authorized users can perform sensitive actions (e.g., editing course details).
Modern UI:

A clean, responsive, and user-friendly interface built using React.js.
The frontend design is optimized for both desktop and mobile devices.
Secure System:

Uses Spring Boot to handle backend logic and securely manage data.
Authentication and authorization features are built in for system security.
Technologies Used:
Frontend: React.js, CSS (for styling)
Backend: Spring Boot (Java), JPA (Java Persistence API), H2 Database (or any database of choice)
Security: JWT (JSON Web Tokens) for authentication and RBAC for role management
Installation:
1. Clone the Repository:
bash
Copy code
git clone https://github.com/Prateek-2901/Courseware-Management-System.git
2. Set up the Backend:
Navigate to the backend folder:
bash
Copy code
cd backend
Build and run the Spring Boot application:
bash
Copy code
mvn spring-boot:run
The backend will run on http://localhost:8080.
3. Set up the Frontend:
Navigate to the frontend folder:
bash
Copy code
cd frontend
Install the dependencies:
bash
Copy code
npm install
Start the React app:
bash
Copy code
npm start
The frontend will be available at http://localhost:3000.
4. Access the Application:
Open your browser and visit http://localhost:3000 to access the Courseware Management System.
Contribution:
Feel free to contribute by forking the repository and submitting pull requests. Issues and feature requests are always welcome.

License:
This project is licensed under the MIT License - see the LICENSE file for details.

