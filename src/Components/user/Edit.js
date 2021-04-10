import React, { useState, Fragment, useEffect } from 'react';
//import ReactDOM from 'react-dom';
//import NavBar from '../Components/navbar/NavBar';
import DashboardSideBar from '../sidebar/DashboardSideBar';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import classnames from 'classnames'
import axios from 'axios';

import '../../Components/mainstyle.css'
import '../../Components/animate.css';
import '../../Components/vertical-menu.css';
import '../../Components/perfect-scrollbar.css';

import { Card, CardHeader, CardTitle, CardBody, Label, Button, Row, Col } from 'reactstrap'
import {
  AvForm,
  AvGroup,
  AvField,
  AvInput,
  AvFeedback,
  AvRadioGroup,
  AvCheckboxGroup,
  AvRadio,
  AvCheckbox
} from 'availity-reactstrap-validation-safe'
import { useHistory, useParams } from 'react-router';

  
  const onSubmit = async values => {

    /*if (document.getElementById("paraffin").value == '') {
      console.log('Please select a button');     
    }else{*/

    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));    
    await sleep(300);
    window.alert(JSON.stringify(values, 0, 2));
    /*}*/
  };

  
      const Edit = () => {
        const { id } = useParams();
        //console.log(id);
        let history = useHistory();
        const [errors, setErrors] = useState({})
      //class Demography extends Component {        
        const [height, setHeight] = useState(0);
        const [weight, setWeight] = useState(0);
        const [bmi, setBmi] = useState(0);
        const [check, setCheck] = useState(false);
        const [startDate, setStartDate] = useState(new Date());
        const [date, setDate] = useState(new Date());
        const [userStatus, setUserStatus] = useState([])
        const [urole, setUrole] = useState([])
        const [user, setUser] = useState({
          loginname: "", country: "", centre: "", userrole: "", timezone: "", culture: "", acc_dis: "", pass_never: "", must_change: "", cant_change: "", title: "", firstname: "", lastname: "", email: "", street_address: "", city: "", phone_1: "", phone_2: "", fax: "", dateofbirth: ""
        })
        const { loginname, country, centre, userrole, timezone, culture, acc_dis, pass_never, must_change, cant_change, title, firstname, lastname, email, street_address, city, phone_1, phone_2, fax, dateofbirth } = user;

        const changeDate = () => {
          setDate(date)
        }

        /*const handleChange = e => { 
          const errs = errors
          setErrors(errs) 
          setUser(e.target.value)          
        }*/

        const handleChange = (e) => {
          const errs = errors
          setUser({...user, [e.target.name]: e.target.value})          
          setErrors(errs)                              
        }

        const handleCheckboxChange = (e) => {
          setUser({...user, [e.target.name]: e.target.value})
          setCheck(!check)      
          if(check){
            e.target.value = false
          }   
          console.log(e.target.value)                   
        }

        const focus = () => {
          document.getElementById("dateofbirth").value = document.getElementById("dobs").value
          document.getElementById("dateofbirth").focus();
          document.getElementById("dateofbirth").blur();
        } 

              
        const changeHeight = (e) => {          
          setHeight(e.target.value)                               
        }
        
        const changeWeight = (e) => {
          setWeight(e.target.value)
          //var weight = +setWeight((weight / Math.pow(height, 2))*10000)    
        }

        const calculateBMI = (e) => {
          var bmi = setBmi((weight / Math.pow(height, 2))*10000)          
        }   
        
        const getUserDetails = async () => {
          await axios.get(`http://localhost:4000/getuserdetails/${id}`)
          .then(function (response) {
            //console.log(JSON.stringify(response.data));
            if(response.data){
              console.log(response.data.data[0]);
              setUser(response.data.data[0]);
            }else{
              //setUser(response.data);
            }
          })
          .catch(function (error) {
            console.log(error);
          });
        }
        useEffect(() => {
          getUserDetails();               
        }, []);

        /*const accdis = user.acc_dis
        const pasnever = user.pass_never
        const muschange = user.must_change
        const cantechange = user.cant_change

        if(accdis == "true"){
          //alert(accdis)
          document.getElementById("acc_dis").checked = true
        }
        if(pasnever == "true"){
          //alert(pasnever)
          document.getElementById("pass_never").checked = true
        }
        if(muschange == "true"){
          //alert(muschange)
          document.getElementById("must_change").checked = true
        }
        if(cantechange == "true"){
          //alert(cantechange)
          document.getElementById("cant_change").checked = true
        }*/
        /*const updateUserDetails = () => {
          axios.put(`http://localhost:4000/updateuser/${id}`, {
            login_name: loginname, country: country, centre: centre, user_role: userrole, timezone: timezone, culture: culture, acc_dis: acc_dis, pass_never: pass_never, must_change: must_change, cant_change: cant_change, user_title: title, first_name: firstname, last_name: lastname, name: firstname +' '+ lastname, email: email, street_address: street_address, city: city, phone_1: phone_1, phone_2: phone_2, fax: fax, dateofbirth: dateofbirth
          })
          .then(function (response) {
            //console.log(JSON.stringify(response.data));
            if(response.data){
              //console.log(response.data.data[0]);
              setUserStatus(response.data.data[0]);
            }else{
              setUserStatus(response.data);
            }
          })
          .catch(function (error) {
            console.log(error);
          });
        }*/
        
        const onSubmit = async e => {
          e.preventDefault();
          await axios.put(`http://localhost:4000/updateuser/${id}`, user);
          history.push("/users");
        };          
          
      const Urole = () => {
        //setUrole({urole: user.user_role})
        console.log(user.user_role)
      }
        
      return (
        <div>
              <DashboardSideBar   />
              <div className="content-wrapper animate__animated animate__fadeIn">
              <div className="app-content content overflow-hidden">

                <Fragment>
                
                <Row>
                <Col sm='12'>
                <Card>
                  <CardHeader>
                    <CardTitle tag='h4'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> <span className="menu-title text-truncate">Edit User</span></CardTitle>
                  </CardHeader>
                  <CardBody>
                  
                    <AvForm  onSubmit={e => onSubmit(e)}>
                    <div className="col-md-12">
                      <div className="row">
                      <div className="col-md-6">
                        <h3>User Account</h3>
                    
                    <div className="row">
                    <div className="col-md-6">
                      <AvGroup>            
                        <Label for='loginname'>Login Name</Label>
                        <AvInput name='loginname' id='loginname' required value={user.login_name} onChange={handleChange}  />
                        <AvFeedback>Please enter Login Name!</AvFeedback>            
                      </AvGroup>
                      </div>                    
                      <div className="col-md-6">
                      <AvGroup>            
                        <Label for='country'>Country</Label>
                        <AvInput name='country' id='country' value={user.country} onChange={handleChange} />
                        <AvFeedback>Please enter Country!</AvFeedback>            
                      </AvGroup>
                      </div>
                      <div className="col-md-6">
                      <AvGroup>            
                        <Label for='centre'>Centre</Label>
                        <AvInput name='centre' id='centre' value={user.centre} onChange={handleChange} />
                        <AvFeedback>Please enter a Centre Name!</AvFeedback>
                      </AvGroup>
                      </div>
                      <div className="col-md-6">
                        <AvGroup>
                          <Label for='userrole'>User Role</Label>
                          <AvInput type='select' name='userrole' id='userrole'required value={user.user_role} onChange={handleChange}>
                            <option value={user.user_role} selected>{user.user_role}</option>
                            <option value="Role 1">Role 1</option>
                            <option value="Role 2">Role 2</option>
                            <option value="Role 3">Role 3</option>
                            <option value="Role 4">Role 4</option>
                            <option value="Role 5">Role 5</option>
                          </AvInput>
                          <AvFeedback>Please select a User Role</AvFeedback>
                        </AvGroup>
                      </div>
                      <div className="col-md-6">
                      <AvGroup>            
                        <Label for='culture'>Culture</Label>
                        <AvInput name='culture' id='culture'required  value={user.culture}  onChange={handleChange} />
                        <AvFeedback>Please enter the Culture!</AvFeedback>
                      </AvGroup>
                      </div>
                      <div className="col-md-6">
                      <AvGroup>            
                        <Label for='timezone'>Timezone</Label>
                        <AvInput name='timezone' id='timezone'required value={user.timezone}  onChange={handleChange} />
                        <AvFeedback>Please enter the Timezone!</AvFeedback>
                      </AvGroup>
                      </div>
                      <div className="col-md-12">
                      <AvCheckboxGroup name="acc_dis">
                        <AvCheckbox customInput type="checkbox" value={user.acc_dis} label='Account is Disabled' name="acc_dis" id="acc_dis"  onChange={handleCheckboxChange} />
                      </AvCheckboxGroup>
                      <AvCheckboxGroup name='pass_never'>
                        <AvCheckbox customInput type="checkbox" label='Password never expires' name='pass_never' id="pass_never"  onChange={handleCheckboxChange} value={user.pass_never} />
                      </AvCheckboxGroup>
                      <AvCheckboxGroup name='must_change'>
                        <AvCheckbox customInput type="checkbox" label='User must change password at next login' id="must_change" name='must_change' onChange={handleCheckboxChange} value={user.must_change} />
                      </AvCheckboxGroup>
                      <AvCheckboxGroup name='cant_change'>
                        <AvCheckbox customInput type="checkbox" label='User cannot change password' name='cant_change' id="cant_change"  onChange={handleCheckboxChange} value={user.cant_change} />
                      </AvCheckboxGroup>
                      </div>                                                            
                    </div>
                    
                    
                    </div>
                    <div className="col-md-6">
                        <h3>Contact Information</h3>
                    
                    <div className="row">
                    <div className="col-md-6">
                      <AvGroup>            
                        <Label for='title'>User Title</Label>
                        <AvInput name='title' id='title' value={user.user_title} onChange={handleChange} />
                        <AvFeedback>Please enter Title!</AvFeedback>            
                      </AvGroup>
                    </div>
                    
                    <div className="col-md-6">
                      <AvGroup>            
                        <Label for='firstname'>First Name</Label>
                        <AvInput name='firstname' id='firstname'required value={user.first_name} onChange={handleChange}/>
                        <AvFeedback>Please enter First Name!</AvFeedback>            
                      </AvGroup>
                      </div>
                      <div className="col-md-6">
                      <AvGroup>            
                        <Label for='lastname'>Last Name</Label>
                        <AvInput name='lastname' id='lastname'required value={user.last_name} onChange={handleChange} />
                        <AvFeedback>Please enter Last Name!</AvFeedback>            
                      </AvGroup>
                      </div>
                      <div className="col-md-6">
                      <AvGroup>            
                        <Label for='email'>Email</Label>
                        <AvInput type="email" name='email' id='email'required value={user.email} onChange={handleChange} />
                        <AvFeedback>Please enter an Email ID!</AvFeedback>            
                      </AvGroup>
                      </div>
                      <div className="col-md-6">
                      <AvGroup>            
                        <Label for='street_address'>Street Address</Label>
                        <AvInput name='street_address' id='street_address' value={user.street_address} onChange={handleChange} />
                        <AvFeedback>Please enter a Street Address Name!</AvFeedback>
                      </AvGroup>
                      </div>
                      <div className="col-md-6">
                      <AvGroup>            
                        <Label for='city'>City</Label>
                        <AvInput name='city' id='city' value={user.city} onChange={handleChange} />
                        <AvFeedback>Please enter the City!</AvFeedback>
                      </AvGroup>
                      </div>
                      <div className="col-md-6">
                      <AvGroup>            
                        <Label for='phone_1'>Phone 1</Label>
                        <AvInput name='phone_1' id='phone_1' value={user.phone_1} onChange={handleChange} />
                        <AvFeedback>Please enter the Phone 1!</AvFeedback>
                      </AvGroup>
                      </div>
                      <div className="col-md-6">
                      <AvGroup>            
                        <Label for='phone_2'>Phone 2</Label>
                        <AvInput name='phone_2' id='phone_2' value={user.phone_2} onChange={handleChange} />
                        <AvFeedback>Please enter the Phone 2!</AvFeedback>
                      </AvGroup>
                      </div>
                      <div className="col-md-6">
                      <AvGroup>            
                        <Label for='fax'>Fax</Label>
                        <AvInput name='fax' id='fax' value={user.fax} onChange={handleChange}/>
                        <AvFeedback>Please enter the Fax number!</AvFeedback>
                      </AvGroup>
                      </div>
                      <div className="col-md-6">
                      <AvGroup>
                        <Label for='dob'>DOB</Label>
                        <DatePicker peekNextMonth showMonthDropdown showYearDropdown dropdownMode= "scroll" className="form-control" dateFormat="dd-MM-yyyy" name="dobs" id="dobs" value={startDate} selected={startDate} onChange={ date => setStartDate(date)} onMouseLeave={handleChange} />
                        
                        <AvInput value={user.dob} name="dateofbirth" id="dateofbirth" onMouseLeave={handleChange} className="" /> 
                        <AvFeedback>Please enter your DOB!</AvFeedback>
                      </AvGroup>
                      </div>
                      <div className="col-md-12">
                      <Button color='primary' type='submit' className="float-right" onMouseOver={focus}>
                        Update User
                      </Button>                 
                      </div> 
                    </div>
                    
                    
                    </div>
                    
                    </div>
                    </div>
                    </AvForm>
                  </CardBody>
                </Card>
                </Col>
                </Row>
                </Fragment>
                </div>
                </div>
                </div>
              
      );      
    }

    export default Edit;