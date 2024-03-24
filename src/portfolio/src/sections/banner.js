import React, { useEffect } from 'react';
import { Box, Container, Grid, Button, Input, Heading, Text } from 'theme-ui';
import Image from '../components/image';
import bannerImg from '../assets/banner-image-1-1.png';
import { Alert, Dropdown, Progress, Select, Slider, Button as AntdButton, Card } from 'antd';
import group from '../assets/Group.png';
import green from '../assets/green2.png';
const Banner = () => {


  const [angle, setAngle] = React.useState([11, -20]);
  const [blurlevel, setBlurLevel] = React.useState(100);

  const items = [
    {
      label: '1st menu item',
      key: '1',
    },
    {
      label: '2nd menu item',
      key: '2',
    },
    {
      label: '3rd menu item',
      key: '3',
      danger: true,
    },
    {
      label: '4rd menu item',
      key: '4',
      danger: true,
      disabled: true,
    },
  ];



  const handleMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const angle = [(clientY - innerHeight / 2) / innerHeight, (clientX - innerWidth / 2) / innerWidth];
    setAngle([-angle[0] * 50, -angle[1] * 50]);
  };

  const menuProps = {
    items,
    onClick: () => { },
  };

  const marks = {
    0: '0°C',
    26: '26°C',
    37: '37°C',
    100: {
      style: {
        color: '#f50',
      },
      label: <strong>100°C</strong>,
    },
  };

  return (
    <Box sx={styles.banner} id="banner"

      onMouseEnter={() => {
        setBlurLevel(-11);
      }

      }

      onMouseLeave={() => {
        setBlurLevel(100);
      }

      }


    >
      {/* <div className='mask'> */}
      {/* <div
        style={{
          perspective: '800px',
          display: 'flex',
        }}
      > */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backdropFilter: blurlevel == -11 ? 'blur(0)' : 'blur(4px)',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          opacity: 1,
          // transition: 'all 1s ease',
          // pointerEvents: 'none',
          zIndex: blurlevel,
          // background: 'red'
        }}
      ></div>
      <img src={green} width={350} style={{
        position: 'absolute',
        top: '150px',
        left: '-200px',
        transform: 'rotate(225deg)',

        // width: '100%',
        // height: '100%',
        // objectFit: 'cover',
        // filter: 'blur(4px)',
        zIndex: 900
      }} />
      <img src={group} width={100} style={{
        position: 'absolute',
        top: '500px',
        left: '100px',

        // width: '100%',
        // height: '100%',
        // objectFit: 'cover',
        // filter: 'blur(4px)',
        zIndex: 10000
      }} />
      {/* </div> */}
      {/* </div> */}

      <div
        sx={styles.backdiv}
        className='backdiv'

        style={{
          position: 'absolute',
          top: '100px',
          right: '-90px',
          transform: `rotate3d(24, -83, 45, 57deg)`,

          // insetInlineEnd: '0px',
          // zIndex: 900,
        }}
      >
        <div
          style={{
            willChange: 'transform',

            transform: `perspective(1000px) rotateX(${angle[0]}deg) rotateY(${angle[1]}deg) scale3d(1, 1, 1)`,
            gap: '16px',
            display: 'flex',
            flexDirection: 'column',
            width: '700px',
            opacity: '0.7',
            transition: 'all 1500ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s'
          }}

          onMouseMove={handleMove}
          onMouseLeave={() => {
            setAngle([11, -20]);

          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0px 10px 50px rgba(48, 98, 145, 0.8)', backgroundColor: 'white',
              padding: '20px',
              borderRadius: '10px',

            }}
          >
            <h3>Shubham Giri</h3>
            Top-rated Frontend Developer on Upwork with a proven track record of delivering high-quality solutions. Possessing over 5 years of experience and a background from a leading tech institute in the country.

          </div>
          <Alert info message="5+ years of experience" />
          <div style={{
            display: 'flex',
            gap: '10px',
            justifyContent: 'flex-start'

          }}>
            <Dropdown.Button menu={menuProps} >
              Dropdown
            </Dropdown.Button>
            <Select
              mode="multiple"
              allowClear
              style={{ width: '100%' }}
              placeholder="Please select"
              defaultValue={['React', 'Redux']}
              options={[
                { label: 'React', value: 'React' },
                { label: 'Redux', value: 'Redux' },
                { label: 'Node', value: 'Node' },

              ]}
            ></Select>
          </div>
          <Progress
            // style={{

            // }}
            percent={50} status="active" />
          <Progress percent={100} />
          <Card>
            <Slider marks={marks} defaultValue={37} />
          </Card>
          <div style={{
            display: 'flex',
            gap: '10px'
          }}>
            <AntdButton type="primary" danger>
              Danger
            </AntdButton>
            <AntdButton type="dashed">
              Primary
            </AntdButton>
            <AntdButton type="primary">
              Primary
            </AntdButton>
          </div>

          <Alert style={{
            marginTop: '10px'
          }} message="Success Text" type="success" />;
        </div>
        {/* </div> */}

      </div>
      <Container sx={styles.container}
        style={{
          zIndex: 900,
          position: 'relative',
          width: 'min-content',
          padding: 0,
          textAlign: 'center',

        }}
      >
        {/* <Grid sx={styles.grid}> */}
        {/* <Box sx={styles.content}> */}
        <Heading sx={styles.h3} as="h3"
          onMouseMove={handleMove}
          onMouseLeave={() => {
            setAngle([11, -20]);

          }}
          style={{

          }}>
          Senior <br /> Frontend Developer
        </Heading>
        <Text

          style={{
            fontSize: '16px',
            fontWeight: 400,
            marginTop: '20px',
            marginBottom: '20px',
            padding: '20px'

          }}
          as="p">
          With over 5+ years of experience in the industry, I have been
          helping companies solve complex problems with my expertise in
          Frontend
        </Text>
        <Box as="form" sx={styles.form}>
          <Button type="submit" sx={styles.form.button}
            style={{
              margin: '0 auto'
            }}
            onClick={() => {
              window.open('https://calendly.com/shubsgiri/30min', '_blank')
            }}
          >
            Get in touch
          </Button>
        </Box>
        {/* <Box sx={styles.partner}>
              <Text as="span">Expert in:</Text>
              <Box as="div" style={{
                fontWeight: 'bold'
              }}>
                React
              </Box>
              <Box as="div">
                Javascript
              </Box>
              <Box as="div">
                Node
              </Box>
            </Box> */}
        {/* </Box> */}
        {/* <Box

            sx={styles.image}>
            <Image
              width={"100%"} src={bannerImg} alt="" />
          </Box> */}
        {/* </Grid> */}
      </Container>
      {/* </div> */}
    </Box >
  );
};

