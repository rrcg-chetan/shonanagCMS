import React, { useState, Fragment, Component, useEffect, PureComponent } from 'react';
//import ReactDOM from 'react-dom';
//import NavBar from '../Components/navbar/NavBar';
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

//import Flatpickr from 'react-flatpickr'
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
import { ContinuousColorLegend } from 'react-vis';

class InitialPresentation extends React.Component {
  constructor(props){
    super(props);
    let param = this.props.location.pathname;
    const code = param.split("/").pop()    
    //console.log(code)    
    this.state = {            
        code: code,
        patients: [],  
        isLoading: true,
        errors: null,
        /*patientmetastases_types: [
          { text: 'Liver', checked: true },
          { text: 'Lung', checked: false },
          { text: 'Bone', checked: false },
          { text: 'Brain', checked: false },
          { text: 'Ovaries', checked: false },
          { text: 'Adrenal', checked: false },
          { text: 'Other', checked: false },
        ],  */       
        /*metastases_types: {
            Liver: false,
            Lung: false,
            Bone: false,
            Brain: false,
            Ovaries: false,
            Adrenal: false,
            Other: false,
          },*/
          /*first_treatment_given:{
            Surgery: false,
            Chemotherapy: false,
            Targeted_therapy: false,
            Immunotherapy: false,
            Hormone_therapy: false,
            Radiotherapy: false,
            Trial: false,
            Alternative_therapy: false,
            Declined_all_therapies: false,
          },    */
    };
    this.showMetastasesComp = this.showMetastasesComp.bind(this);
    this.hideMetastasesComp = this.hideMetastasesComp.bind(this);
    this.showOtherTypesMetastases = this.showOtherTypesMetastases.bind(this);
    this.hideOtherTypesMetastases = this.hideOtherTypesMetastases.bind(this);
    this.showGermlineComponent = this.showGermlineComponent.bind(this);
    this.hideGermlineComponent = this.hideGermlineComponent.bind(this);
    this.showOtherGenetics = this.showOtherGenetics.bind(this);
    this.hideOtherGenetics = this.hideOtherGenetics.bind(this);
    this.handleInputMetastasesChange = this.handleInputMetastasesChange.bind(this);
    this.handleInputTreatmentChange = this.handleInputTreatmentChange.bind(this);    
    /*this.handleChange = this.handleChange.bind(this);
    this.sendInitialPresentationDetails = this.sendInitialPresentationDetails.bind(this);*/
    //console.log(code)
  }

  onToggle(index, e){
  	let newItems = this.state.patientmetastases_types.slice();
		newItems[index].checked = !newItems[index].checked
  	this.setState({
    	metastases_types: newItems
    })
    console.log(this.state.metastases_types)
  }

  onToggleTreatment(index, e){
  	let newItemsTreat = this.state.patientfirst_treatment_given.slice();
		newItemsTreat[index].checked = !newItemsTreat[index].checked
  	this.setState({
    	first_treatment_given: newItemsTreat
    })
    console.log(this.state.first_treatment_given)
  }

