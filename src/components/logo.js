/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'components/link';
import LogoSvg from 'components/icons/logo';

export default function Logo({ isWhite, ...props }) {
  return (
    <Link path="/" sx={styles.logo} {...props}>
      {/* <LogoSvg isWhite={isWhite} /> */}
      SwiftSite
    </Link>
  );
}
const styles = {
  logo: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'inline-flex',
    fontSize: '24px',
    fontWeight: 700,
    color: '#FFC059',
    svg: {
      height: 'auto',
      width: [128, null, '100%'],
    },
  },
};