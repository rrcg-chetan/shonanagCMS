/*import React, {Component} from 'react'
import { useParams } from 'react-router'
class Pathology extends Component {
    constructor(props){
        super(props);  
        let param = this.props.location.pathname;
        const code = param.split("/").pop()       
        this.state = {
            code:code
        }        
    }
    render() {        
        const {code} = this.state
        return (
            <div>
                {code}
            </div>
        );
    }
}

export default Pathology*/




import React, { useState, Fragment, Component, useEffect, PureComponent } from 'react';

import EditSideBar from '../Components/sidebar/EditSideBar';
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

class EditPathology extends React.Component {
  constructor(props){
    super(props);
    let param = this.props.location.pathname;
    const code = param.split("/").pop()   
    this.state = {            
        code: code,
        patients: [],  
        isLoading: true,
        errors: null,
    };
    //this.showType = this.showType.bind(this);
    this.hideType = this.hideType.bind(this);
    this.showHER2 = this.showHER2.bind(this);
    this.hideHER2 = this.hideHER2.bind(this);
    /*this.handleInputMetastasesChange = this.handleInputMetastasesChange.bind(this);
    this.handleInputTreatmentChange = this.handleInputTreatmentChange.bind(this);      */  
    //console.log(code)
  }

  componentDidMount() {
    axios.get(`http://localhost:4000/getfulldetails/${this.state.code}`)
    .then(response =>
        response.data.results.map(patient => ({
            pathology_type: `${patient.pathology_type}`, pathology_type_if_other: `${patient.pathology_type_if_other}`, pathology_grade: `${patient.pathology_grade}`, code: `${patient.code}`, pt: `${patient.pt}`, pn: `${patient.pn}`, ypt: `${patient.ypt}`, ypn: `${patient.ypn}`, pathological_size_of_cancer: `${patient.pathological_size_of_cancer}`, er: `${patient.er}`, pr: `${patient.pr}`, her2: `${patient.her2}`, if_2_plus: `${patient.if_2_plus}`,
        })),
        //console.log(this.patient)
    )
    .then(patients => {
        this.setState({
          patients,
          isLoading: false,
          pathologytype: patients[0].pathology_type,
          her2data: patients[0].her2,
          /*othergermlinetesting: patients[0].genetic_testing_done,
          familyhavecancer: patients[0].family_have_cancer,
          typesofmetastases: patients[0].metastases_types,
          pregnancy: patients[0].pregnancy_associated_b_c
          whichrelative: patients[0].which_relative*/
        });
        //document.getElementById('metastases_types')[1].style.display='none';
        console.log(this.state.patients)
        if(this.state.pathologytype == 'Other'){
          this.setState({ showType: true })
        }
        if(this.state.her2data == '2' || this.state.her2data == '3+'){
          this.setState({ showHER2: true })          
        }        
    })
    .catch(error => this.setState({ error, isLoading: false })); 
    
}; 

  sendPathologyDetails = e => {   
    //alert(this.state.metastases_types)
    //alert(this.state.code)
    const { history } = this.props;
   axios.post(`http://localhost:4000/updatepatientdetails`, { pathology_type: this.state.pathology_type, pathology_type_if_other: this.state.pathology_type_if_other, pathology_grade: this.state.pathology_grade, code: this.state.code, pt: this.state.pt, pn: this.state.pn, ypt: this.state.ypt, ypn: this.state.ypn, pathological_size_of_cancer: this.state.pathological_size_of_cancer, er: this.state.er, pr: this.state.pr, her2: this.state.her2, if_2_plus: this.state.if_2_plus })
    .then(function (response) {
    if(response.data.success === 'Sucessfully Updated!'){            
      history.push(`/treatment/edit/${response.data.value}`)
    }else{
      
    }
  })
  };
  
  showHER2(name) {
    //console.log(document.getElementById("her2").value)
    if(document.getElementById("her2").value == "2" || document.getElementById("her2").value == "3+"){
        this.setState({ showHER2: true });   
        this.state.her2 = name 
    }else{
        this.setState({ showHER2: false }); 
        this.state.her2 = name        
    }
  }        
  hideHER2(name) {
    switch (name) {
      case "hideHER2":
        this.setState({ showHER2: false });        
        break;            
    }
  }


  showType(name) {
    //console.log(name)
    if(document.getElementById("pathologytype").value == "Other"){
        this.setState({ showType: true });   
        this.state.pathology_type = name 
    }else{
        this.setState({ showType: false }); 
        this.state.pathology_type = name        
    }
  }

