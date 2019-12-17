import React from 'react';


const Feedbacks = (props) => {
    const {feedbacks} = props;
  return(
    <div className="scrool-container">
      { feedbacks.slice().reverse().map((item, i ) => {
        return <div className={`feedbacks ${item.color}`} key={`${item}-${i}`}>
          <h3><span>Vardas:</span> {item.name} &nbsp; <span>data:</span> {item.date}</h3>
          <p><span>El. pastas:</span> {item.email}</p>
          <p> {item.feedback}</p>
        </div> 
      }) }
    </div>
  )

}

export default Feedbacks; 