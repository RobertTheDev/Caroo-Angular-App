import Link from 'models/config/types/Link';

const accountSettingsLinks: Link[] = [
  {
    name: 'View Profile',
    path: '/profile',
  },
  {
    name: 'Edit Profile',
    path: '/edit-profile',
  },
  {
    name: 'Verify Email',
    path: '/verify-email',
  },
  {
    name: 'Change Email',
    path: '/change-email',
  },
  {
    name: 'Change Password',
    path: '/change-password',
  },
  {
    name: 'My Car Listings',
    path: '/my-car-listings',
  },
  {
    name: 'Close Account',
    path: '/close-account',
  },
];

export default accountSettingsLinks;
