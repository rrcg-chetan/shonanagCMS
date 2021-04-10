import { useState, useContext, Fragment } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Facebook, Twitter, Mail, GitHub, HelpCircle, Coffee } from 'react-feather'
import { AvForm, AvInput } from 'availity-reactstrap-validation-safe'
import logo from '../../../assets/logo.svg';
import axios from 'axios';
import classnames from 'classnames';

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

const Login = props => {  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginInfo, setLoginInfo] = useState('user_not_logged_in')

  const [loginStatus, setLoginStatus] = useState('')

  const illustration = 'login-v2-dark.svg'
  
  const source = require(`../../../../src/assets/images/pages/${illustration}`).default

  const handleSubmit = (event, errors) => {
    if (errors && !errors.length) {
    }
  }

  //this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);

  const handleSuccessfulAuth = data => {
    this.props.history.push('/')
  }

  const login = () => {
    axios.post("http://localhost:4000/login", { withCredentials: true, email: email, password: password }, {            
    }).then(function (response) {
      //console.log(JSON.stringify(response.data));
      if(response.data.success === 'Successfully Logged In!'){
        //setLoginStatus(response.data.success);
        //props.handleSuccessfulAuth(response.data)
        this.props.handleSuccessfulAuth(response.data)
      }else{
        setLoginStatus(response.data[0]);        
      }
    })



    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div className='auth-wrapper auth-v2'>
      <Row className='auth-inner m-0'>
        <Link className='brand-logo' to='/' onClick={e => e.preventDefault()}>        
          <h2 className='brand-text text-primary ml-1'> River Route</h2>
        </Link>
        <Col className='d-none d-lg-flex align-items-center p-5' lg='8' sm='12'>
          <div className='w-100 d-lg-flex align-items-center justify-content-center px-5'>
            <img className='img-fluid' src={source} alt='Login V2' />
          </div>
        </Col>
        <Col className='d-flex align-items-center auth-bg px-2 p-lg-5' lg='4' sm='12'>
          <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
            <CardTitle tag='h2' className='font-weight-bold mb-1'>
              Welcome to React!
            </CardTitle>
            <CardText className='mb-2'>Please sign-in to your account and start the adventure</CardText>
            <AvForm className='auth-login-form mt-2'>
            <div role="alert" aria-live="polite" aria-atomic="true" className="alert alert-primary">
              <div className={classnames({'alert-body font-small-2': loginStatus})}>
                {loginStatus}
              </div>
            </div>
              <FormGroup>
                <Label className='form-label' for='login-email'>
                  Email
                </Label>
                <AvInput
                  required
                  autoFocus
                  type='email'
                  value={email}
                  id='login-email'
                  name='login-email'
                  placeholder='Enter email address'
                  onChange={e => setEmail(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <div className='d-flex justify-content-between'>
                  <Label className='form-label' for='login-password'>
                    Password
                  </Label>
                  <Link to='#'>
                    <small>Forgot Password?</small>
                  </Link>
                </div>   
                <AvInput
                  required
                  tag={AvInput}
                  value={password}
                  id='login-password'
                  name='login-password'
                  type="password"
                  placeholder='Enter Password'
                  className='input-group-merge'
                  onChange={e => setPassword(e.target.value)}
                />             
              </FormGroup>
              <FormGroup>
                <CustomInput type='checkbox' className='custom-control-Primary' id='remember-me' label='Remember Me' />
              </FormGroup>
              <Button color='primary' block disabled={!email.length || !password.length} onClick={login}>
                Sign in
              </Button>
            </AvForm>
            <p className='text-center mt-2'>
              <span className='mr-25'>New on our platform?</span>
              <Link to='/register'>
                <span style={{ color: 'white'}}>Create an account</span>
              </Link>
            </p>
            
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default Login;
