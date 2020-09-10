import React from 'react'
import DishSelector from '../containers/DishSelector'

const CourseList = ({ courses }) => {
  if (courses == null)
    return <div>Meal Type not selected</div>

  return (
    <div>
      {courses.map(course =>
        <DishSelector key={course} course={course} />)}
    </div>
  )

}

export default CourseList;
