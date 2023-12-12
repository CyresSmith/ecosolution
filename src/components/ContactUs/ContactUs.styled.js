import styled from '@emotion/styled';
import theme from 'theme';

export const ContentBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px;
`;

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Contact = styled.li`
  > p {
    display: flex;
    flex-direction: column;

    svg {
      width: 24px;
      height: 24px;
      fill: ${theme.colors.primary.dark};
      transition: ${theme.transition.primary};
    }
  }
`;

export const ContactItemsBox = styled.span`
  display: ${p => (p.onlyIcons ? 'flex' : 'block')};
  align-items: center;
  gap: 8px;
`;

export const ContactName = styled.span`
  text-transform: capitalize;
  letter-spacing: -0.64px;
  margin-bottom: 16px;
`;

export const ContactLink = styled.a`
  font-size: 24px;
  letter-spacing: -0.96px;
  display: flex;
  align-items: center;
  gap: 8px;

  :not(:last-of-type) {
    margin-bottom: ${p => (p.isIcon ? '0' : '12px')};
  }

  :hover {
    > svg {
      fill: ${theme.colors.accent.regular};
    }
  }
`;

export const RightSide = styled.div``;
