import { Link } from './StyledLink.styled';

const StyledLink = ({
  children,
  iconSize = 's',
  variant = 'primary',
  Icon,
  href,
}) => {
  return (
    <Link iconSize={iconSize} variant={variant} href={href}>
      {children} <span>{Icon && <Icon />}</span>
    </Link>
  );
};

export default StyledLink;
