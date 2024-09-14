export const routes = {
  home: {
    title: 'Главная',
    href: '/'
  },
  users: {
    title: 'Сотрудники',
    href: '/users',
  },
  profile: {
    title: 'Профиль',
    href: '/profile',
  },
  signOut: {
    title: 'Выйти',
    href: '/api/auth/signout',
  },
} as const;