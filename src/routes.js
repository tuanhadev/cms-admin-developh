import React from 'react';
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Managers = React.lazy(() => import('./views/Managers'));
const Teachers = React.lazy(() => import('./views/Teachers'));
const Students = React.lazy(() => import('./views/Students'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
  { path: '/managers', exact: true, name: 'Quản lý manager', component: Managers },
  { path: '/teachers', exact: true, name: 'Quản lý giáo viên', component: Teachers },
  { path: '/students', exact: true, name: 'Quản lý học sinh', component: Students }
];

export default routes;