export default Banner;

const styles = {

  banner: {
    pt: ['110px', null, null, null, '150px', '200px'],
    pb: ['50px', null, null, null, '60px', null, '0'],
    backgroundColor: '#F6F8FB',
    backgroundColor: 'white',
    overflow: 'hidden',
    // zIndex: 1000,
    perspective: '8000px',
  },
  container: {
    width: [null, null, null, null, null, null, '1390px'],
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: ['1fr'],
    gridGap: '0',
  },
  h3: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    lineHeight: [1.39],
    margin: '0 auto',
    letterSpacing: ['-.7px', '-1.5px'],
    mb: ['15px', null, null, null, '20px'],
    width: ['100%'],
    maxWidth: ['100%', null, null, '90%', '100%', '640px'],
    fontSize: ['40px', null, null, '60px', null, '60px', '60px'],
    // fontSize: '60px',
    fontWeight: '900',
    width: '650px'
  },
  p: {
    fontSize: [1, null, null, 2, null, 3],
    lineHeight: ['26px', null, null, null, 1.88],
    color: 'text_secondary',
    margin: '0 auto',
    mb: ['20px', null, null, null, null, '30px'],
    width: ['100%'],
    maxWidth: ['100%', null, null, null, null, '550px'],
    textAlign: 'center',
    br: {
      display: ['none', null, null, null, 'inherit'],
    },
  },
  form: {
    mb: ['30px', null, null, null, null, '60px'],
    display: ['flex'],
    input: {
      borderRadius: ['4px'],
      backgroundColor: '#fff',
      width: ['240px', null, null, null, '315px', null, '375px'],
      height: ['45px', null, null, '55px', null, null, '65px'],
      padding: ['0 15px', null, null, '0 25px'],
      fontSize: [1, null, null, 2],
      border: 'none',
      outline: 'none',
      boxShadow: '0px 10px 50px rgba(48, 98, 145, 0.08)',
    },
    button: {
      fontSize: [1, null, null, null, 2, '20px'],
      borderRadius: ['4px'],
      padding: ['0 15px'],
      ml: ['10px'],
      width: ['auto', null, null, null, '180px'],
    },
  },
  image: {
    img: {
      display: 'flex',
      mixBlendMode: 'darken',
      position: 'relative',
      top: ['0', null, null, null, null, '-40px'],
      maxWidth: ['100%', null, null, null, null, null, 'none'],
    },
  },
  partner: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    mb: ['40px'],
    '> div + div': {
      ml: ['10px', null, null, '20px', null, '30px'],
      color: '#566272',
      fontWeight: 'bold',
    },
    img: {
      display: 'flex',
    },
    span: {
      fontSize: [1, null, null, null, 2],
      color: '#566272',
      lineHeight: [1],
      opacity: 0.6,
      display: 'block',
      mb: ['20px', null, null, null, '0px'],
      mr: [null, null, null, null, '20px'],
      flex: ['0 0 100%', null, null, null, '0 0 auto'],
    },
  },
};
