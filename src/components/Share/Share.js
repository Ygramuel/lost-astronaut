import React from "react";


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
          <button onClick={sharePage.bind(this)}>
            Share This Page
          </button>
        )
      }else{
        return null
      }

    }
}

export default Share;
