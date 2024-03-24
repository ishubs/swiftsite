/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'components/link';

export default function Logo({ isWhite, ...props }) {
  return (
    <Link path="/" sx={styles.logo} {...props}>
      ByteBath
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
    color: '#50C878',
    svg: {
      height: 'auto',
      width: [128, null, '100%'],
    },
  },
};
