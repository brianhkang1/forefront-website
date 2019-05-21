import React from 'react';
import styles from './HomePage.module.css'
import Header from '../Header';
import ReactTypingEffect from 'react-typing-effect';
import TextLoop from "react-text-loop";

type State = {
  color: string;
}

class HomePage extends React.Component<{}, State>{
  constructor(props){
    super(props)
    
    this.state = {
      color: 'white'
    }
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenScrollEvent);
}

  listenScrollEvent = e => {
    // mobile scroll event
    if(window.matchMedia("(max-width: 600px)")){
      if (window.scrollY > 765 && window.scrollY < 1530) {
        this.setState({color: 'rgb(69, 158, 172)'})
      } else if (window.scrollY > 1530 && window.scrollY < 2295 ) {
        this.setState({color: 'white'})
      } else {
        this.setState({color: 'white'})
      }
    } 
    // laptop scroll event
    else {
      if (window.scrollY > 765 && window.scrollY < 1530) {
        this.setState({color: 'rgb(69, 158, 172)'})
      } else if (window.scrollY > 1530 && window.scrollY < 2295 ) {
        this.setState({color: 'white'})
      } else {
        this.setState({color: 'white'})
      }
    }
  }

  renderFeatureTitle = () => {
    // if mobile browser
    if(window.matchMedia("(max-width: 600px)").matches){
      return (
      <>
        <div className={styles.mobileTitlePadding}>We are</div>
        <TextLoop children={["leaders.", "difference-makers.", "avengers."]}/>
      </>
      ) 
    }
    //if laptop browser
    else if (window.matchMedia("(min-width: 601px)").matches){
      return (
      <>
        <ReactTypingEffect
          staticText='We are'
          eraseDelay={2500}
          speed={100}
          text={["leaders.", "difference-makers.", "avengers." ]}
        />
      </>
      )
    }
  }

  render(){
    return (
      <div style={{backgroundColor: this.state.color, transition: 'background-color 0.75s', position: 'relative'}}>
        <div className={styles.FeaturePictureContainer}>
          <div className={styles.typeWriter}>
            {this.renderFeatureTitle()}
          </div>  
        </div>

        <div className={styles.container2}>
          container 2
        </div>

        <div className={styles.container3}>
          container 3
        </div>
      </div>
    );
  }
}

export default HomePage;
