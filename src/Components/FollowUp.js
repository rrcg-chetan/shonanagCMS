import React, { useState, Fragment, Component, useEffect, PureComponent } from 'react';

import SideBar from '../Components/sidebar/SideBar';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import classnames from 'classnames'
import {withRouter} from 'react-router-dom'
import moment from 'moment'

import './mainstyle.css';
import './animate.css';
import './vertical-menu.css';
import './perfect-scrollbar.css';

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
import axios from 'axios';

class FollowUp extends React.Component {
  constructor(props){
    super(props);
    let param = this.props.location.pathname;
    const code = param.split("/").pop()   
    this.state = {         
      code: code,     
      showFertilityOption: false,  
      showRecurrence: false,
      startDateDOR: "",
      startDateDOD: "",   
      startDateLFU: "",   
      showRecurrenceMetaStases: false,
              
      recurrence: "",
      dateofrecurrence: "",
      areaofrecurrence: [
      	{ text: 'Local', checked: false },
        { text: 'Regional', checked: false },
        { text: 'Contra lateral breast', checked: false },
        { text: 'Distant Metastases', checked: false },        
      ],      
      detectionofrecurrence: "",
      recurrenceifmetastases: "",
      recurrenceifmetastasesifother: "",
      lostfollowup: "",    
      dateofdeath: "",
      dateoflastfollowup: "",  
    };
    this.showRecurrence = this.showRecurrence.bind(this);
    this.handleChangeDOR = this.handleChangeDOR.bind(this);
    this.handleChangeDOD = this.handleChangeDOD.bind(this);
    this.handleChangeLFU = this.handleChangeLFU.bind(this);
    this.handleInputAreaOfRecurrenceChange = this.handleInputAreaOfRecurrenceChange.bind(this);
    this.showRecurrenceMetaStases = this.showRecurrenceMetaStases.bind(this);
    /*this.handleInputMetastasesChange = this.handleInputMetastasesChange.bind(this);
    this.handleInputTreatmentChange = this.handleInputTreatmentChange.bind(this);      */  
    //console.log(code)
  }

  sendFollowUpDetails = e => {   
    //alert(this.state.areaofrecurrence)
    //alert(this.state.code)
    const { history } = this.props;
   axios.post(`http://localhost:4000/patientfollowupdetails`, { recurrence: this.state.recurrence, fertilityoptionundertaken: this.state.fertilityoptionundertaken, dateofrecurrence: this.state.dateofrecurrence, areaofrecurrence: this.state.areaofrecurrence, detectionofrecurrence: this.state.detectionofrecurrence, recurrenceifmetastases: this.state.recurrenceifmetastases, recurrenceifmetastasesifother: this.state.recurrenceifmetastasesifother, lostfollowup: this.state.lostfollowup, dateofdeath: this.state.dateofdeath, dateoflastfollowup: this.state.dateoflastfollowup, code: this.state.code })
    .then(function (response) {
    if(response.data.success === 'Followup Sucessfully Submitted!'){            
      history.push(`/health-economics/${response.data.value}`)
    }else{
      
    }
  })
  };

  onToggle(index, e){
  	let newItems = this.state.areaofrecurrence.slice();
		newItems[index].checked = !newItems[index].checked
  	this.setState({
    	areaofrecurrence: newItems
    })
    console.log(this.state.areaofrecurrence)
  }

  handleInputAreaOfRecurrenceChange = (e) =>{
    var {name, checked} = e.target;
 
     this.setState((e) =>{
       var SelectedRecurrence = e.areaofrecurrence
       this.state.areaofrecurrence_text = Object.keys(this.state.areaofrecurrence).filter((x) => this.state.areaofrecurrence[x]);
       return SelectedRecurrence[name] = checked      
     });    
   };

  handleChangeDOR(date) {
    this.setState({
      startDateDOR: date,
      dateofrecurrence: moment(date).format('DD-MM-YYYY')
    })
  }

  handleChangeDOD(date) {
    this.setState({
      startDateDOD: date,
      dateofdeath: moment(date).format('DD-MM-YYYY')
    })
  }

