/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import { rgba } from 'polished';
import SectionHeading from 'components/section-heading';
import SubscriptionForm from 'components/subscription-form';
import { Button } from 'theme-ui';
import { useState } from 'react';
import { Modal } from 'antd';
import { message } from 'antd';
const Subscribe = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <Box as="section" sx={styles.section}>
      <Container style={{ display: 'flex', flexDirection: 'column' }}>
        <SectionHeading
          sx={styles.heading}
          title="Get In Touch Now to Discuss Your Project"
          description="Build your project faster and more efficiently with our team of highly skilled developers."
        />
        <Button onClick={() => setIsModalOpen(true)} style={{ maxWidth: 'fit-content', margin: '0 auto' }}>{'Get In Touch Now'}</Button>
      </Container>
      <Modal footer={null} title="How Would You Like To Contact Us?" open={isModalOpen} onCancel={() => setIsModalOpen(false)}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: '40px', gap: '30px', flexWrap: 'wrap' }}>
          <div style={styles.contactMethod}>
            {/* <a target='_blank' style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', color: 'green' }} href='https://wa.me/919346009605?text=Hi%20there%2C%20I%20need%20web%20development%20services.'> */}

            {/* <Button>WhatsApp Us</Button> */}
            {/* </a> */}
          </div>
          <div style={styles.contactMethod}>
            <Button onClick={() => {
              navigator.clipboard.writeText("shubham@bytebath.com")
              message.success("shubham@bytebath.com Copied to Clipboard")
            }}>Copy Email</Button>
          </div>
          <div style={styles.contactMethod}>
            <a style={{ textDecoration: 'none' }} href="https://calendly.com/shubsgiri/30min" target='_blank'>
              <Button>Schedule a Call</Button>
            </a>
          </div>
          <div style={{ display: 'flex', width: '100%' }}>
            {/* <Label htmlFor={`email-${id}`} variant="styles.srOnly">
              Email
            </Label>
            <Input
              type="email"
              id={`email-${id}`}
              placeholder="Enter Email address"
            />
            <Button style={{marginLeft: '2rem'}}>Send </Button> */}
          </div>
        </div>
      </Modal>
    </Box>
  );
};

export default Subscribe;

const styles = {
  section: {
    backgroundColor: '#353448',
    pt: [9, null, null, null, 10, 13, null],
    pb: [9, null, null, null, 11, 14, null],
  },
  heading: {
    mb: [7, null, null, 8, 9, 10],
    h2: {
      color: 'white',
      fontSize: [6, null, null, 8],
    },
    p: {
      color: '#858B91',
      fontSize: [2, null, null, 3],
      m: ['15px auto 0', null, null, '10px auto 0'],
    },
  },
  subscriptionForm: {
    m: ['30px auto 0'],
    maxWidth: [555],
    flexDirection: ['column', null, null, 'row'],
    input: {
      backgroundColor: rgba('white', 0.08),
      border: '0 none',
      color: rgba('white', 0.8),
      fontFamily: 'body',
      px: [5],
      minHeight: [50, null, null, null, 60],
      boxShadow: '0px 16px 40px rgba(72, 59, 26, 0.08)',
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      '::placeholder': {
        color: rgba('white', 0.8),
        opacity: 1 /* Firefox */,
      },
    },
    button: {
      fontSize: [1, null, null, 2],
      minHeight: [50, null, null, null, 60],
      mx: [0, null, null, 3],
      mt: [4, null, null, 0],
    },
  },
};
