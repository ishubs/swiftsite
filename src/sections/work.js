/** @jsx jsx */
import { jsx, Box, Container, Text } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Feature from 'components/cards/feature';
import { LearnMore } from 'components/link';
import Image from 'components/image';

import checkFilledCircle from 'assets/images/icons/check-circle-filled.png';
import { Fragment } from 'react';

const data = [
  {
    id: 1,
    color: '#28D1DC',
    value: '20+',
    title: 'We have more than customers',
  },
  {
    id: 3,
    color: '#FA578E',
    value: '50%',
    title: 'Budget Savings on Every Project',
  },
  {
    id: 2,
    color: '#FF753A',
    value: '150+',
    title: 'Successfully Delivered Projects',
  },
  {
    id: 4,
    color: '#28DCB2',
    value: '5X',
    title: '5X Faster than Industry Standards',
  },
];

const Features = () => {
  return (
    <Box as="section" variant="section.features">
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.leftContent}>
            {data?.map((item) => (
              <Feature key={item?.id} feature={item} />
            ))}
          </Box>
          <Box sx={styles.rightContent}>
            <SectionHeading
              sx={styles.heading}
              title={
                <Fragment>
                  Industry Experience <br />
                  that you can rely on anytime
                </Fragment>
              }
              description="With a wide range of industry experience of our highly qualified developers, We deliver high performing projects with minimal client hassle"
            />
            <Text sx={styles.listItem} as="p">
              <Image src={checkFilledCircle} alt="check icon" />
              Top of the Line Experienced Developers
            </Text>
            <Text sx={styles.listItem} as="p">
              <Image src={checkFilledCircle} alt="check icon" />
              Delivering Faster than Industry Standards
            </Text>
            <Box sx={styles.explore}>
              {/* <LearnMore path="#!" label="Explore More" /> */}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Features;

const styles = {
  contentWrapper: {
    gap: [30, 30, 30, 30, 40, 60, 70, 120],
    display: ['flex', 'flex', 'grid'],
    flexDirection: ['column-reverse', 'column-reverse', 'unset'],
    gridTemplateColumns: [
      '1.2fr 0.8fr',
      '1.2fr 0.8fr',
      '1.2fr 0.8fr',
      '1.1fr 0.9fr',
      '1.1fr 0.9fr',
      '1.1fr 0.9fr',
      '1.2fr 0.8fr',
    ],
    alignItems: 'center',
  },
  leftContent: {
    gap: [20, 20, 20, 20, 30, 45],
    display: ['grid', 'grid'],
    gridTemplateColumns: 'repeat(2, 1fr)',
    alignItems: 'flex-start',
    '> div': {
      ':first-of-type': {
        mt: ['65px'],
      },
      ':last-of-type': {
        mt: ['-65px'],
      },
    },
  },
  rightContent: {
    // ml: ['120px'],
  },
  heading: {
    textAlign: 'left',
    mb: ['20px'],
    mt: [0, 0, '-70px'],
    h2: {
      fontSize: ['28px', '28px', '28px', '28px', '36px', '40px'],
      lineHeight: [1.25, 1.5],
      letterSpacing: '-1.5px',
      br: {
        display: ['none', 'none', 'none', 'block'],
      },
    },
    p: {
      mt: ['15px', '10px'],
    },
  },
  listItem: {
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 2.81,
    display: 'flex',
    alignItems: 'center',
    img: {
      mr: '10px',
    },
  },
  explore: {
    mt: ['20px', '20px', '20px', '20px', '40px'],
  },
};
