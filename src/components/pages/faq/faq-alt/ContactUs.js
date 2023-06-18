import FaqAlt from "./FaqAlt";
import { useState } from "react";
import { Button, Form, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faqs as faqsData } from 'data/faqs';
import NavbarStandard from "components/pages/landing/NavbarStandard";
import FooterStandard from "components/pages/landing/FooterStandard";

function ContactUs(){
    const [faqs] = useState(faqsData);
    return (
        <>
         <Modal.Title as="h5" className="text-contact">
         “ Hello, Get in touch with us ”
      </Modal.Title>
      <Form className="contact-form">
        <Form.Group className="mb-3">
          <Form.Label className="fs-0" htmlFor="name">
            Full Name
          </Form.Label>
          <Form.Control type="text" id="name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="fs-0" htmlFor="email">
            Email
          </Form.Label>
          <Form.Control type="email" id="email" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="fs-0" htmlFor="email">
           Phone
          </Form.Label>
          <Form.Control type="number" id="number" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="fs-0" htmlFor="email">
            City
          </Form.Label>
          <Form.Control type="text" id="city" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="fs-0" htmlFor="question">
            Message
          </Form.Label>
          <Form.Control as="textarea" rows={4} id="question" />
        </Form.Group>
        <Button varient="primary" size="sm" className="px-4">
          <FontAwesomeIcon icon="paper-plane" className="me-2" />
          Send
        </Button>
      </Form>
        </>
    )
}

export default ContactUs