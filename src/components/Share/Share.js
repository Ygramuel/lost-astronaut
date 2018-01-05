import React from "react";


class Share extends React.Component {
  constructor(props) {
      super(props);

      // By default don't display the share dialog
      // Only enable if "navigator.share" exists
      this.state = {
        display: false,
      }
    }

  componentDidMount() {
    if (navigator.share) {
      that.setState({ display: true })
    }
  }

    render() {
      function sharePage(){
        if (navigator.share) {
          navigator.share({
              title: 'Lost Astronaut',
              text: 'ein Beispiel beschreibungs text',
              url: 'https://lost-astronaut.netlify.com',
          })
            .then(() => console.log('Successful share'))
            .catch((error) => console.log('Error sharing', error));
        }
      }

      const { display } = this.state

      if (display) {
        return (
          <button onClick={sharePage}>
            Share This Page
          </button>
        )
      }else{
        return null
      }

    }
}

export default Share;
