import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Navbar.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Teacher from "./pages/Teacher";
import Course from "./pages/Course";
import Navbar from "./Navbar";
import NewYork from "./pages/NewYork";
import Ok from "./pages/ok";
import ProgrammeStructure from "./pages/ProgrammeStructure";
import AssessmentCriterion from "./pages/AssessmentCriterion";
import OtherInformation from "./pages/OtherInformation";
import CoreCourses from "./pages/CoreCourses";
import CoreCourseCard from "./pages/CoreCourseCard";
import DomainCourse from "./pages/DomainCourse";
import SkillCourse from "./pages/SkillCourse";
import DomainCourseCard from "./pages/DomainCourseCard";
import SkillCourseCard from "./pages/SkillCourseCard";

const AppRouter = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    const root = document.documentElement;
    if (isDarkMode) {
      root.style.setProperty("--primary-bg", "#fff");
      root.style.setProperty("--primary-text", "#333");
      root.style.setProperty("--secondary-bg", "#007bff");
      root.style.setProperty("--secondary-text", "#fff");
      root.style.setProperty("--border-color", "#ccc");
    } else {
      root.style.setProperty("--primary-bg", "#333");
      root.style.setProperty("--primary-text", "#fff");
      root.style.setProperty("--secondary-bg", "#555");
      root.style.setProperty("--secondary-text", "#007bff");
      root.style.setProperty("--border-color", "#555");
    }
  };

  return (
    <Router>
      <Navbar onDarkModeToggle={toggleDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/teacher">
          <Route index element={<Teacher />} />
          <Route path="raka" element={<NewYork />}></Route>
          <Route path="/teacher/raka/users" element={<Ok />} />
        </Route>

        <Route path="/course">
          <Route index element={<Course />} />
          <Route
            path="/course/ProgrammeStructure"
            element={<ProgrammeStructure />}
          />
          <Route
            path="/course/AssessmentCriterion"
            element={<AssessmentCriterion />}
          />
          <Route
            path="/course/OtherInformation"
            element={<OtherInformation />}
          />
          <Route path="/course/core-course" element={<CoreCourses />} />
          <Route
            path="/course/core-course/course-card"
            element={<CoreCourseCard />}
          />
          <Route
            path="/course/domain-course"
            element={<DomainCourse/>}
          />
          <Route
            path="/course/domain-course/domain-card"
            element={<DomainCourseCard/>}
          />
        <Route
            path="/course/skill-course"
            element={<SkillCourse/>}
          />
          <Route
            path="/course/skill-course/skill-card"
            element={<SkillCourseCard/>}
          />

         

        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
