import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "./assets/css/feather.css"
import "./assets/css/materialdesignicons.css"
import "./assets/css/dripiIcons.css"
import "./assets/css/fa.css"
import "./assets/css/fonts.css"
import './assets/scss/DefaultTheme.scss';
import './App.css'










import firebase from "firebase/app";


import questions from "./pages/questions/questions";






const firebaseConfig = {
    apiKey: "AIzaSyBzLHe_Qw88QGqmVGvEo1V-7n9fE1-27nI",
    authDomain: "brainyfood-b3239.firebaseapp.com",
    databaseURL: "https://brainyfood-b3239.firebaseio.com",
    projectId: "brainyfood-b3239",
    storageBucket: "brainyfood-b3239.appspot.com",
    messagingSenderId: "82750267371",
    appId: "1:82750267371:web:75723e40041d96fc4543ae",
    measurementId: "G-MHHW01TFZN"
};


firebase.initializeApp(firebaseConfig);

class App extends Component{


  componentWillMount() {

  }


    render() {

    return(
        <Router>

            <Route exact path="/" component={questions}/>



















            {/*<Route exact path="/login" name="login" component={Login}/>
          <Route exact path="/logout" name="logout" component={Logout}/>*/}

        </Router>
    )
  }

}

export default App;