  componentDidMount() {
    axios.get(`http://localhost:4000/getfulldetails/${this.state.code}`)
    .then(response =>
        response.data.results.map(patient => ({
            presentation: `${patient.presentation}`, at_diagnosis: `${patient.at_diagnosis}`, laterality: `${patient.laterality}`, ct: `${patient.ct}`, ct_based_one: `${patient.ct_based_one}`, cn: `${patient.cn}`, cn_bases_on: `${patient.cn_bases_on}`, cm: `${patient.cm}`, cm_based_on: `${patient.cm_based_on}`, metastases: `${patient.metastases}`, total_number_of_metastatus: `${patient.total_number_of_metastatus}`, metastases_types: `${patient.metastases_types}`, other_metastases_types: `${patient.other_metastases_types}`, first_treatment_given: `${patient.first_treatment_given}`, germline_testing: `${patient.germline_testing}`, genetic_testing_done: `${patient.genetic_testing_done}`, genetic_testing_done_and_other: `${patient.genetic_testing_done_and_other}`, pregnancy_associated_b_c: `${patient.pregnancy_associated_b_c}`, treatment_text: `${patient.treatment_text}`, metastasestext: `${patient.metastasestext}`, code: `${patient.code}`,                  
        })),
        //console.log(this.patient)
    )
    .then(patients => {
        this.setState({
          patients,
          isLoading: false,
          metastasesv: patients[0].metastases,
          germlinetesting: patients[0].germline_testing,
          othergermlinetesting: patients[0].genetic_testing_done,
          familyhavecancer: patients[0].family_have_cancer,
          typesofmetastases: patients[0].metastases_types,
          patientmetastases_types: JSON.parse(patients[0].metastases_types),
          patientfirst_treatment_given: JSON.parse(patients[0].first_treatment_given)
          /*pregnancy: patients[0].pregnancy_associated_b_c
          whichrelative: patients[0].which_relative*/
        });
        //document.getElementById('metastases_types')[1].style.display='none';
        console.log(this.state.patientfirst_treatment_given)
        if(this.state.metastasesv == 'Yes'){
          this.setState({ showMetastases: true })
        }
        if(this.state.germlinetesting == 'Yes'){
          this.setState({ showGermLine: true })
        }
        if(this.state.othergermlinetesting == 'Other'){
          this.setState({ showGenetics: true })
        }
        /*if(this.state.pregnancy == 'Yes'){
          this.setState({ show: true })
        }
        if(this.state.whichrelative == 'Other'){
          this.setState({ showOtherCancer: true })
        }*/
    })
    .catch(error => this.setState({ error, isLoading: false })); 
    
}; 

getCheckedData() {
    return this.state.patientmetastases_types.map((item, i) => {
      var check = item.checked;
      //console.log(check)
      if(check == true){
        //console.log(check);
        return (<div className="col-md-2"><AvCheckbox customInput label={item.text} value={item.text} onChange={this.onToggle.bind(this, i)} checked /></div>) 
      }else{
        return (<div className="col-md-2"><AvCheckbox customInput label={item.text} value={item.text} onChange={this.onToggle.bind(this, i)} /></div>) 
      }
    }    
    )
}

getTreatmentCheckedData() {
  return this.state.patientfirst_treatment_given.map((item, i) => {
    var check = item.checked;
    //console.log(check)
    if(check == true){
      //console.log(check);
      return (<div className="col-md-2"><AvCheckbox customInput label={item.text} value={item.text} onChange={this.onToggleTreatment.bind(this, i)} checked /></div>) 
    }else{
      return (<div className="col-md-2"><AvCheckbox customInput label={item.text} value={item.text} onChange={this.onToggleTreatment.bind(this, i)} /></div>) 
    }
  }    
  )
}

handleInputMetastasesChange = (e) =>{
    var {name, checked} = e.target;
 
     this.setState((e) =>{
       var SelectedMetastases = e.metastases_types
       this.state.metastases_types = Object.keys(this.state.typesofmetastases).filter((x) => this.state.typesofmetastases[x]);
       //document.getElementById("metastasestext").value += name
       console.log(name)     
       //return SelectedMetastases[name] = checked        
     });    
   };

  handleInputTreatmentChange = (e) =>{
    var {name, checked} = e.target;
 
     this.setState((e) =>{
       var SelectedTreatment = e.first_treatment_given  
       this.state.treatment_text = Object.keys(this.state.first_treatment_given).filter((x) => this.state.first_treatment_given[x]);;     
       return SelectedTreatment[name] = checked
     });    
   };

