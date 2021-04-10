import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Demography from './Components/Demography';
import Dashboard from './Components/Dashboard';
import Login from './Components/pages/authentication/Login'
import Register from './Components/pages/authentication/Register'
import Users from './Components/Users';
import Add from './Components/user/Add'
import Edit from './Components/user/Edit';
import InitialPresentation from './Components/InitialPresentation';
import Pathology from './Components/Pathology';
import Treatment from './Components/Treatment';
import FollowUp from './Components/FollowUp';
import HealthEconomics from './Components/HealthEconomics';
import DemographyEdit from './Components/DemographyEdit';
import InitialPresentationEdit from './Components/InitialPresentationEdit';
import EditPathology from './Components/EditPathology';
import EditTreatment from './Components/EditTreatment';
import EditFollowUp from './Components/EditFollowUp';
import EditHealthEconomics from './Components/EditHealthEconomics';

//const App = () => {
class App extends React.Component {    
    //const [loginInfo, setLoginInfo] = useState('user_not_logged_in')
    constructor(){
        super();            
        this.state = {
            "loginInfo" : "user_not_logged_in",
            "user": {}
        }        
        this.handleLogin = this.handleLogin.bind(this);
    }
    handleLogin(data){
        this.state = {
            "loginInfo": "user_logged_in",
            user: data
        }
    }

    render(){
        return(
            <div>
                <Router>
                    <Switch>
                    <Route path='/' exact render={props => (
                        <Dashboard {...props} logindata={this.state.loginInfo} handleLogin={this.handleLogin} />
                    )}></Route>
                    <Route path='/demography' component={Demography} exact></Route>
                    <Route path='/demography/edit/:code' component={DemographyEdit} exact></Route>
                    <Route path='/users' component={Users} exact></Route>
                    <Route path='/login' component={Login} exact handleSuccessfulAuth={this.handleSuccessfulAuth}></Route>
                    <Route path='/register' component={Register} exact></Route>
                    <Route path='/users/add' component={Add} exact></Route>
                    <Route path='/users/edit/:id' component={Edit} exact></Route>
                    <Route path='/initial-presentation/:code' component={InitialPresentation} exact></Route>
                    <Route path='/initial-presentation/edit/:code' component={InitialPresentationEdit} exact></Route>
                    <Route path='/pathology/:code' component={Pathology} exact></Route>
                    <Route path='/pathology/edit/:code' component={EditPathology} exact></Route>
                    <Route path='/treatment/:code' component={Treatment} exact></Route>
                    <Route path='/treatment/edit/:code' component={EditTreatment} exact></Route>
                    <Route path='/follow-up/:code' component={FollowUp} exact></Route>
                    <Route path='/follow-up/edit/:code' component={EditFollowUp} exact></Route>
                    <Route path='/health-economics/:code' component={HealthEconomics} exact></Route>
                    <Route path='/health-economics/edit/:code' component={EditHealthEconomics} exact></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App;