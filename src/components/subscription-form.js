/** @jsx jsx */
import { jsx, Flex, Input, Button, Label } from 'theme-ui';
import { useState, useEffect } from 'react';
import { Modal, message } from 'antd';
const SubscriptionForm = ({ buttonLabel, ...props }) => {
  const [id, setId] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(true)
  useEffect(() => {
    setId(Date.now());
  }, []);

  return (
    <>
      <Flex sx={styles.form} {...props}>
        {/* <Label htmlFor={`email-${id}`} variant="styles.srOnly">
        Email
      </Label> */}
        {/* <Input
        type="email"
        id={`email-${id}`}
        placeholder="Enter Email address"
      /> */}
        <Button onClick={() => setIsModalOpen(true)}>{buttonLabel ?? 'Get In Touch Now'}</Button>
      </Flex>
      <Modal footer={null} title="How Would You Like To Contact Us?" open={isModalOpen} onCancel={() => setIsModalOpen(false)}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: '40px', gap: '30px', flexWrap: 'wrap' }}>
          <div style={styles.contactMethod}>
            <a target='_blank' style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', color: 'green' }} href='https://wa.me/919346009605?text=Hi%20there%2C%20I%20need%20web%20development%20services.'>

              <Button>WhatsApp Us</Button>
            </a>
          </div>
          <div style={styles.contactMethod}>
            <Button onClick={() => {
              navigator.clipboard.writeText("shubham@bytebath.com")
              message.success("shubham@bytebath.com Copied to Clipboard")
            }}>Copy Email</Button>
          </div>
          <div style={styles.contactMethod}>
            <a style={{ textDecoration: 'none' }} href="https://calendly.com/byetbath/30min" target='_blank'>
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
    </>
  );
};

export default SubscriptionForm;

const styles = {
  contactMethod: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  btn: {
    minHeight: '40px !important',
    background: 'green',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
  },
  form: {
    input: {
      flexGrow: 1,
      p: ['0 20px', null, null, null, '0 25px'],
      minHeight: [60],
      height: 'auto',
      width: 'auto',
    },
    button: {
      ml: [0],
    },
  },
};