  sendInitialPresentationDetails = e => {   
    //alert(this.state.metastases_types)
    //alert(this.state.code)
    const { history } = this.props;
   axios.post(`http://localhost:4000/updatepatientdetails`, { presentation: this.state.presentation, at_diagnosis: this.state.at_diagnosis, laterality: this.state.laterality, ct: this.state.ct, ct_based_one: this.state.ct_based_one, cn: this.state.cn, cn_bases_on: this.state.cn_bases_on, cm: this.state.cm, cm_based_on: this.state.cm_based_on, metastases: this.state.metastases, total_number_of_metastatus: this.state.total_number_of_metastatus, metastases_types: JSON.stringify(this.state.metastases_types), other_metastases_types: this.state.other_metastases_types, first_treatment_given: JSON.stringify(this.state.first_treatment_given), germline_testing: this.state.germline_testing, genetic_testing_done: this.state.genetic_testing_done, genetic_testing_done_and_other: this.state.genetic_testing_done_and_other, pregnancy_associated_b_c: this.state.pregnancy_associated_b_c, treatment_text: this.state.treatment_text, metastasestext: this.state.metastasestext, code: this.state.code })
    .then(function (response) {
    //console.log(JSON.stringify(response.data));
    if(response.data.success === 'Sucessfully Updated!'){            
      //let history = useHistory();
      //const { history } = this.props;
      //this.context.history.push(`/initial-presentation/${code}`);
      history.push(`/pathology/edit/${response.data.value}`)
    }else{
      
    }
  })
  };

  showMetastasesComp(name) {
    switch (name) {
      case "showMetastases":
        this.setState({ showMetastases: true, required: false });              
        break;            
    }
  }        
  hideMetastasesComp(name) {
    switch (name) {
      case "hideMetastases":
        this.setState({ showMetastases: false, showOtherMetastases:false, required: true });        
        break;            
    }
  } 
  
  showOtherTypesMetastases(name) {
    switch (name) {
      case "showOtherMetastases":
        this.setState({ showOtherMetastases: true, required: false });
        break;            
    }
  }
  hideOtherTypesMetastases(name) {
    switch (name) {
      case "hideOtherMetastases":
        this.setState({ showOtherMetastases: false, required: true });              
        //showOtherMetastases
        break;            
    }
  }
  
  showGermlineComponent(name) {
    switch (name) {
      case "showGermLine":
        this.setState({ showGermLine: true, genetic_testing_done: "", showOtherGermline: false });
        this.state.genetic_testing_done = ''
        break;            
    }

    /*if(document.getElementById("germline_testing").value == "Yes"){
        this.setState({ showGermLine: true, showOtherGermline: false });
        this.state.germline_testing = name
    }else{
        this.setState({ showGermLine: false, showOtherGermline: false });
        //this.state.genetic_testing_done_and_other = ""
        this.state.germline_testing = name
    }*/

  }
  hideGermlineComponent(name) {
    switch (name) {
      case "hideGermLine":
        this.setState({ showGermLine: false, genetic_testing_done: "", showOtherGermline: false });   
        this.setState({ showGenetics: false, showOtherGenetics: false }); 
        this.state.genetic_testing_done = ''          
        break;            
    }
  }

  showOtherGenetics(name) {
    //alert(name)
    if(document.getElementById("genetic_testing_done").value == "Other"){
        this.setState({ showGenetics: true, showOtherGenetics: true });    
        this.state.genetic_testing_done = name
    }else{
        this.setState({ showGenetics: false, genetic_testing_done_and_other: "", showOtherGenetics: false });
        this.state.genetic_testing_done_and_other = ""
        this.state.genetic_testing_done = name
    }
  }
  hideOtherGenetics(name) {
    switch (name) {
      case "hideGenetics":
        this.setState({ showGenetics: false, showOtherGenetics: false });              
        break;            
    }
  }

