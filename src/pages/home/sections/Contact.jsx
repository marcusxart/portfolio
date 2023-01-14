import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

import { TextField, Button, Loader, Modal } from "../../../components/common";

const Container = styled.div`
  width: 100%;
  padding: 8vh 8vw;

  h2 {
    font-size: ${({ theme }) => theme.font.size.h2};
    text-align: center;
    font-size: 4.8rem;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 900px) {
    padding: 6vh 3rem;
    h2 {
      font-size: 3.5rem;
    }
  }
  @media screen and (max-width: 600px) {
    h2 {
      font-size: 2.8rem;
    }
  }
`;

const Wrapper = styled.div`
  padding: 4rem 0;
  width: 100%;
  justify-content: center;
  min-height: 60vh;
  align-items: center;
  position: relative;
  display: flex;
`;

const Form = styled.form`
  width: 100%;
  max-width: 65rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  @media screen and (max-width: 600px) {
    gap: 1.5rem;
  }
`;
const NameEmail = styled.div`
  display: flex;
  width: 100%;
  gap: 3rem;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [message, setMessage] = useState({
    status: "",
    message: "",
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_2egwyrk",
        "template_d2cwara",
        form.current,
        "9Wz4X4hbUNlT8S_ne"
      )
      .then(
        (result) => {
          setFormInput({
            name: "",
            email: "",
            message: "",
          });
          setIsLoading(false);
          setMessage({
            status: "success",
            message: "Your message successfully send.",
          });
        },
        (error) => {
          setIsLoading(false);
          setMessage({
            status: "error",
            message: error.text,
          });
        }
      );
  };

  const handleClose = () => {
    setMessage({ status: null, message: "" });
  };
  return (
    <Container id="contact">
      <h2 className="text-gradient">Get In Touch</h2>
      <Wrapper>
        {isLoading && <Loader />}

        {message.status ? (
          <Modal res={message} close={handleClose} />
        ) : (
          <Form onSubmit={sendEmail} ref={form}>
            <NameEmail>
              <TextField
                label="Name"
                id="name"
                name="user_name"
                value={formInput.name}
                onChange={(e) =>
                  setFormInput({ ...formInput, name: e.target.value })
                }
              />
              <TextField
                label="Email"
                type="email"
                id="email"
                name="user_email"
                value={formInput.email}
                onChange={(e) =>
                  setFormInput({ ...formInput, email: e.target.value })
                }
              />
            </NameEmail>
            <TextField
              label="Message"
              type="textarea"
              id="message"
              name="message"
              value={formInput.message}
              onChange={(e) =>
                setFormInput({ ...formInput, message: e.target.value })
              }
            />
            <Button title="Send" type="submit" />
          </Form>
        )}
      </Wrapper>
    </Container>
  );
};

export default Contact;
