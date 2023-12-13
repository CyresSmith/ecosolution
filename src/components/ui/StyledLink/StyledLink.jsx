import { Link } from './StyledLink.styled';

const StyledLink = ({
  children,
  iconSize = 's',
  variant = 'primary',
  Icon,
  href,
}) => {
  return (
    <Link
      icon={iconSize}
      variant={variant}
      to={href}
      spy={true}
      smooth={true}
      offset={0}
      duration={1000}
    >
      {children} <span>{Icon && <Icon />}</span>
    </Link>
  );
};

export default StyledLink;
