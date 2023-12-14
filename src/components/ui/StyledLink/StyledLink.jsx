import { Link } from './StyledLink.styled';

const StyledLink = ({
  children,
  iconSize = 's',
  variant = 'primary',
  Icon,
  href,
  offset = 50,
}) => {
  return (
    <Link
      icon={iconSize}
      variant={variant}
      to={href}
      spy={true}
      smooth={true}
      offset={offset}
      duration={1000}
    >
      {children} <span>{Icon && <Icon />}</span>
    </Link>
  );
};

export default StyledLink;
