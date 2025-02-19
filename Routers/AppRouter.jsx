import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../styles/Navbar.css";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Teacher from "../pages/Teacher";
import Course from "../pages/Course";
import Navbar from "./Navbar";
import NewYork from "../pages/NewYork";
import Ok from "../pages/ok";
import ProgrammeStructure from "../coursecard/programmeStructure/ProgrammeStructure";
import AssessmentCriterion from "../coursecard/assessmentCriterion/AssessmentCriterion";
import OtherInformation from "../coursecard/OtherInformation/OtherInformation";
import CoreCourses from "../coursecard/CoreCourses/CoreCourses";
import CoreCourseCard from "../coursecard/CoreCourses/CoreCourseCard/CoreCourseCard";
import DomainCourses from "../coursecard/domain/DomainCourses";
import DomainCourseCard from "../coursecard/domain/domainCard/DomainCourseCard";
import SkillCourses from "../coursecard/skillCourse/SkillCourses";
import SkillCourseCard from "../coursecard/skillCourse/skillCard/SkillCourseCard";
import AdvancedApplication from "../coursecard/CoreCourses/AdvanceApp/AdvancedApplication";
import Description from "../coursecard/CoreCourses/AdvanceApp/description/Description";
import AdvanceWebProgramming from "../coursecard/CoreCourses/AdvanceWebProgrammings/AdvanceWebProgramming";
import DescriptionAwp from "../coursecard/CoreCourses/AdvanceWebProgrammings/description/DescriptionAwp";
import AdvancedAlgebra from "../coursecard/CoreCourses/AdvancedAlgebras/AdvancedAlgebra";
import DescriptionAa from "../coursecard/CoreCourses/AdvancedAlgebras/description/DescriptionAa";
import AdvancedAnalysis from "../coursecard/CoreCourses/AdvancedAnalysiss/AdvancedAnalysis";
import DescriptionAnalysis from "../coursecard/CoreCourses/AdvancedAnalysiss/description/DescriptionAnalysis";
import AdvancedAquaculture from "../coursecard/CoreCourses/AdvancedAquacultures/AdvancedAquaculture";
import DescriptionAqua from "../coursecard/CoreCourses/AdvancedAquacultures/description/DescriptionAqua";
import AdvancedHematology from "../coursecard/CoreCourses/AdvancedHematologies/AdvancedHematology";
import DescriptionHema from "../coursecard/CoreCourses/AdvancedHematologies/description/DescriptionHema";
import AdvancedMetrology from "../coursecard/CoreCourses/AdvancedMetrologies/AdvancedMetrology";
import DescriptionMetro from "../coursecard/CoreCourses/AdvancedMetrologies/description/DescriptionMetro";
import AdvancedPropulsionn from "../coursecard/CoreCourses/AdvancedPropulsionn/AdvancedPropulsion";
import DescriptionPro from "../coursecard/CoreCourses/AdvancedPropulsionn/description/DescriptionPro";
import Aerodynamic from "../coursecard/CoreCourses/Aerodynamics/Aerodynamic";
import DescriptionAero from "../coursecard/CoreCourses/Aerodynamics/description/DescriptionAero";

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
          <Route path="raka" element={<NewYork />}>
            <Route path="/teacher/raka/users" element={<Ok />} />
          </Route>
        </Route>

        <Route path="/course">
          <Route index element={<Course />} />

          {/*Programm structure */}

          <Route
            path="/course/ProgrammeStructure"
            element={<ProgrammeStructure />}
          />

          {/*AssessmentCriterion */}

          <Route
            path="/course/AssessmentCriterion"
            element={<AssessmentCriterion />}
          />

          {/*OtherInformation */}

          <Route
            path="/course/OtherInformation"
            element={<OtherInformation />}
          />

          {/*core-course */}

          <Route path="/course/core-course" element={<CoreCourses />} />
          <Route
            path="/course/core-course/course-card"
            element={<CoreCourseCard />}
          />
          {/*<AdvancedApplication*/}
          <Route
            path="/course/core-course/Advanced-Application"
            element={<AdvancedApplication />}
          >
            <Route
              path="/course/core-course/Advanced-Application/description"
              element={<Description />}
            ></Route>
          </Route>

          {/*<AdvanceWebProgramming*/}

          <Route
            path="/course/core-course/Advance-web-Programming"
            element={<AdvanceWebProgramming />}
          >
            <Route
              path="/course/core-course/Advance-web-Programming/description"
              element={<DescriptionAwp />}
            ></Route>
          </Route>

          {/*AdvancedAlgebra */}

          <Route
            path="/course/core-course/Advanced-algebra/description"
            element={<AdvancedAlgebra />}
          >
            <Route
              path="/course/core-course/Advanced-algebra/description"
              element={<DescriptionAa />}
            />
          </Route>

          {/*AdvancedAnalysis */}

          <Route
            path="/course/core-course/Advanced-Analysis/description"
            element={<AdvancedAnalysis />}
          >
            <Route
              path="/course/core-course/Advanced-Analysis/description"
              element={<DescriptionAnalysis />}
            />
          </Route>

          {/*AdvancedAqua */}

          <Route
            path="/course/core-course/Advanced-Aquaculture/description"
            element={<AdvancedAquaculture />}
          >
            <Route
              path="/course/core-course/Advanced-Aquaculture/description"
              element={<DescriptionAqua />}
            />
          </Route>

          {/*AdvancedHematology*/}

          <Route
            path="/course/core-course/Advanced-Hematology/description"
            element={<AdvancedHematology />}
          >
            <Route
              path="/course/core-course/Advanced-Hematology/description"
              element={<DescriptionHema />}
            />
          </Route>

          {/*AdvancedMetrology*/}

          <Route
            path="/course/core-course/Advanced-Metrology/description"
            element={<AdvancedMetrology />}
          >
            <Route
              path="/course/core-course/Advanced-Metrology/description"
              element={<DescriptionMetro />}
            />
          </Route>

          {/*AdvancedPropulsionn*/}
          <Route
            path="/course/core-course/Advanced-Propulsionn/description"
            element={<AdvancedPropulsionn />}
          >
            <Route
              path="/course/core-course/Advanced-Propulsionn/description"
              element={<DescriptionPro />}
            />
          </Route>

          {/*Aerodynamic*/}

          <Route
            path="/course/core-course/Aerodynamic/description"
            element={<Aerodynamic />}
          >
            <Route
              path="/course/core-course/Aerodynamic/description"
              element={<DescriptionAero />}
            />
          </Route>

          {/*domain-course */}

          <Route path="/course/domain-course" element={<DomainCourses />} />
          <Route
            path="/course/domain-course/domain-card"
            element={<DomainCourseCard />}
          />
          {/*skill-course */}

          <Route path="/course/skill-course" element={<SkillCourses />} />
          <Route
            path="/course/skill-course/skill-card"
            element={<SkillCourseCard />}
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