  render(){          
    const { showMetastases, showOtherMetastases, showGermLine, showGenetics, isLoading, patients } = this.state;
    const { history } = this.props;

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
              <h1 className="animate__animated animate__fadeIn">Patient's Initial Presentation</h1>
            </CardHeader>
            <CardBody>
                {!isLoading ? (
                    patients.map(patient => {
                    const { presentation, at_diagnosis, laterality, ct, ct_based_one, cn, cn_bases_on, cm, cm_based_on, metastases, total_number_of_metastatus, metastases_types, other_metastases_types, first_treatment_given, germline_testing, genetic_testing_done, genetic_testing_done_and_other, pregnancy_associated_b_c, treatment_text, metastasestext, code, isLoading} = patient;
                    /*var metas = Object.keys(patient.metastases_types).filter((x) => patient.metastases_types[x]);
                    var treat = Object.keys(this.state.first_treatment_given).filter((x) => this.state.first_treatment_given[x]);
                    */                    

                    return (
              <AvForm  onSubmit= {() => this.sendInitialPresentationDetails()}>
              <div className="row">
              <div className="col-md-4">
                <AvGroup>            
                  <Label for='presentation'>Presentation</Label>
                  <AvInput type='select' name='presentation' id='presentation'required value={patient.presentation} onChange={(e) => this.setState({ presentation: e.target.value})}>
                      <option value="" selected>Select</option>
                      <option value="Screen Detected">Screen Detected</option>
                      <option value="Symptomatic">Symptomatic</option>                            
                    </AvInput>
                  <AvFeedback>Please select Presentation!</AvFeedback>
                </AvGroup>
                </div>
                <div className="col-md-4">
                  <AvGroup>            
                    <Label for='at_diagnosis'>At diagnosis</Label>
                    <AvInput type='select' name='at_diagnosis' id='at_diagnosis'required value={patient.at_diagnosis} onChange={(e) => this.setState({ at_diagnosis: e.target.value})}>
                        <option value="" selected>Select</option>
                        <option value="Early">Early</option>
                        <option value="Locally Advanced">Locally Advanced</option>                            
                      </AvInput>
                    <AvFeedback>Please select At diagnosis!</AvFeedback>
                  </AvGroup>
                </div>
                <div className="col-md-4">
                  <AvGroup>            
                    <Label for='laterality'>Laterality</Label>
                    <AvInput type='select' name='laterality' id='laterality'required value={patient.laterality} onChange={(e) => this.setState({ laterality: e.target.value})}>
                        <option value="" selected>Select</option>
                        <option value="Right">Right</option>
                        <option value="Left">Left</option>
                        <option value="Bilateral">Bilateral</option>                            
                      </AvInput>
                    <AvFeedback>Please select Laterality!</AvFeedback>
                  </AvGroup>
                </div>
                <div class="col-md-12 mt-2"><h4>Original clinical stage</h4><hr /></div>
                <div className="col-md-1">
                  <AvGroup>            
                    <Label for='ct'>cT</Label>
                    <AvInput type='select' name='ct' id='ct'required value={patient.ct} onChange={(e) => this.setState({ ct: e.target.value})}>
                        <option value="" selected>Select</option>
                        <option value="X">X</option>
                        <option value="1">1</option>
                        <option value="2">2</option>                            
                        <option value="3">3</option>
                        <option value="4">4</option>                            
                        <option value="5">5</option>                            
                      </AvInput>
                    <AvFeedback>Please select cT!</AvFeedback>
                  </AvGroup>
                </div>
                <div className="col-md-3">
                  <AvGroup>            
                    <Label for='ct_based_one'>Based On cT</Label>
                    <AvInput type='select' name='ct_based_one' id='ct_based_one'required value={patient.ct_based_one} onChange={(e) => this.setState({ ct_based_one: e.target.value})}>
                        <option value="" selected>Select</option>
                        <option value="Clinical">Clinical</option>
                        <option value="Mammorgam">Mammorgam</option>
                        <option value="MRI">MRI</option>                            
                        <option value="Ultrasound">Ultrasound</option>
                      </AvInput>
                    <AvFeedback>Please select Based on cT!</AvFeedback>
                  </AvGroup>
                </div>

                <div className="col-md-1">
                  <AvGroup>            
                    <Label for='cn'>cN</Label>
                    <AvInput type='select' name='cn' id='cn'required value={patient.cn} onChange={(e) => this.setState({ cn: e.target.value})}>
                        <option value="" selected>Select</option>
                        <option value="X">X</option>
                        <option value="0">0</option>                            
                        <option value="1">1</option>
                        <option value="2">2</option>                            
                        <option value="3">3</option>                                                                        
                      </AvInput>
                    <AvFeedback>Please select cN!</AvFeedback>
                  </AvGroup>
                </div>
                <div className="col-md-3">
                  <AvGroup>            
                    <Label for='cn_bases_on'>Based On cN</Label>
                    <AvInput type='select' name='cn_bases_on' id='cn_bases_on'required value={patient.cn_bases_on} onChange={(e) => this.setState({ cn_bases_on: e.target.value})}>
                    <option value="" selected>Select</option>
                        <option value="Clinical">Clinical</option>
                        <option value="Mammorgam">Mammorgam</option>
                        <option value="MRI">MRI</option>                            
                        <option value="Ultrasound">Ultrasound</option>                           
                      </AvInput>
                    <AvFeedback>Please select Based on cN!</AvFeedback>
                  </AvGroup>
                </div>

                <div className="col-md-1">
                  <AvGroup>            
                    <Label for='cm'>cM</Label>
                    <AvInput type='select' name='cm' id='cm'required value={patient.cm} onChange={(e) => this.setState({ cm: e.target.value})}>
                        <option value="" selected>Select</option>
                        <option value="X">X</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                      </AvInput>
                    <AvFeedback>Please select cM!</AvFeedback>
                  </AvGroup>
                </div>
                <div className="col-md-3">
                  <AvGroup>            
                    <Label for='cm_based_on'>Based On cM</Label>
                    <AvInput type='select' name='cm_based_on' id='cm_based_on'required value={patient.cm_based_on} onChange={(e) => this.setState({ cm_based_on: e.target.value})}>
                        <option value="" selected>Select</option>
                        <option value="Clinical">Clinical</option>
                        <option value="CT Scan">CT Scan</option>
                        <option value="Bone Scan">Bone Scan</option>                            
                        <option value="Pet-CT Scan">Pet-CT Scan</option>
                        <option value="Pet-MRI">Pet-MRI</option>                        
                      </AvInput>
                    <AvFeedback>Please select Based on cT!</AvFeedback>
                  </AvGroup>
                </div>
                <div className="col-md-2">
                <Label for='metastases'>Metastases</Label>
                <AvRadioGroup name='metastases' required value={patient.metastases} onChange={(e) => this.setState({ metastases: e.target.value})} >
                  <div className="row">
                    <div className="col-md-6"><AvRadio customInput label='Yes' value='Yes' onClick={ () => this.showMetastasesComp("showMetastases") } /></div>
                    <div className="col-md-6"><AvRadio customInput label='No' value='No' onClick={ () => this.hideMetastasesComp("hideMetastases") } /></div>
                  </div>
                </AvRadioGroup>
                </div>
                {showMetastases && (    
                <>
                <div className="col-md-4">
                <Label for='total_number_of_metastatus'>Total number of metastases</Label>
                <AvRadioGroup name='total_number_of_metastatus' required value={patient.total_number_of_metastatus} onChange={(e) => this.setState({ total_number_of_metastatus: e.target.value})} >
                  <div className="row">
                    <div className="col-md-6"><AvRadio customInput label='Less than 5' value='Less than 5' /></div>
                    <div className="col-md-6"><AvRadio customInput label='More than 5' value='More than 5' /></div>                          
                  </div>                  
                </AvRadioGroup>
                
                </div> 
                  <div className="col-md-12"></div>
                  <div className="col-md-8">
                  <Label for='type_of_metastases'>Types of Metastases</Label>
                  <AvCheckboxGroup name='metastases_types' id="metastases_types" >
                    <div className="row">
                      {this.getCheckedData()}
                    </div>
                  </AvCheckboxGroup>
                  </div> 
                  </>
                )}     
                {showOtherMetastases && (
                  <div className="col-md-3">
                  <AvGroup>
                    <Label for='other_metastases_types'>If Other Please mention metastases</Label>
                    <AvField name='other_metastases_types' id='other_metastases_types' value={patient.other_metastases_types} onChange={(e) => this.setState({ other_metastases_types: e.target.value})} required />
                    <AvFeedback>Please enter the If Other Please mention metastases!</AvFeedback>
                  </AvGroup>
                  </div>
                )}                          
                <div className="col-md-12"></div>
                
                  <hr />
                  <div className="col-md-12">
                  <Label for='first_treatment_given'><h4>First treatment given</h4></Label>
                  <AvCheckboxGroup name='first_treatment_given' >
                    <div className="row">
                      {this.getTreatmentCheckedData()}                    
                    </div>
                  </AvCheckboxGroup>                  
                  </div>
                <div className="col-md-12"></div>
                <div className="col-md-4">
                <Label for='germline_testing'>Germline testing done</Label>
                <AvRadioGroup name='germline_testing' required value={patient.germline_testing} onChange={(e) => this.setState({ germline_testing: e.target.value})} >
                  <div className="row">
                    <div className="col-md-6"><AvRadio customInput label='Yes' value='Yes' onClick={ () => this.showGermlineComponent("showGermLine") } /></div>
                    <div className="col-md-6"><AvRadio customInput label='No' value='No' onClick={ () => this.hideGermlineComponent("hideGermLine") } /></div>
                  </div>
                </AvRadioGroup>
                </div>
                {showGermLine && (    
                <>
                <div className="col-md-3">
                  <AvGroup>            
                    <Label for='genetic_testing_done'>Genetics</Label>
                    <AvInput type='select' name='genetic_testing_done' id='genetic_testing_done'required value={patient.genetic_testing_done} onChange={(e) => this.showOtherGenetics(e.target.value )}>
                        <option value="" selected>Select</option>
                        <option value="BRCA 1">BRCA 1</option>
                        <option value="BRCA 2">BRCA 2</option>
                        <option value="PALB2"> PALB2</option>                            
                        <option value="ATM">ATM</option>
                        <option value="CHEK 2">CHEK 2</option>                        
                        <option value="Other">Other</option>                        
                      </AvInput>
                    <AvFeedback>Please select Genetics!</AvFeedback>
                  </AvGroup>
                </div>
                </>
                )}
                {showGenetics && (
                  <div className="col-md-3">
                  <AvGroup>
                    <Label for='genetic_testing_done_and_other'>If Other Please mention Genetics</Label>
                    <AvField name='genetic_testing_done_and_other' id='genetic_testing_done_and_other' value={patient.genetic_testing_done_and_other} onChange={(e) => this.setState({ genetic_testing_done_and_other: e.target.value})} required />
                    <AvFeedback>Please enter the If Other Please mention Genetics!</AvFeedback>
                  </AvGroup>
                  </div>
                )} 
                <div className="col-md-12"></div>
                <div className="col-md-4">
                <Label for='pregnancy_associated_b_c'>Pregnancy associated breast cancer:</Label>
                <AvRadioGroup name='pregnancy_associated_b_c' required value={patient.pregnancy_associated_b_c} onChange={(e) => this.setState({ pregnancy_associated_b_c: e.target.value})} >
                  <div className="row">
                    <div className="col-md-6"><AvRadio customInput label='Yes' value='Yes' /></div>
                    <div className="col-md-6"><AvRadio customInput label='No' value='No' /></div>
                  </div>
                </AvRadioGroup>
                </div>
                <div className="col-md-12">
                <Button color='primary' type='submit' disabled={ !presentation.length || !at_diagnosis.length || !laterality.length || !ct.length || !ct_based_one.length || !cn.length || !cn_bases_on.length || !cm.length || !cm_based_on.length || !metastases.length || !first_treatment_given.length || !germline_testing.length } onClick={ () => this.sendInitialPresentationDetails }>
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

export default withRouter(InitialPresentation);