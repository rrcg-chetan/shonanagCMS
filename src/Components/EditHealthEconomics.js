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

class HealthEconomics extends React.Component {
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
  }

  componentDidMount() {
    axios.get(`http://localhost:4000/getfulldetails/${this.state.code}`)
    .then(response =>
        response.data.results.map(patient => ({
            registered_as: `${patient.registered_as}`, patient_has_insurance: `${patient.patient_has_insurance}`, patient_has_insurance_if_yes_currency: `${patient.patient_has_insurance_if_yes_currency}`, patient_has_insurance_if_yes_currency_amount: `${patient.patient_has_insurance_if_yes_currency_amount}`, currency_cost_incurred_before_coming_centre: `${patient.currency_cost_incurred_before_coming_centre}`, cost_incurred_before_coming_centre: `${patient.cost_incurred_before_coming_centre}`, currency_cost_of_surgery: `${patient.currency_cost_of_surgery}`, cost_of_surgery: `${patient.cost_of_surgery}`, currency_cost_of_radiotherapy: `${patient.currency_cost_of_radiotherapy}`, cost_of_radiotherapy: `${patient.cost_of_radiotherapy}`, currency_cost_of_chemotherapy: `${patient.currency_cost_of_chemotherapy}`, cost_of_chemotherapy: `${patient.cost_of_chemotherapy}`, currency_stay_in_the_city: `${patient.currency_stay_in_the_city}`, stay_in_the_city: `${patient.stay_in_the_city}`, currency_travel_cost: `${patient.currency_travel_cost}`, travel_cost: `${patient.travel_cost}`, currency_cost_of_follow_up_visits: `${patient.currency_cost_of_follow_up_visits}`, cost_of_follow_up_visits: `${patient.cost_of_follow_up_visits}`, code: `${patient.code}`
        })),
        //console.log(this.patient)
    )
    .then(patients => {
        this.setState({
          patients,
          isLoading: false,
          patienthasinsurance: patients[0].patient_has_insurance,          
        });
        //document.getElementById('metastases_types')[1].style.display='none';
        console.log(this.state.dateofrec)
        if(this.state.patienthasinsurance == 'Yes'){
          this.setState({ showHasInsurance: true })
        }               
    })
    .catch(error => this.setState({ error, isLoading: false }));     
    };

  sendHealthEconomicsDetails = e => {
      const { history } = this.props;
      axios.post(`http://localhost:4000/updatepatientdetails`, { registered_as: this.state.registered_as, patient_has_insurance: this.state.patient_has_insurance, patient_has_insurance_if_yes_currency: this.state.patient_has_insurance_if_yes_currency, patient_has_insurance_if_yes_currency_amount: this.state.patient_has_insurance_if_yes_currency_amount, currency_cost_incurred_before_coming_centre: this.state.currency_cost_incurred_before_coming_centre, cost_incurred_before_coming_centre: this.state.cost_incurred_before_coming_centre, currency_cost_of_surgery: this.state.currency_cost_of_surgery, cost_of_surgery: this.state.cost_of_surgery, currency_cost_of_radiotherapy: this.state.currency_cost_of_radiotherapy, cost_of_radiotherapy: this.state.cost_of_radiotherapy, currency_cost_of_chemotherapy: this.state.currency_cost_of_chemotherapy, cost_of_chemotherapy: this.state.cost_of_chemotherapy, currency_stay_in_the_city: this.state.currency_stay_in_the_city, stay_in_the_city: this.state.stay_in_the_city, currency_travel_cost: this.state.currency_travel_cost, travel_cost: this.state.travel_cost, currency_cost_of_follow_up_visits: this.state.currency_cost_of_follow_up_visits, cost_of_follow_up_visits: this.state.cost_of_follow_up_visits, code: this.state.code })
      .then(function (response) {
        if(response.data.success === 'Sucessfully Updated!'){            
        history.push(`/`)
        }else{
        
        }
    })
  };

  showHasInsurance(name) {
    if(document.getElementById("patienthasinsurance").value == "Yes"){
      this.setState({ showHasInsurance: true });   
      this.state.patienthasinsurance = name 
    }else{
        this.setState({ showHasInsurance: false, insurancecurrency: "", insuranceamount: "" }); 
        this.state.patienthasinsurance = name        
    }
  }

  render(){          
    const { showHasInsurance, isLoading, patients } = this.state; 
    const { history } = this.props;

    /*var metas = Object.keys(this.state.areaofrecurrence).filter((x) => this.state.areaofrecurrence[x]);
    var metas = Object.keys(this.state.areaofrecurrence).filter((x) => this.state.areaofrecurrence[x]);
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
              <h1 className="animate__animated animate__fadeIn">Health Economics</h1>
            </CardHeader>
            <CardBody>
                {!isLoading ? (
                    patients.map(patient => {
                        const { registered_as, patient_has_insurance, patient_has_insurance_if_yes_currency, patient_has_insurance_if_yes_currency_amount, currency_cost_incurred_before_coming_centre, cost_incurred_before_coming_centre, currency_cost_of_surgery, cost_of_surgery, currency_cost_of_radiotherapy, cost_of_radiotherapy, currency_cost_of_chemotherapy, cost_of_chemotherapy, currency_stay_in_the_city, stay_in_the_city, currency_travel_cost, travel_cost, currency_cost_of_follow_up_visits, cost_of_follow_up_visits } = patient;
                        return (
              <AvForm  onSubmit= {() => this.sendHealthEconomicsDetails()}>
              <div className="row">
                
                <div className="col-md-3">
                  <AvGroup>            
                    <Label for='registeredas'>Registered As</Label>
                    <AvInput type='select' name='registeredas' id='registeredas' required value={patient.registered_as} onChange={(e) => this.setState({ registered_as: e.target.value })}>
                        <option value="" selected>Select</option>
                        <option value="Cash">Cash</option>
                        <option value="TPA">TPA</option> 
                        <option value="Panel">Panel</option>                         
                        <option value="Not Known">Not Known</option>                         
                      </AvInput>                      
                    <AvFeedback>Please select Registered As!</AvFeedback>
                  </AvGroup>
                </div>
                <div className="col-md-3">
                  <AvGroup>            
                    <Label for='patienthasinsurance'>Patient has insurance</Label>
                    <AvInput type='select' name='patienthasinsurance' id='patienthasinsurance' required value={patient.patient_has_insurance} onChange={(e) => this.showHasInsurance(e.target.value)}>
                        <option value="" selected>Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>                         
                      </AvInput>                      
                    <AvFeedback>Please select if or not has insurance!</AvFeedback>
                  </AvGroup>
                </div> 
                {showHasInsurance && (
                    <>
                    <div className="col-md-3">
                    <AvGroup>            
                        <Label for='insurancecurrency'>Currency</Label>
                        <AvInput type='select' name='insurancecurrency' id='insurancecurrency' required value={patient.patient_has_insurance_if_yes_currency} onChange={(e) => this.setState({ patient_has_insurance_if_yes_currency: e.target.value })}>
                            <option value="" selected>Select</option>
                            <option value="INR">INR</option>
                            <option value="$">$</option>                         
                        </AvInput>                      
                        <AvFeedback>Please select if or not has insurance!</AvFeedback>
                    </AvGroup>
                    </div>
                    <div className="col-md-3">
                        <AvGroup>
                            <Label for='insuranceamount'>Premium per Month</Label>
                            <AvField type="number" name='insuranceamount' id='insuranceamount' value={patient.patient_has_insurance_if_yes_currency_amount} onChange={(e) => this.setState({ patient_has_insurance_if_yes_currency_amount: e.target.value})} required />
                            <AvFeedback>Please enter the Premium per Month!</AvFeedback>
                        </AvGroup>
                    </div>
                    </>
                )}     
                <div className="col-md-12"><hr /></div>
                <div className="col-md-4">
                    <div class="row">
                        <div className="col-md-12"><Label for=''>Costs incurred before coming to centre</Label></div>        
                        <div className="col-md-6">
                            <AvGroup>            
                                <AvInput type='select' name='costsincurredbefore' id='costsincurredbefore' required value={patient.currency_cost_incurred_before_coming_centre} onChange={(e) => this.setState({ currency_cost_incurred_before_coming_centre: e.target.value })}>
                                    <option value="" selected>Select</option>
                                    <option value="INR">INR</option>
                                    <option value="$">$</option>                         
                                </AvInput>                      
                                <AvFeedback>Please select Costs incurred before coming to centre!</AvFeedback>
                            </AvGroup>
                        </div>
                        <div className="col-md-6">
                            <AvGroup>
                                <AvField type="number" placeholder="Amount" name='costsincurredbeforeinsuranceamount' id='costsincurredbeforeinsuranceamount' value={patient.cost_incurred_before_coming_centre} onChange={(e) => this.setState({ cost_incurred_before_coming_centre: e.target.value})} required />
                                <AvFeedback>Please enter the If Other!</AvFeedback>
                            </AvGroup>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="row">
                        <div className="col-md-12"><Label for=''>Total cost of surgery</Label></div>        
                        <div className="col-md-6">
                            <AvGroup>            
                                <AvInput type='select' name='costofsurgery' id='costofsurgery' required value={patient.currency_cost_of_surgery} onChange={(e) => this.setState({ currency_cost_of_surgery: e.target.value })}>
                                    <option value="" selected>Select</option>
                                    <option value="INR">INR</option>
                                    <option value="$">$</option>                         
                                </AvInput>                      
                                <AvFeedback>Please select Total cost of surgery!</AvFeedback>
                            </AvGroup>
                        </div>
                        <div className="col-md-6">
                            <AvGroup>
                                <AvField type="number" placeholder="Amount" name='surgeryamount' id='surgeryamount' value={patient.cost_of_surgery} onChange={(e) => this.setState({ cost_of_surgery: e.target.value})} required />
                                <AvFeedback>Please enter the If Other!</AvFeedback>
                            </AvGroup>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="row">
                        <div className="col-md-12"><Label for=''>Total cost of radiotherapy</Label></div>        
                        <div className="col-md-6">
                            <AvGroup>            
                                <AvInput type='select' name='costofradiotherapy' id='costofradiotherapy' required value={patient.currency_cost_of_radiotherapy} onChange={(e) => this.setState({ currency_cost_of_radiotherapy: e.target.value })}>
                                    <option value="" selected>Select</option>
                                    <option value="INR">INR</option>
                                    <option value="$">$</option>                         
                                </AvInput>                      
                                <AvFeedback>Please select Total cost of radiotherapy!</AvFeedback>
                            </AvGroup>
                        </div>
                        <div className="col-md-6">
                            <AvGroup>
                                <AvField type="number" placeholder="Amount" name='radiotherapyamount' id='radiotherapyamount' value={patient.cost_of_radiotherapy} onChange={(e) => this.setState({ cost_of_radiotherapy: e.target.value})} required />
                                <AvFeedback>Please enter the If Other!</AvFeedback>
                            </AvGroup>
                        </div>
                    </div>
                </div>

                <div className="col-md-12">
                    <div class="row">
                        <div className="col-md-12"><Label for=''>Total cost of chemotherapy (includes daycare cost, admission cost, consumables, protocol charges, nursing administration, drugs and investigation, OPD charges)</Label></div>        
                        <div className="col-md-2">
                            <AvGroup>            
                                <AvInput type='select' name='costofchemotherapy' id='costofchemotherapy' required value={patient.currency_cost_of_chemotherapy} onChange={(e) => this.setState({ currency_cost_of_chemotherapy: e.target.value })}>
                                    <option value="" selected>Select</option>
                                    <option value="INR">INR</option>
                                    <option value="$">$</option>                         
                                </AvInput>                      
                                <AvFeedback>Please select Total cost of chemotherapy!</AvFeedback>
                            </AvGroup>
                        </div>
                        <div className="col-md-2">
                            <AvGroup>
                                <AvField type="number" placeholder="Amount" name='chemotherapyamount' id='chemotherapyamount' value={patient.cost_of_chemotherapy} onChange={(e) => this.setState({ cost_of_chemotherapy: e.target.value})} required />
                                <AvFeedback>Please enter the If Other!</AvFeedback>
                            </AvGroup>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">Out of pocket expenses<hr /></div>
                <div className="col-md-4">
                    <div class="row">
                        <div className="col-md-12"><Label for=''>Stay in the city currency</Label></div>        
                        <div className="col-md-6">
                            <AvGroup>            
                                <AvInput type='select' name='stayincitycost' id='stayincitycost' required value={patient.currency_stay_in_the_city} onChange={(e) => this.setState({ currency_stay_in_the_city: e.target.value })}>
                                    <option value="" selected>Select</option>
                                    <option value="INR">INR</option>
                                    <option value="$">$</option>                         
                                </AvInput>                      
                                <AvFeedback>Please select Stay in the city currency!</AvFeedback>
                            </AvGroup>
                        </div>
                        <div className="col-md-6">
                            <AvGroup>
                                <AvField type="number" placeholder="Amount" name='stayincityamount' id='stayincityamount' value={patient.stay_in_the_city} onChange={(e) => this.setState({ stay_in_the_city: e.target.value})} required />
                                <AvFeedback>Please enter the If Other!</AvFeedback>
                            </AvGroup>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="row">
                        <div className="col-md-12"><Label for=''>Travel costs</Label></div>        
                        <div className="col-md-6">
                            <AvGroup>            
                                <AvInput type='select' name='travelcosts' id='travelcosts' required value={patient.currency_travel_cost} onChange={(e) => this.setState({ currency_travel_cost: e.target.value })}>
                                    <option value="" selected>Select</option>
                                    <option value="INR">INR</option>
                                    <option value="$">$</option>                         
                                </AvInput>                      
                                <AvFeedback>Please select Travel costs!</AvFeedback>
                            </AvGroup>
                        </div>
                        <div className="col-md-6">
                            <AvGroup>
                                <AvField type="number" placeholder="Amount" name='travelcostsamount' id='travelcostsamount' value={patient.travel_cost} onChange={(e) => this.setState({ travel_cost: e.target.value})} required />
                                <AvFeedback>Please enter the If Other!</AvFeedback>
                            </AvGroup>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="row">
                        <div className="col-md-12"><Label for=''>Cost of follow-up visits <small>includes travel, investigations, OPD consultations</small></Label></div>        
                        <div className="col-md-6">
                            <AvGroup>            
                                <AvInput type='select' name='costoffollowupvisit' id='costoffollowupvisit' required value={patient.currency_cost_of_follow_up_visits} onChange={(e) => this.setState({ currency_cost_of_follow_up_visits: e.target.value })}>
                                    <option value="" selected>Select</option>
                                    <option value="INR">INR</option>
                                    <option value="$">$</option>                         
                                </AvInput>                      
                                <AvFeedback>Please select Total cost of followup visit!</AvFeedback>
                            </AvGroup>
                        </div>
                        <div className="col-md-6">
                            <AvGroup>
                                <AvField type="number" placeholder="Amount" name='costoffollowupvisitamount' id='costoffollowupvisitamount' value={patient.cost_of_follow_up_visits} onChange={(e) => this.setState({ cost_of_follow_up_visits: e.target.value})} required />
                                <AvFeedback>Please enter the If Other!</AvFeedback>
                            </AvGroup>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-12">
                <Button color='primary' type='submit' onClick={ () => this.sendTreatmentDetails }>
                  Finish
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

export default withRouter(HealthEconomics);
