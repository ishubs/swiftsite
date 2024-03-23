/** @jsx jsx */
import { jsx, Box, Text, Container } from 'theme-ui';
import { Link } from 'components/link';
import Logo from 'components/logo';
export default function Footer() {
  return (
    <footer
      sx={{
        variant: 'layout.footer',
        backgroundColor: '#fff',
      }}
    >
      <Container
        sx={{
          variant: 'layout.toolbar',
          justifyContent: ['center', null, null, 'space-between'],
          flexDirection: ['column', null, null, null, 'row'],
          paddingTop: [30, 40],
          paddingBottom: [30, 65],
        }}
      >
        <Box sx={styles.left}>
          <Link path="/" sx={styles.logo} >
            {/* <LogoSvg isWhite={isWhite} /> */}
            Shubham Giri {" "} &nbsp;
          </Link>
          <Text as="p">
            &copy; {new Date().getFullYear()} All right reserved - Design &
            Developed by Shubham Giri
          </Text>
        </Box>
        {/* <Box sx={styles.right}>
          <Link path="/"  label="shubsgiri@gmail.com" />
          <a path="/" label="linkedIn" />
          <a path="/" label="+91 9346009605" />
          <a path="https://www.upwork.com/freelancers/~014a70a6aa64522f5c" label="Upwork" />
        </Box> */}
        <Box sx={styles.right}>
          <a path="/" label="linkedIn" />
          <a path="/" label="+91 9346009605" />
        </Box>
      </Container>
    </footer>
  );
}

const styles = {
  left: {
    display: 'flex',
    flexDirection: ['column', null, 'row'],
    alignItems: 'center',
    p: {
      fontSize: [0, 1],
      color: 'black',
      opacity: 0.6,
      mt: ['10px', null, '0'],
    },
  },
  right: {
    display: ['none', null, null, null, 'flex'],
    // fontSize: 2,
    // width: '50%',
    alignItems: 'center',
    color: 'black',
    a: {
      display: 'flex',
    }
    // a: {
    //   transition: '500ms',
    //   '&:hover': {
    //     color: 'primary',
    //   },
    // },
    // 'a+a': {
    //   marginLeft: '30px',
    // },
  },
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
