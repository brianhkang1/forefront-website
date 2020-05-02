import React from 'react';
import { Icon } from 'semantic-ui-react';
import styles from './EmailForm.module.css';

interface State {
  firstName: string;
  lastName: string;
  email: string;
}

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class EmailForm extends React.Component<{}, State> {
 constructor(props){
   super(props)
   this.state = {
    firstName: "",
    lastName: "",
    email: "",
   }
 }

  handleChange = (e: React.FormEvent<HTMLInputElement>, inputName: string) => {
    if(inputName === 'firstName'){
      return this.setState({ 
        firstName: e.currentTarget.value
      });
    }
    if(inputName === 'lastName'){
      return this.setState({ 
        lastName: e.currentTarget.value
      });
    }
    if(inputName === 'email'){
      return this.setState({ 
        email: e.currentTarget.value
      });
    }
  };

  handleSubmit = (e: React.FormEvent) => {
    const { firstName, lastName, email } = this.state;

    const body = {
      firstName, 
      lastName, 
      email
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "Email subscription", ...body })
    })
      .then((res) => {
        if(res.status === 200){
          alert("You are successfully subscribed for Forefront emails")
        }
        if(res.status === 404){
          alert("Unable to subscribe. Please try again later")
        }
      })
      .catch(error => alert(error));

    e.preventDefault();
  };

 render(){
   const { firstName, lastName, email } = this.state;

   return (
    <form 
      className={styles.root}
      name="Email subscription" 
      method="post"
      data-netlify="true" 
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="Email subscription" />
      <div className={styles.inputContainer}>
        <input required className={styles.input} type="text" placeholder="First Name" value={firstName} onChange={(e) => this.handleChange(e, 'firstName')} autoComplete='new-password' />   
      </div>
      <div className={styles.inputContainer}>
        <input required className={styles.input} type="text" placeholder="Last Name" value={lastName} onChange={(e) => this.handleChange(e, 'lastName')} autoComplete='new-password' />    
      </div>
      <div className={styles.inputContainer}>
        <input required className={styles.input} type="email" placeholder="Email Address" value={email} onChange={(e) => this.handleChange(e, 'email')} autoComplete='new-password' />
      </div>

      <div className={styles.buttonContainer} onClick={this.handleSubmit}>
        <Icon name="arrow right" size="large"/>
      </div>
    </form>
   )
 }
}

export default EmailForm;