import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const socialLinks: {
  url: string;
  icon: IconProp;
}[] = [
  {
    url: 'https://www.facebook.com',
    icon: faFacebook,
  },
  {
    url: 'https://www.instagram.com',
    icon: faInstagram,
  },
  {
    url: 'https://www.twitter.com',
    icon: faTwitter,
  },
];

export default socialLinks;