  handleChangeLFU(date) {
    this.setState({
      startDateLFU: date,
      dateoflastfollowup: moment(date).format('DD-MM-YYYY')
    })
  }
  
  showRecurrence(name) {
    if(document.getElementById("recurrence").value == "Yes"){
      this.setState({ showRecurrence: true });   
      this.state.recurrence = name 
    }else{
        this.setState({ showRecurrence: false}); 
        this.state.recurrence = name        
    }
  }

  showRecurrenceMetaStases(name) {
    if(document.getElementById("recurrenceifmetastases").value == "Other"){
      this.setState({ showRecurrenceMetaStases: true });   
      this.state.recurrenceifmetastases = name 
    }else{
        this.setState({ showRecurrenceMetaStases: false, recurrenceifmetastasesifother: ""}); 
        this.state.recurrenceifmetastases = name        
    }
  }

  render(){          
    const { showRecurrence, showRecurrenceMetaStases, recurrence, dateofrecurrence, areaofrecurrence, areaofrecurrence_text, detectionofrecurrence, recurrenceifmetastases, recurrenceifmetastasesifother, lostfollowup, dateofdeath, dateoflastfollowup, code } = this.state; 
    const { history } = this.props;

    /*var metas = Object.keys(this.state.areaofrecurrence).filter((x) => this.state.areaofrecurrence[x]);
    var metas = Object.keys(this.state.areaofrecurrence).filter((x) => this.state.areaofrecurrence[x]);
    var treat = Object.keys(this.state.first_treatment_given).filter((x) => this.state.first_treatment_given[x]);*/
return (
  <div>
        <SideBar   />
        <div className="content-wrapper animate__animated animate__fadeIn">
        <div className="app-content content overflow-hidden1">
        
          <Fragment>
          {code}
          <Row>
          <Col sm='12'>
          <Card>
            <CardHeader>
              <h1 className="animate__animated animate__fadeIn">Follow Up</h1>
            </CardHeader>
            <CardBody>
              <AvForm  onSubmit= {() => this.sendFollowUpDetails()}>
              <div className="row">
                
                <div className="col-md-2">
                  <AvGroup>            
                    <Label for='recurrence'>Recurrence</Label>
                    <AvInput type='select' name='recurrence' id='recurrence' required value={this.state.recurrence} onChange={(e) => this.showRecurrence(e.target.value)}>
                        <option value="" selected>Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option> 
                        <option value="Not Required">Not Required</option>                         
                      </AvInput>                      
                    <AvFeedback>Please select Recurrence!</AvFeedback>
                  </AvGroup>
                </div>
                {showRecurrence && (
                  <>
                  <div className="col-md-2">
                    <AvGroup>
                        <Label for='dateofrecurrence'>Date of Recurrence</Label><br />
                        <DatePicker peekNextMonth showMonthDropdown showYearDropdown dropdownMode= "scroll" className="form-control w-100" dateFormat="dd-MM-yyyy" name="dateofrecurrence" id="dateofrecurrence" selected={this.state.startDateDOR} onSelect={this.handleSelect} onChange={this.handleChangeDOR} />                        
                        <AvFeedback>Please enter Date of Recurrence!</AvFeedback>
                      </AvGroup>
                  </div>
                  <div className="col-md-8">
                  <Label for='areofrecurrence'>Area of Recurrence</Label>
                  <AvCheckboxGroup name='areofrecurrence' >
                    <div className="row">
                    {this.state.areaofrecurrence.map((itemTreat, i) =>
                      <div className="col-md-2"><AvCheckbox customInput label={itemTreat.text} value={itemTreat.text} onChange={this.onToggle.bind(this, i)} /></div>                      
                    )} 
                    </div>
                  </AvCheckboxGroup>                  
                  </div> 
                  <div className="col-md-4">
                    <AvGroup>            
                        <Label for='detectionofrecurrence'>Detection of recurrence</Label>
                        <AvInput type='select' name='detectionofrecurrence' id='detectionofrecurrence' required value={this.state.detectionofrecurrence} onChange={(e) => this.setState({ detectionofrecurrence: e.target.value })}>
                            <option value="" selected>Select</option>
                            <option value="Surveillance">Surveillance</option>
                            <option value="Symptom">Symptom</option> 
                            <option value="Not Known">Not Known</option>                         
                        </AvInput>                      
                        <AvFeedback>Please select Detection of recurrence!</AvFeedback>
                    </AvGroup>
                    </div>
                    <div className="col-md-4">
                    <AvGroup>            
                        <Label for='recurrenceifmetastases'>If Metastases</Label>
                        <AvInput type='select' name='recurrenceifmetastases' id='recurrenceifmetastases' required value={this.state.recurrenceifmetastases} onChange={(e) => this.showRecurrenceMetaStases(e.target.value)}>
                            <option value="" selected>Select</option>
                            <option value="Liver">Liver</option>
                            <option value="Lung">Lung</option>
                            <option value="Bone">Bone</option>
                            <option value="Brain">Brain</option>
                            <option value="Ovaries">Ovaries</option>
                            <option value="Adrenal">Adrenal</option>
                            <option value="Other">Other</option>
                        </AvInput>                      
                        <AvFeedback>Please select If Metastases!</AvFeedback>
                    </AvGroup>
                  </div>
                  </>
                )}                                       
                {showRecurrenceMetaStases && (
                <div className="col-md-4">
                    <AvGroup>
                    <Label for='recurrenceifmetastasesifother'>If Other</Label>
                    <AvField placeholder="" name='recurrenceifmetastasesifother' id='recurrenceifmetastasesifother' value={this.state.recurrenceifmetastasesifother} onChange={(e) => this.setState({ recurrenceifmetastasesifother: e.target.value})} required />
                    <AvFeedback>Please enter the If Other!</AvFeedback>
                  </AvGroup>
                </div>
                )}     
                <div className="col-md-12"><hr /></div>
                <div className="col-md-4">
                <Label for='lostfollowup'>Lost to follow-up</Label>
                <AvRadioGroup name='lostfollowup' required value={this.state.lostfollowup} onChange={(e) => this.setState({ lostfollowup: e.target.value})} >
                  <div className="row">
                    <div className="col-md-6"><AvRadio customInput label='Yes' value='Yes' /></div>
                    <div className="col-md-6"><AvRadio customInput label='No' value='No' /></div>                    
                  </div>
                  <AvFeedback>Please select an Option!</AvFeedback>
                </AvRadioGroup>
                </div>
                <div className="col-md-4">
                  <AvGroup>
                      <Label for='dateofdeath'>Date of Death</Label><br />
                      <DatePicker peekNextMonth showMonthDropdown showYearDropdown dropdownMode= "scroll" className="form-control w-100" dateFormat="dd-MM-yyyy" name="dateofdeath" id="dateofdeath" selected={this.state.startDateDOD} onSelect={this.handleSelect} onChange={this.handleChangeDOD} />                        
                      <AvFeedback>Please enter Date of Death!</AvFeedback>
                    </AvGroup>
                </div>
                <div className="col-md-4">
                  <AvGroup>
                      <Label for='dateoflastfollowup'>Date of Last Follow Up</Label><br />
                      <DatePicker peekNextMonth showMonthDropdown showYearDropdown dropdownMode= "scroll" className="form-control w-100" dateFormat="dd-MM-yyyy" name="dateoflastfollowup" id="dateoflastfollowup" selected={this.state.startDateLFU} onSelect={this.handleSelect} onChange={this.handleChangeLFU} />                        
                      <AvFeedback>Please enter Date of Last Follow Up!</AvFeedback>
                    </AvGroup>
                </div>
                <div className="col-md-12">
                <Button color='primary' type='submit' disabled= { !recurrence || !lostfollowup || !dateofdeath || !dateoflastfollowup } onClick={ () => this.sendTreatmentDetails }>
                  Submit
                </Button>              
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
}

export default withRouter(FollowUp);
