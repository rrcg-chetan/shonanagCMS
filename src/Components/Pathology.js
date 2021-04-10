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

class Pathology extends React.Component {
  constructor(props){
    super(props);
    let param = this.props.location.pathname;
    const code = param.split("/").pop()   
    this.state = {            
      showType: false,              
      showHER2: false,
      code: code,  
      pathologytype: "",
      pathology_type: "",
      other_type: "",
      grade: "",    
      pT: "",
      pN: "",
      ypT: "",
      ypN: "",
      pathologicalsizeofcancer: "",
      ER: "",PR: "",
      HER2: "",
      showher: "",
    };
    this.showType = this.showType.bind(this);
    this.hideType = this.hideType.bind(this);
    this.showHER2 = this.showHER2.bind(this);
    this.hideHER2 = this.hideHER2.bind(this);
    /*this.handleInputMetastasesChange = this.handleInputMetastasesChange.bind(this);
    this.handleInputTreatmentChange = this.handleInputTreatmentChange.bind(this);      */  
    //console.log(code)
  }

  sendPathologyDetails = e => {   
    //alert(this.state.metastases_types)
    //alert(this.state.code)
    const { history } = this.props;
   axios.post(`http://localhost:4000/patientpathologydetails`, { pathologytype: this.state.pathologytype, other_type: this.state.other_type, grade: this.state.grade, code: this.state.code, pT: this.state.pT, pN: this.state.pN, ypT: this.state.ypT, ypN: this.state.ypN, pathologicalsizeofcancer: this.state.pathologicalsizeofcancer, ER: this.state.ER, PR: this.state.PR, HER2: this.state.HER2, showher: this.state.showher })
    .then(function (response) {
    if(response.data.success === 'Pathology Sucessfully Submitted!'){            
      history.push(`/treatment/${response.data.value}`)
    }else{
      
    }
  })
  };
  
  showHER2(name) {
    //console.log(document.getElementById("HER2").value)
    if(document.getElementById("HER2").value == "2" || document.getElementById("HER2").value == "3+"){
        this.setState({ showHER2: true });   
        this.state.HER2 = name 
    }else{
        this.setState({ showHER2: false }); 
        this.state.HER2 = name        
    }
  }        
  hideHER2(name) {
    switch (name) {
      case "hideHER2":
        this.setState({ showHER2: false });        
        break;            
    }
  }

  /*showType(name) {
    var type = document.getElementById("pathologytype").value
    //alert(type)
    document.getElementById("pathology_type").value = type
    if(document.getElementById("pathologytype").value == "Other"){
        this.setState({ showType: true });
        var type = document.getElementById("pathologytype").value
        alert(type)          
    }else{
        this.setState({ showType: false });
        var type = document.getElementById("pathologytype").value
        alert(type)
    }
  }*/

  showType(name) {
    //alert(name)
    //console.log(document.getElementById("pathology_type").value = name)
    //document.getElementById("pathology_type").value = name
    /*console.log(document.getElementById("pathologytype").length)
    if(document.getElementById("pathologytype").value == "Other"){
        this.setState({ showType: true });         
        this.state.pathologytype = name   
    }else{
        this.setState({ showType: false });
        //document.getElementById("pathology_type").value = name
        this.state.pathologytype = name   
    }*/

    if(document.getElementById("pathologytype").value == "Other"){
      this.setState({ showType: true });   
      this.state.pathologytype = name 
    }else{
        this.setState({ showType: false }); 
        this.state.pathologytype = name        
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
    const { showType, pathologytype, pathology_type, other_type, grade, code, pT, pN, ypT, ypN, pathologicalsizeofcancer, ER, PR, HER2, showHER2, showher } = this.state; 
    const { history } = this.props;

    /*var metas = Object.keys(this.state.metastases_types).filter((x) => this.state.metastases_types[x]);
    var treat = Object.keys(this.state.first_treatment_given).filter((x) => this.state.first_treatment_given[x]);*/
return (
  <div>
        <SideBar   />
        <div className="content-wrapper animate__animated animate__fadeIn">
        <div className="app-content content overflow-hidden">
        
          <Fragment>
          {code}
          <Row>
          <Col sm='12'>
          <Card>
            <CardHeader>
              <h1 className="animate__animated animate__fadeIn">Pathology</h1>
            </CardHeader>
            <CardBody>
              <AvForm  onSubmit= {() => this.sendPathologyDetails()}>
              <div className="row">
                
                <div className="col-md-4">
                  <AvGroup>            
                    <Label for='pathologytype'>Type</Label>
                    <AvInput type='select' name='pathologytype' id='pathologytype' required value={this.state.pathologytype} onChange={(e) => this.showType(e.target.value)}>
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
                    <Label for='other_type'>If Other Type Please mention</Label>
                    <AvField name='other_type' id='other_type' value={this.state.other_type} onChange={(e) => this.setState({ other_type: e.target.value})} required />
                    <AvFeedback>Please enter the If Other Type!</AvFeedback>
                  </AvGroup>
                  </div>
                )}  
                <div className="col-md-4">
                <Label for='grade'>Grade</Label>
                <AvRadioGroup name='grade' required value={this.state.grade} onChange={(e) => this.setState({ grade: e.target.value})} >
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
                    <Label for='pT'>pT</Label>
                    <AvInput type='select' name='pT' id='pT' required value={this.state.pT} onChange={(e) => this.setState({ pT: e.target.value})}>
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
                    <Label for='pN'>pN</Label>
                    <AvInput type='select' name='pN' id='pN' required value={this.state.pN} onChange={(e) => this.setState({ pN: e.target.value})}>
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
                    <Label for='ypT'>ypT</Label>
                    <AvInput type='select' name='ypT' id='ypT' required value={this.state.ypT} onChange={(e) => this.setState({ ypT: e.target.value})}>
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
                    <Label for='ypN'>ypN</Label>
                    <AvInput type='select' name='ypN' id='ypN' required value={this.state.ypN} onChange={(e) => this.setState({ ypN: e.target.value})}>
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
                    <Label for='pathologicalsizeofcancer'>Pathological size of cancer</Label>
                    <AvField type="number" placeholder="in CMS" name='pathologicalsizeofcancer' id='pathologicalsizeofcancer' value={this.state.pathologicalsizeofcancer} onChange={(e) => this.setState({ pathologicalsizeofcancer: e.target.value})} required />
                    <AvFeedback>Please enter the Pathological size of cancer!</AvFeedback>
                  </AvGroup>
                </div>
                <div className="col-md-3">
                  <AvGroup>            
                    <Label for='ER'>ER</Label>
                    <AvInput type='select' name='ER' id='ER' required value={this.state.ER} onChange={(e) => this.setState({ ER: e.target.value})}>
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
                    <Label for='PR'>PR</Label>
                    <AvInput type='select' name='PR' id='PR' required value={this.state.PR} onChange={(e) => this.setState({ PR: e.target.value})}>
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
                    <Label for='HER2'>HER2</Label>
                    <AvInput type='select' name='HER2' id='HER2' required value={this.state.HER2} onChange={(e) => this.showHER2(e.target.value)}>
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
                    <Label for='showher'>If 2 + FISH</Label>
                    <AvRadioGroup name='showher' required value={this.state.showher} onChange={(e) => this.setState({ showher: e.target.value})} >
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
                <Button color='primary' type='submit' disabled={ !pathologytype.length || !grade.length || !pT.length || !pN.length || !ypT.length || !ypN.length || !pathologicalsizeofcancer.length || !ER.length || !PR.length || !HER2.length } onClick={ () => this.sendInitialPresentationDetails }>
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

export default withRouter(Pathology);
