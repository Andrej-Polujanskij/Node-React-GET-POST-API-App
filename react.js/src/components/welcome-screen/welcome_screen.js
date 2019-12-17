import React from 'react';

import Feedbacks from '../feedbaks/feedbacks'
import PostForm from '../post-form/post-form'

const WeelcomeScreen = (props) => {
    const {feedbacks, sendData} = props;
  return(
    <div>
      <div className="welcome">
        <h1>atsiliepimų puslapis</h1>
        <p>Užpildykite formą kairėje pusėje ir Jūsų atsiliepimas atsiras dešinėje</p>
      </div>
    <div className="main-container">
      <div className="left">
        <PostForm sendData={sendData}/>
      </div>
      <div className="right">
        <Feedbacks feedbacks={feedbacks}/>
      </div>
    </div>
    </div>
  )

}

export default WeelcomeScreen; 
