export default [
  {
    _tag: 'CSidebarNavItem',
    name: 'Thống kê',
    to: '/dashboard',
    icon: 'cil-speedometer'
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Quản lý nhân sự']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Quản lý giáo viên',
    to: '/teachers',
    icon: 'cil-drop',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Quản lý học sinh',
    to: '/students',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Quản lý manager',
    to: '/managers',
    icon: 'cil-puzzle',
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Quản lý lớp học']
  },
]

