import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    // Uncomment if you want to enable emailJS
    // if (name !== '' && email !== '' && message !== '') {
    //   var templateParams = {
    //     name: name,
    //     email: email,
    //     message: message
    //   };
    //   console.log(templateParams);
    //   emailjs.send('service_id', 'template_id', templateParams, 'api_key').then(
    //     (response) => {
    //       console.log('SUCCESS!', response.status, response.text);
    //     },
    //     (error) => {
    //       console.log('FAILED...', error);
    //     },
    //   );
    //   setName('');
    //   setEmail('');
    //   setMessage('');
    // }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>

          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
          >
            {/* 🟩 LEFT SIDE - FORM */}
            <div className="form-left">
              <div className="form-flex">
                <TextField
                  required
                  id="name"
                  label="Your Name"
                  placeholder="What's your name?"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  error={nameError}
                  helperText={nameError ? "Please enter your name" : ""}
                  InputProps={{
                    style: { color: 'black', backgroundColor: 'white' }
                  }}
                  InputLabelProps={{
                    style: { color: 'gray' }
                  }}
                />
                <TextField
                  required
                  id="email"
                  label="Email / Phone"
                  placeholder="How can I reach you?"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  error={emailError}
                  helperText={emailError ? "Please enter your email or phone number" : ""}
                  InputProps={{
                    style: { color: 'black', backgroundColor: 'white' }
                  }}
                  InputLabelProps={{
                    style: { color: 'gray' }
                  }}
                />
              </div>

              <TextField
                required
                id="message"
                label="Message"
                placeholder="Send me any inquiries or questions"
                multiline
                rows={10}
                className="body-form"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                error={messageError}
                helperText={messageError ? "Please enter the message" : ""}
                InputProps={{
                  style: { color: 'black', backgroundColor: 'white' }
                }}
                InputLabelProps={{
                  style: { color: 'gray' }
                }}
              />

              <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail}>
                Send
              </Button>
            </div>

            {/* 🟩 RIGHT SIDE - CONTACT DETAILS */}
            <div className="form-right">
              <h2>Swastik Das</h2>
              <p>Email: swastik.taj@gmail.com</p>
              <p>Location: Bengaluru, India</p>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
