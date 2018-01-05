import React from "react";
import style from "./Share.module.less";


class Share extends React.Component {
  constructor(props) {
      super(props);

      // By default don't display the share dialog
      // Only enable if "navigator.share" exists
      this.state = {
        display: true,
        title: props.title ? props.title : "",
        text: props.text ? props.text : ""
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
          navigator.share({
              title: this.state.title,
              text: this.state.text,
              url: window.location.href ,
          })
            .then(() => console.log('Successful share'))
            .catch((error) => console.log('Error sharing', error));
        }
      }

      const { display } = this.state

      if (display) {
        return (
          <button className={style.share} onClick={sharePage.bind(this)}>
            S
          </button>
        )
      }else{
        return null
      }

    }
}

export default Share;
