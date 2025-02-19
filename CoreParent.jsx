import React from 'react'
import CoreCourses from './CoreCourses'
import './pages/courseData.json'
const CoreParent = () => {
    return (
      <div className="course-list">
        {courseData.map((course, index) => (
          <CoreCourses key={index} title={course.title} linkTo={course.linkTo} />
        ))}
      </div>
    );
  };

export default CoreParent
