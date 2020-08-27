import React from 'react';
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Managers = React.lazy(() => import('./views/Managers'));
const AddManager = React.lazy(() => import('./views/Managers/addManager'));
const Teachers = React.lazy(() => import('./views/Teachers'));
const AddTeacher = React.lazy(() => import('./views/Teachers/addTeacher'));
const UpdateTeacher = React.lazy(() => import('./views/Teachers/updateTeacher'));
const Students = React.lazy(() => import('./views/Students'));
const AddStudent = React.lazy(() => import('./views/Students/addStudent'));
const UpdateStudent = React.lazy(() => import('./views/Students/updateStudent'));

const routes = [
  { path: '/', exact: true, name: 'Trang chủ' },
  { path: '/dashboard', exact: true, name: 'Thống kê', component: Dashboard },
  { path: '/managers', exact: true, name: 'Danh sách quản lý', component: Managers },
  { path: '/managers/add', exact: true, name: 'Thêm quản lý', component: AddManager },
  { path: '/teachers', exact: true, name: 'Quản lý giáo viên', component: Teachers },
  { path: '/teachers/add', exact: true, name: 'Thêm giáo viên', component: AddTeacher },
  { path: '/teachers/update/:username', exact: true, name: 'Cập nhật thông tin', component: UpdateTeacher },
  { path: '/students', exact: true, name: 'Quản lý học sinh', component: Students },
  { path: '/students/add', exact: true, name: 'Thêm học sinh', component: AddStudent },
  { path: '/students/update/:username', exact: false, name: 'Cập nhật thông tin', component: UpdateStudent },
];

export default routes;
