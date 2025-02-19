import React from "react";
import { Link, Outlet } from "react-router-dom";

const TeacherFirstPage = () => {
  return (
    <div>
      <h1>Top Teachers</h1>
      <Link to="/teacher/raka/users">sorry baby youre amazing</Link>
      <Outlet />
    </div>
  );
};

export default TeacherFirstPage;
