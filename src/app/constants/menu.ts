const menuItems: any [] = [
  {
    id: 'dashboard',
    icon: 'iconsminds-home-4',
    label: 'menu.dashboard',
    to: '/dashboard',
  },
  {
    id: 'tables',
    icon: 'iconsminds-chair',
    label: 'menu.tables',
    to: '/tables'
  },
  {
    id: 'menu',
    icon: 'iconsminds-hamburger',
    label: 'menu.menu',
    sub: [
      {
        icon: 'iconsminds-hamburger',
        label: 'menu.menu',
        to: '/menu'
      },
      {
        icon: 'iconsminds-chef-hat',
        label: 'menu.categories',
        to: '/menu/categories'
      }
    ]
  },
  {
    id: 'employees',
    icon: 'iconsminds-business-man-woman',
    label: 'menu.employees',
    sub: [
      {
        icon: 'iconsminds-business-man-woman',
        label: 'menu.employees',
        to: '/employees'
      },
      {
        icon: 'iconsminds-id-card',
        label: 'menu.create_role',
        to: '/employees/category'
      },
      {
        icon: 'iconsminds-business-man',
        label: 'menu.create_employee',
        to: '/employees/create'
      }
    ]
  },
  {
    id: 'settings',
    icon: 'iconsminds-gear',
    label: 'menu.settings',
    to: '/settings',
  },
];
export default menuItems;
