import { useState, useContext, Fragment } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Facebook, Twitter, Mail, GitHub, HelpCircle, Coffee } from 'react-feather'
import { AvForm, AvInput, AvCheckboxGroup, AvCheckbox } from 'availity-reactstrap-validation-safe'
import classnames from 'classnames';
import logo from '../../../assets/logo.svg';
import axios from 'axios';
import {
  Alert,
  Row,
  Col,
  CardTitle,
  CardText,
  FormGroup,
  Label,
  CustomInput,
  Button,
  UncontrolledTooltip
} from 'reactstrap'

import './page-auth.css';

const Register = () => {
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState({})
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [terms, setTerms] = useState(false)
  const [registerStatus, setRegisterStatus] = useState('')

  const illustration = 'register-v2-dark.svg'
  const source = require(`../../../../src/assets/images/pages/${illustration}`).default

  const registration = () => {
    axios.post("http://localhost:4000/register", {
      name: name,
      email: email,
      password: password,
      code: Math.random().toString(24).substring(4),
      status: 1,
      date_created: Math.floor(Date.now()/1000)
    }).then(function (response) {
      //console.log(JSON.stringify(response.data));
      if(response.data){
        setRegisterStatus(response.data.success);
      }else{
        setRegisterStatus(response.data);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const Terms = () => {
    return (
      <Fragment>
        I agree to
        <a className='ml-25' href='/' onClick={e => e.preventDefault()}>
          privacy policy & terms
        </a>
      </Fragment>
    )
  }

  const handleSubmit = (event, errors) => {
    if (errors && !errors.length) {
      
    }
  }

  const handleNameChange = e => {
    const errs = errors
    if (errs.name) delete errs.name
    setName(e.target.value)
    setErrors(errs)
  }

  const handleEmailChange = e => {
    const errs = errors
    if (errs.email) delete errs.email
    setEmail(e.target.value)
    setErrors(errs)
  }

  return (
    <div className='auth-wrapper auth-v2'>
      <Row className='auth-inner m-0'>
        <Link className='brand-logo' to='/' onClick={e => e.preventDefault()}>
          <h2 className='brand-text text-primary ml-1'>River Route</h2>
        </Link>
        <Col className='d-none d-lg-flex align-items-center p-5' lg='8' sm='12'>
          <div className='w-100 d-lg-flex align-items-center justify-content-center px-5'>
            <img className='img-fluid' src={source} alt='Login V2' />
          </div>
        </Col>
        <Col className='d-flex align-items-center auth-bg px-2 p-lg-5' lg='4' sm='12'>
          <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
            <CardTitle tag='h2' className='font-weight-bold mb-1'>
              Adventure starts here
            </CardTitle>
            <CardText className='mb-2'>Make your app management easy and fun!</CardText>

            <AvForm className='auth-register-form mt-2'>
            <div role="alert" aria-live="polite" aria-atomic="true" className="alert alert-primary">
              <div className={classnames({'alert-body font-small-2': registerStatus})}>
                {registerStatus}
              </div>
            </div>
              <FormGroup>
                <Label className='form-label' for='register-username'>
                  Your Name
                </Label>
                <AvInput
                  required
                  autoFocus
                  type='text'
                  placeholder='Enter your name'
                  id='register-username'
                  name='register-username'
                  value={name}
                  onChange={handleNameChange}
                  className={classnames({ 'border-danger': Object.keys(errors).length && errors.name })}
                />
                {Object.keys(errors).length && errors.name ? (
                  <small className='text-danger'>{errors.name}</small>
                ) : null}
              </FormGroup>
              <FormGroup>
                <Label className='form-label' for='register-email'>
                  Email
                </Label>
                <AvInput
                  required
                  type='email'
                  id='register-email'
                  name='register-email'
                  value={email}
                  placeholder='Enter your email ID'
                  onChange={handleEmailChange}
                  className={classnames({ 'border-danger': Object.keys(errors).length && errors.email })}
                />
                {Object.keys(errors).length && errors.email ? (
                  <small className='text-danger'>{errors.email}</small>
                ) : null}
              </FormGroup>
              <FormGroup>
                <Label className='form-label' for='register-password'>
                  Password
                </Label>
                <AvInput
                  required
                  tag={AvInput}
                  id='register-password'
                  name='register-password'
                  value={password}
                  type="password"
                  placeholder="Enter your password"
                  className='input-group-merge'
                  onChange={e => setPassword(e.target.value)}
                />
              </FormGroup>
              <AvCheckboxGroup name='Remember Me' checked={terms} required>
                <AvCheckbox
                  customInput
                  type='checkbox'
                  id='remember-me'
                  value='Remember Me'
                  label={<Terms />}
                  className='custom-control-Primary'
                  onChange={e => setTerms(e.target.checked)}
                />
              </AvCheckboxGroup>
              <Button
                block
                color='primary'
                disabled={!email.length || !password.length || !name.length || !terms}
                onClick={registration}
              >
                Sign up
              </Button>
            </AvForm>
            <p className='text-center mt-2'>
              <span className='mr-25'>Already have an account?</span>
              <Link to='/login'>
                <span style={{ color: 'white'}}>Sign in instead</span>
              </Link>
            </p>
            <div className='divider my-2'>
              <div className='divider-text'>or</div>
            </div>
            <div className='auth-footer-btn d-flex justify-content-center'>
              <Button color='facebook'>
                <Facebook size={14} />
              </Button>
              <Button color='twitter'>
                <Twitter size={14} />
              </Button>
              <Button color='google'>
                <Mail size={14} />
              </Button>
              <Button className='mr-0' color='github'>
                <GitHub size={14} />
              </Button>
            </div>
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default Register
