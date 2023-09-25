import Link from 'models/config/types/Link';

const accountSettingsLinks: Link[] = [
  {
    name: 'Verify Email',
    path: '/verify-email-address',
  },
  {
    name: 'Change Email',
    path: '/update-email',
  },
  {
    name: 'Change Password',
    path: '/update-password',
  },
  {
    name: 'Close Account',
    path: '/close-account',
  },
];

export default accountSettingsLinks;
