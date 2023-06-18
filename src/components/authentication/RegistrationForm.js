import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link,useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Form, Row, Col } from 'react-bootstrap';
import Divider from 'components/common/Divider';
import SocialAuthButtons from './SocialAuthButtons';
import City from './card/Cityoption';
import Branchofstudy from './card/BranchoFStudy';
const RegistrationForm = ({ hasLabel }) => {
  const navigate = useNavigate()
  // State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    isAccepted: false,
    dob:'',
    father:'',
    branch:'',
    location:''
  });

  // Handler
  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData.password===formData.confirmPassword)
    localStorage.setItem("user",JSON.stringify(formData))
    navigate("/pricing/pricing-default")
    // toast.success(`Successfully registered as ${formData.name}`, {
    //   theme: 'colored'
    // });
  };

  const handleFieldChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        {hasLabel && <Form.Label>Name</Form.Label>}
        <Form.Control
          placeholder={!hasLabel ? 'Name' : ''}
          value={formData.name}
          name="name"
          onChange={handleFieldChange}
          type="text"
        />
      </Form.Group>
       
      <Form.Group className="mb-3">
        {hasLabel && <Form.Label>Father</Form.Label>}
        <Form.Control
          placeholder={!hasLabel ? 'Father' : ''}
          value={formData.father}
          name="father"
          onChange={handleFieldChange}
          type="text"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        {hasLabel && <Form.Label>Date of Birth</Form.Label>}
        <Form.Control
          placeholder={!hasLabel ? 'Date of Birth' : ''}
          value={formData.dob}
          name="dob"
          onChange={handleFieldChange}
          type="date"
        />
      </Form.Group>

      <Form.Group className="mb-3 ">
        {hasLabel && <Form.Label>Email address</Form.Label>}
        <Form.Control
          placeholder={!hasLabel ? 'Email address' : ''}
          value={formData.email}
          name="email"
          onChange={handleFieldChange}
          type="text"
        />
      </Form.Group>

      <Row className="g-2 mb-3">
        <Form.Group as={Col} sm={6}>
          {hasLabel && <Form.Label>Password</Form.Label>}
          <Form.Control
            placeholder={!hasLabel ? 'Password' : ''}
            value={formData.password}
            name="password"
            onChange={handleFieldChange}
            type="password"
          />
        </Form.Group>
        <Form.Group as={Col} sm={6}>
          {hasLabel && <Form.Label>Confirm Password</Form.Label>}
          <Form.Control
            placeholder={!hasLabel ? 'Confirm Password' : ''}
            value={formData.confirmPassword}
            name="confirmPassword"
            onChange={handleFieldChange}
            type="password"
          />
        </Form.Group>
      </Row>


      <Form.Select className='mb-3'
       value={formData.branch}
       name="branch"
       onChange={handleFieldChange}
      >
    <Branchofstudy />
  </Form.Select>


  <Form.Select className='mb-3'
  value={formData.location}
  name="location"
  onChange={handleFieldChange}
  >
    <option>Select Location</option>
    <City />
  </Form.Select>

      <Form.Group className="mb-3">
        <Form.Check type="checkbox" id="acceptCheckbox" className="form-check">
          <Form.Check.Input
            type="checkbox"
            name="isAccepted"
            checked={formData.isAccepted}
            onChange={e =>
              setFormData({
                ...formData,
                isAccepted: e.target.checked
              })
            }
          />



          <Form.Check.Label className="form-label">
            I accept the <Link to="#!">terms</Link> and{' '}
            <Link to="#!">privacy policy</Link>
          </Form.Check.Label>
        </Form.Check>
      </Form.Group>

      <Form.Group className="mb-4">
        <Button
          className="w-100"
          type="submit"
          disabled={
            !formData.name ||
            !formData.email ||
            !formData.password ||
            !formData.isAccepted ||
            !formData.father ||
            !formData.location ||
            !formData.dob ||
            !formData.branch ||
            formData.password!==formData.confirmPassword
          }
        >
          Register
        </Button>
      </Form.Group>
      <Divider>or register with</Divider>

      <SocialAuthButtons />
    </Form>
  );
};

RegistrationForm.propTypes = {
  hasLabel: PropTypes.bool
};

export default RegistrationForm;
