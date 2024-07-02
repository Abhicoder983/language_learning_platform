import React from 'react'
import Back from '../common/back/Back'
import CoursesCard from "./CoursesCard"
import OnlineCourses from "./OnlineCourses"
import Header from '../common/heading/Header'

const CourseHome = () => {
  return (
    <>
      <Header />
      <Back title='Explore Courses' />
      <CoursesCard />
      <OnlineCourses />
    </>
  )
}

export default CourseHome
