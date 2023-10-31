import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import LectureSchedule from '../pages/lecture/Schedule';
import LectureClass from '../pages/lecture/ClassSchedule';
import StudentSchedule from '../pages/student/Schedule';
import ReportAttendance from '../pages/student/ReportAttendance';
import LectureLayout from '../layout/LectureLayout';
import StudentLayout from '../layout/StudentLayout';
import CourseAttendance from '../pages/student/CourseAttendance';

export const routes = [
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/schedule',
    element: <LectureSchedule />,
    role: 'lecture',
  },
  {
    path: '/schedule/class',
    element: <LectureClass />,
    role: 'lecture',
  },
  {
    path: '/student/schedule',
    element: <StudentSchedule />,
  },
  {
    path: '/student/report-attendance',
    element: <ReportAttendance />,
  },
  {
    path: '/student/course-attendance',
    element: <CourseAttendance />,
  },
];

const Router = () => {
  return (
    <Suspense>
      <Routes>
        {routes.map(({ path, element, role }) =>
          path === '/login' ? (
            <Route key={path} path={path} element={element} exact />
          ) : (
            <Route
              key={path}
              path={path}
              element={
                role === 'lecture' ? <LectureLayout /> : <StudentLayout />
              }
            >
              <Route path={path} element={element} exact />
            </Route>
          )
        )}
      </Routes>
    </Suspense>
  );
};

export default Router;
