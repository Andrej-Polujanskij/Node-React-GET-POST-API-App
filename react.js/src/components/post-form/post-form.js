import React, {Component} from 'react';
import {getDate, getColor} from '../../utils'

const validEmailRegex = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i)
const errorsValidateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}
const valueValidateForm = (errors) => {
  let valid = false;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = true)
  );
  return valid;
}

class PostForm extends Component {
  constructor(props){
    super(props)
    this.timer = null;
    this.state = {
        name: '', email: '', feedback: '', date: getDate(), color: getColor(), 
        errors: {name: '', email: '', feedback: '', 
        thankYou: ``, validForm: false,
      }
    }
}


changeHandler = (evt) => {
  evt.preventDefault();
  const { name, value } = evt.target;
  let errors = this.state.errors;

  switch (name) {
    case 'name': 
      errors.name = 
        value.length < 3
          ? 'Vardas turi būti bent iš 3 raidžių!'
          : '';
      break;
    case 'email': 
      errors.email = 
        validEmailRegex.test(value)
          ? ''
          : 'Blogas el. paštas!';
      break;
    case 'feedback': 
      errors.feedback = 
        value.length < 8
          ? 'Per trumpas atsiliepimas!'
          : '';
      break;
    default:
    break;
  }


  this.setState({[name]: value});
}

submitHandler = (evt) => {
  if(errorsValidateForm(this.state.errors) 
    && valueValidateForm(this.state.name) 
    && valueValidateForm(this.state.email)
    && valueValidateForm(this.state.feedback)) {

      this.setState({validForm: true })
      this.setState({thankYou: `Ačiū! ;)` })
    }else{
      evt.preventDefault()
      this.setState({validForm: false })
      this.setState({thankYou: `Forma nėra pilnai užpildyta!`})
    
    }
  
    setTimeout(() => {this.setState({thankYou: ``})}, 2000);
  }

formReset = () => {
  this.setState({name: '', email: '', feedback: '', date: getDate(), color: getColor() })
}

render() {
    const {name, email, feedback, validForm, thankYou } = this.state
    const {errors} = this.state;
    return(
    <form className="form" noValidate method="POST" onSubmit={(evt) =>{
        evt.preventDefault();
        this.props.sendData(this.state);
        this.formReset();  }}>
          <input
            type="text"
            name="name"
            placeholder="Vardas"
            value={name}
            onChange={this.changeHandler} noValidate
            />
            {errors.name.length > 0 && 
            <span className='error'>{errors.name}</span>}
            
          <input 
            type="email"
            name="email"
            placeholder="El. paštas"
            value={email}
            noValidate
            onChange={this.changeHandler}
            /> 
            {errors.email.length > 0 && 
            <span className='error'>{errors.email}</span>}
          <textarea
            name="feedback" cols="30" rows="8"
            placeholder="Jūsų komentaras"
            value={feedback}
            noValidate
            onChange={this.changeHandler}
            />
            {errors.feedback.length > 0 && 
            <span className='error'>{errors.feedback}</span>}
           <button onClick={this.submitHandler} type="submit" >Submit</button>

           {validForm ? <span style={{color: `green`}} className="sub-error" >{thankYou}</span> :
            <span className="sub-error" >{thankYou}</span> }
      </form>
    )
  }
}

export default PostForm; 
