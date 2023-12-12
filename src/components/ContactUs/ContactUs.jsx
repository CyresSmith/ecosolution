import { Container, Section, Title } from 'components/shared/Shared.styled';
import { Element } from 'react-scroll';
import {
  Contact,
  ContactItemsBox,
  ContactLink,
  ContactName,
  ContactsList,
  ContentBox,
} from './ContactUs.styled';

import Phone from 'assets/svg/call.svg?react';
import Facebook from 'assets/svg/facebook.svg?react';
import Instagram from 'assets/svg/instagram.svg?react';
import Map from 'assets/svg/map.svg?react';
import Email from 'assets/svg/sms.svg?react';
import ContactForm from './ContactForm';

const contacts = {
  phone: ['38 (098) 12 34 567', '38 (093) 12 34 567'],
  email: ['office@ecosolution.com'],
  address: ['79005, Ukraine, Lviv, street. Shota Rustaveli, 7'],
  socialNetworks: ['https://www.facebook.com/', 'https://www.instagram.com/'],
};

const ContactUs = () => {
  const setContactItem = (key, item, i) => {
    let href = '';
    let Icon = '';
    let isIcon = false;

    if (item.includes('facebook')) {
      href = item;
      Icon = Facebook;
      isIcon = true;
    } else if (item.includes('instagram')) {
      href = item;
      Icon = Instagram;
      isIcon = true;
    } else {
      switch (key) {
        case 'phone':
          href = `tel:${item}`;
          Icon = Phone;
          break;

        case 'email':
          href = `mailto:${item}`;
          Icon = Email;
          break;

        case 'address':
          href = `https://maps.app.goo.gl/ahouFchHAyZCnA6G9`;
          Icon = Map;
          break;

        default:
          href = '';
          Icon = '';
          break;
      }
    }

    return (
      <ContactLink
        isIcon={isIcon}
        href={href}
        rel="noopener, noreferrer, nofollow"
        target="blank"
        key={i}
      >
        {Icon !== '' && <Icon />}
        {!isIcon && item}
      </ContactLink>
    );
  };

  return (
    <Element name="contacts">
      <Section>
        <Container>
          <Title align="center" margin="0 0 120px 0">
            Contact Us
          </Title>

          <ContentBox>
            <address>
              <ContactsList>
                {Object.keys(contacts).map((key, i) => {
                  const isIcons = key === 'socialNetworks';

                  return (
                    <Contact key={i}>
                      <p>
                        <ContactName>{key}</ContactName>

                        <ContactItemsBox onlyIcons={isIcons}>
                          {contacts[key].map((item, i) =>
                            setContactItem(key, item, i)
                          )}
                        </ContactItemsBox>
                      </p>
                    </Contact>
                  );
                })}
              </ContactsList>
            </address>
            <ContactForm />
          </ContentBox>
        </Container>
      </Section>
    </Element>
  );
};

export default ContactUs;
