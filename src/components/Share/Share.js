import React from "react";

import icon from './share.svg'
import style from "./Share.module.less";


class Share extends React.Component {
  constructor(props) {
      super(props);

      this.state = {

            // By default don't display the share dialog
            // Only enable if "navigator.share" exists
        display: false,

        title: props.title , //? props.title : "",
        text: props.text, // ? props.text : ""
      }
    }

  componentDidMount() {
    if (navigator.share) {
      this.setState({ display: true })
    }
  }

    render() {
      function sharePage(){
        if (navigator.share) {
          const docTitle = document.title;
          navigator.share({
              title: this.state.title ? this.state.title : docTitle,
              text: this.state.text ? this.state.text : docTitle,
              url: window.location.href ,
          })
            .then(() => console.log('Successful share'))
            .catch((error) => console.log('Error sharing', error));
        }else{
          // This should never run
          alert("Bitte Benutze Chrome ")
        }
      }

      const { display } = this.state

      if (display) {
        return (
          <img className={style.share} onClick={sharePage.bind(this)}
              src={icon} alt="Teilen" width="55" height="55"/>
        )
      }else{
        return null
      }

    }
}

export default Share;
