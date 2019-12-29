import React from 'react';
import styles from './EmailForm.module.css';
import Button from '../../components/Button';
import { Header, Modal } from 'semantic-ui-react'

interface State {
  firstName: string;
  lastName: string;
  email: string;
  isModalOpen: boolean;
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
    isModalOpen: false
   }
 }

  handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    if(e.currentTarget.name === 'firstName'){
      return this.setState({ 
        firstName: e.currentTarget.value
      });
    }
    if(e.currentTarget.name === 'lastName'){
      return this.setState({ 
        lastName: e.currentTarget.value
      });
    }
    if(e.currentTarget.name === 'email'){
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
          this.closeModal()
          alert("You are successfully subscribed for Forefront emails")
        }
        if(res.status === 404){
          alert("Unable to subscribe. Please try again later")
        }
      })
      .catch(error => alert(error));

    e.preventDefault();
  };

  openModal = () => {
    this.setState({
      isModalOpen: true
    })
  }

  closeModal = () => {
    this.setState({
      isModalOpen: false
    })
  }

 render(){
   const { firstName, lastName, email, isModalOpen } = this.state;

   return (
    <Modal 
      size="small" 
      open={isModalOpen}
      onClose={this.closeModal}
      trigger={
        <Button onClick={this.openModal}>
          Join Our List
        </Button>
      }
    >
      <div className={styles.root}>
        <div className={styles.titleContainer}>
          <div className={styles.title}>GET EMAIL UPDATES</div>
          <div className={styles.subTitle}>Sign up for our newsletter to hear updates from our team and how you can help share the message of hope. CHANGE THIS.</div>
        </div>

        <form name="Email subscription" method="post" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={this.handleSubmit}>
          <input type="hidden" name="form-name" value="Email subscription" />
          <div className={styles.inputContainer}>
            <input required className={styles.input} type="text" name="firstName" placeholder="First Name" value={firstName} onChange={this.handleChange} />   
          </div>
          <div className={styles.inputContainer}>
            <input required className={styles.input} type="text" name="lastName" placeholder="Last Name" value={lastName} onChange={this.handleChange} />    
          </div>
          <div className={styles.inputContainer}>
            <input required className={styles.input} type="email" name="email" placeholder="Email Address" value={email} onChange={this.handleChange} />
          </div>
          <div className={styles.buttonContainer}>
            <Button 
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