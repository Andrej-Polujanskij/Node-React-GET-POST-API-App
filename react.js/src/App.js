import React, {Component} from 'react';
import './App.css';

import WeelcomeScreen from './components/welcome-screen/welcome_screen'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      allComments: []
    };
  }

  componentDidMount(){
    this.getData();
  };


  getData = () => {
    fetch('http://localhost:3212/feedbacks', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then((res) => {return res.json()})

    .then( (myData) => this.setState({allComments: myData }))
  }


  sendData = (param) => {

   fetch('http://localhost:3212/feedbacks', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      newData: param
    })
  }).then(() => {this.getData()})
  }


  render() {
    return (
      <div>
        <WeelcomeScreen sendData={this.sendData}  feedbacks={this.state.allComments}/>
      </div>
    );
  }
};

export default App;
