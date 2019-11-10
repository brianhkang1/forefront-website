import React from 'react';
import styles from './EmailForm.module.css';
import Button from '../../components/Button';
import { Header, Modal } from 'semantic-ui-react'

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

  handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({ 
      [e.currentTarget.name]: e.currentTarget.value
    } as Pick<State, keyof State>);
  };

  handleSubmit = (e: React.FormEvent) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "Email subscription", ...this.state })
    })
      .catch(error => alert(error));

    e.preventDefault();
  };

 render(){
   const { firstName, lastName, email } = this.state;

   return (
    <Modal size="small" trigger={<Button size="large">Join Our List</Button>}>
      <div className={styles.root}>
        <div className={styles.titleContainer}>
          <div className={styles.title}>GET EMAIL UPDATES</div>
          <div className={styles.subTitle}>Sign up for our newsletter to hear updates from our team and how you can help share the message of hope. CHANGE THIS.</div>
        </div>

        <form name="Email subscription" method="post" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={this.handleSubmit}>
          <input type="hidden" name="form-name" value="Email subscription" />
          <div className={styles.inputContainer}>
            <input className={styles.input} type="text" name="firstName" placeholder="First Name" value={firstName} onChange={this.handleChange} />   
          </div>
          <div className={styles.inputContainer}>
            <input className={styles.input} type="text" name="lastName" placeholder="Last Name" value={lastName} onChange={this.handleChange} />    
          </div>
          <div className={styles.inputContainer}>
            <input  className={styles.input}type="email" name="email" placeholder="Email Address" value={email} onChange={this.handleChange} />
          </div>
          <div className={styles.buttonContainer}>
            <Button 
              size="large" 
              variant="solid" 
              type="submit"
            >
              SUBMIT
            </Button>
          </div>
        </form>
      </div>
    </Modal>
   )
 }
}

export default EmailForm;