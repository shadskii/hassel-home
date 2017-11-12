import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'PAGES',
    group: true,
  }, {
    title: 'Recipes',
    icon: 'fa fa-cutlery',
    link: '/pages/recipes',
  },
  {
    title: 'Jake\'s page',
    icon: 'ion-ios-body-outline',
    link: '/pages/jake',
  },
  {
    title: 'Lori\'s page',
    icon: 'ion-ios-body-outline',
    link: '/pages/lori',
  },
  {
    title: 'Nancy\'s page',
    icon: 'ion-ios-body-outline',
    link: '/pages/nancy'
  },
  {
    title: 'Mark\'s page',
    icon: 'ion-ios-body-outline',
    link: '/pages/mark'
  },
  {
    title: 'Christmas Cards',
    icon: 'fa fa-tree',
    link: '/pages/christmas-cards'
  },
  {
    title: 'Account',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
