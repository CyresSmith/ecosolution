import Facebook from 'assets/svg/facebook_2.svg?react';
import Instagram from 'assets/svg/instagram.svg?react';
import { SocialBox } from './SocialLinks.styled';

const socialLinksArr = [
  { link: 'https://www.facebook.com/', title: 'Facebook', icon: Facebook },
  { link: 'https://www.instagram.com/', title: 'Instagram', icon: Instagram },
];

const SocialLinks = ({ white = false }) => {
  return (
    <SocialBox white={white}>
      {socialLinksArr.map((item, i) => {
        const Icon = item.icon;

        return (
          <li key={i}>
            <a
              href={item.link}
              rel="noopener, noreferrer, nofollow"
              target="blank"
            >
              <Icon />
            </a>
          </li>
        );
      })}
    </SocialBox>
  );
};

export default SocialLinks;