  hideType(name) {
    switch (name) {
      case "hideType":
        this.setState({ showType: false });              
        break;            
    }
  }

  render(){         
    const { showType, showHER2, isLoading, patients } = this.state; 
    const { history } = this.props;

    /*var metas = Object.keys(this.state.metastases_types).filter((x) => this.state.metastases_types[x]);
    var treat = Object.keys(this.state.first_treatment_given).filter((x) => this.state.first_treatment_given[x]);*/
return (
  <div>
        <EditSideBar   />
        <div className="content-wrapper animate__animated animate__fadeIn">
        <div className="app-content content overflow-hidden">
        
          <Fragment>
          <Row>
          <Col sm='12'>
          <Card>
            <CardHeader>
              <h1 className="animate__animated animate__fadeIn">Pathology</h1>
            </CardHeader>
            <CardBody>
                {!isLoading ? (
                    patients.map(patient => {
                        const { pathologytype, pathology_type, pathology_type_if_other, pathology_grade, code, pt, pn, ypt, ypn, pathological_size_of_cancer, er, pr, her2, if_2_plus } = patient; 
                        return (
              <AvForm  onSubmit= {() => this.sendPathologyDetails()}>
              <div className="row">
                
                <div className="col-md-4">
                  <AvGroup>            
                    <Label for='pathologytype'>Type</Label>
                    <AvInput type='select' name='pathologytype' id='pathologytype' required value={patient.pathology_type} onChange={(e) => this.showType(e.target.value)}>
                        <option value="" selected>Select</option>
                        <option value="Ductal">Ductal</option>
                        <option value="Lobular">Lobular</option> 
                        <option value="Not Classified">Not Classified</option> 
                        <option value="Other">Other</option>                        
                      </AvInput>
                      
                    <AvFeedback>Please select Type!</AvFeedback>
                  </AvGroup>
                </div>
                {showType && (
                  <div className="col-md-4">
                  <AvGroup>
                    <Label for='pathology_type_if_other'>If Other Type Please mention</Label>
                    <AvField name='pathology_type_if_other' id='pathology_type_if_other' value={patient.pathology_type_if_other} onChange={(e) => this.setState({ pathology_type_if_other: e.target.value})} required />
                    <AvFeedback>Please enter the If Other Type!</AvFeedback>
                  </AvGroup>
                  </div>
                )}  
                <div className="col-md-4">
                <Label for='pathology_grade'>Grade</Label>
                <AvRadioGroup name='pathology_grade' required value={patient.pathology_grade} onChange={(e) => this.setState({ pathology_grade: e.target.value})} >
                  <div className="row">
                    <div className="col-md-2"><AvRadio customInput label='Yes' value='Yes' /></div>
                    <div className="col-md-2"><AvRadio customInput label='No' value='No' /></div>
                    <div className="col-md-3"><AvRadio customInput label='Not Known' value='Not Known' /></div>
                  </div>
                  <AvFeedback>Please select the Grade!</AvFeedback>
                </AvRadioGroup>                
                </div>  
                <div className="col-md-12">Pathological stage of cancer<hr /></div>
                <div className="col-md-2">
                  <AvGroup>            
                    <Label for='pt'>pT</Label>
                    <AvInput type='select' name='pt' id='pt' required value={patient.pt} onChange={(e) => this.setState({ pt: e.target.value})}>
                        <option value="" selected>Select</option>
                        <option value="X">X</option>
                        <option value="1">1</option>
                        <option value="2">2</option>                            
                        <option value="3">3</option>
                        <option value="4">4</option>                        
                      </AvInput>
                    <AvFeedback>Please select pT!</AvFeedback>
                  </AvGroup>
                </div>
                <div className="col-md-2">
                  <AvGroup>            
                    <Label for='pn'>pN</Label>
                    <AvInput type='select' name='pn' id='pn' required value={patient.pn} onChange={(e) => this.setState({ pn: e.target.value})}>
                        <option value="" selected>Select</option>
                        <option value="X">X</option>
                        <option value="1">1</option>
                        <option value="2">2</option>                            
                        <option value="3">3</option>                                            
                      </AvInput>
                    <AvFeedback>Please select pN!</AvFeedback>
                  </AvGroup>
                </div>
                <div className="col-md-2">
                  <AvGroup>            
                    <Label for='ypt'>ypT</Label>
                    <AvInput type='select' name='ypt' id='ypt' required value={patient.ypt} onChange={(e) => this.setState({ ypt: e.target.value})}>
                        <option value="" selected>Select</option>
                        <option value="X">X</option>
                        <option value="1">1</option>
                        <option value="2">2</option>                            
                        <option value="3">3</option>                                            
                      </AvInput>
                    <AvFeedback>Please select ypT!</AvFeedback>
                  </AvGroup>
                </div>
                <div className="col-md-2">
                  <AvGroup>            
                    <Label for='ypn'>ypN</Label>
                    <AvInput type='select' name='ypn' id='ypn' required value={patient.ypn} onChange={(e) => this.setState({ ypn: e.target.value})}>
                        <option value="" selected>Select</option>
                        <option value="X">X</option>
                        <option value="1">1</option>
                        <option value="2">2</option>                            
                        <option value="3">3</option>                                            
                      </AvInput>
                    <AvFeedback>Please select ypN!</AvFeedback>
                  </AvGroup>
                </div>
                <div className="col-md-4">
                  <AvGroup>
                    <Label for='pathological_size_of_cancer'>Pathological size of cancer</Label>
                    <AvField type="number" placeholder="in CMS" name='pathological_size_of_cancer' id='pathological_size_of_cancer' value={patient.pathological_size_of_cancer} onChange={(e) => this.setState({ pathological_size_of_cancer: e.target.value})} required />
                    <AvFeedback>Please enter the Pathological size of cancer!</AvFeedback>
                  </AvGroup>
                </div>
                <div className="col-md-3">
                  <AvGroup>            
                    <Label for='er'>ER</Label>
                    <AvInput type='select' name='er' id='er' required value={patient.er} onChange={(e) => this.setState({ er: e.target.value})}>
                        <option value="" selected>Select</option>
                        <option value="X">X</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>                            
                        <option value="3">3</option>                                            
                        <option value="4">4</option>
                      </AvInput>
                    <AvFeedback>Please select ER!</AvFeedback>
                  </AvGroup>
                </div>
                <div className="col-md-3">
                  <AvGroup>            
                    <Label for='pr'>PR</Label>
                    <AvInput type='select' name='pr' id='pr' required value={patient.pr} onChange={(e) => this.setState({ pr: e.target.value})}>
                        <option value="" selected>Select</option>
                        <option value="X">X</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>                            
                        <option value="3">3</option>                                            
                        <option value="4">4</option>
                      </AvInput>
                    <AvFeedback>Please select PR!</AvFeedback>
                  </AvGroup>
                </div>
                <div className="col-md-3">
                  <AvGroup>            
                    <Label for='her2'>HER2</Label>
                    <AvInput type='select' name='her2' id='her2' required value={patient.her2} onChange={(e) => this.showHER2(e.target.value)}>
                        <option value="" selected>Select</option>
                        <option value="X">X</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>                            
                        <option value="3+">3+</option>                                                                    
                      </AvInput>
                    <AvFeedback>Please select HER2!</AvFeedback>
                  </AvGroup>
                </div>
                {showHER2 && (
                  <div className="col-md-3">
                  <AvGroup>
                    <Label for='if_2_plus'>If 2 + FISH</Label>
                    <AvRadioGroup name='if_2_plus' required value={patient.if_2_plus} onChange={(e) => this.setState({ if_2_plus: e.target.value})} >
                        <div className="row">
                            <div className="col-md-6"><AvRadio customInput label='Amplified' value='Amplified' /></div>
                            <div className="col-md-6"><AvRadio customInput label='Non-Amplified' value='Non-Amplified' /></div>
                        </div>
                    </AvRadioGroup>
                    <AvFeedback>Please select 2 + FISH!</AvFeedback>
                  </AvGroup>
                  </div>
                )}  
                <div className="col-md-12">
                <Button color='primary' type='submit' /*disabled={ !pathologytype.length || !pathology_grade.length || !pT.length || !pN.length || !ypT.length || !ypN.length || !pathological_size_of_cancer.length || !ER.length || !PR.length || !HER2.length }*/ onClick={ () => this.sendInitialPresentationDetails }>
                  Submit
                </Button>              
                </div>
              </div>
              </AvForm>
              );
            })
            ) : (
              <p>Loading...</p>
            )}
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

export default withRouter(EditPathology);
