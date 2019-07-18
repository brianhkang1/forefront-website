import React from 'react';
import styles from './FourPillarsItem.module.css';
import { Spring } from 'react-spring/renderprops';

interface Props {
  title: React.ReactNode;
  description: string;
  icon: React.ReactNode;
  image: React.ReactNode;
}

// interface State {
//   isItemFloating: boolean;
// }

class FourPillarsItem extends React.Component<Props> {
  
  render(){
    const { title, description, icon, image } = this.props;

    return(
      <div className={styles.root} style={{backgroundImage: `url(${image})`}}>
        <div className={"wow zoomIn"}>{icon}</div>
        <div className={`${styles.title} wow zoomIn`}>{title}</div>
      </div>
    )
  }
}


export default FourPillarsItem
  // class FourPillarsItem extends React.Component<Props, State> {
  //   constructor(props){
  //     super(props)
  
  //     this.state = { 
  //       isItemFloating: false
  //     }
  //   }
  
  //   setFloat = () => this.setState({isItemFloating: true});
  //   cancelFloat = () => this.setState({isItemFloating: false});
  
  //   renderIcon = () => {
  //     const { icon } = this.props 
  //     const { isItemFloating } = this.state
  
  //     // if mobile browser
  //     if(window.matchMedia("(max-width: 600px)").matches){
  //       return (
  //         <div className={`${styles.iconContainer} wow zoomIn`}>
  //           { icon }
  //         </div>
  //       ) 
  //     } else return (
  //       <Spring
  //         to={{
  //           transform: `translateY(${isItemFloating ? '-20px' : '0px' })`,
  //           boxShadow: isItemFloating ? '0px 20px 40px 1px rgba(0, 0, 0, 0.2)' : (window.matchMedia("(max-width: 600px)").matches ? '0px 0px 0px 0px' : '0px 1px 1px 0px rgba(0, 0, 0, 0.2)' )
  //         }}
  //       >
  //         { props => (
  //           <div style={props} className={`${styles.iconContainer} wow zoomIn`}>
  //             { icon }
  //           </div>
  //         )}
  //       </Spring>
  //     )
  //   }
  
  //   render(){
  //     const { title, description } = this.props 
  
  //     return(
  //       <div className={styles.root} onMouseOver={this.setFloat} onMouseOut={this.cancelFloat}>
          
  //         {this.renderIcon()}
  
  //         <div className={styles.titleContainer} >
  //           <div className={styles.titleText}>{ title }</div>
  //         </div>
          
  //         <div className={styles.descriptionContainer}>
  //           <div className={styles.descriptionText}>{ description }</div>
  //         </div>
  //       </div>
  //     )
  
  //   }
  // }