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
    name: 'Danh sách giáo viên',
    to: '/teachers',
    icon: 'cil-drop',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Danh sách học sinh',
    to: '/students',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Danh sách quản lý',
    to: '/managers',
    icon: 'cil-puzzle',
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Quản lý lớp học']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Danh sách lớp học',
    route: '/classrooms',
    icon: 'cil-people',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Danh sách lớp',
        to: '/classrooms/room',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Danh sách môn',
        to: '/classrooms/subject',
      }
    ],
  },
]

