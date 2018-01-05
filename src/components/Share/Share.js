import React from "react";


class Share extends React.Component {
  constructor(props) {
      super(props);
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

      return (
        <button onClick={sharePage}>
          Share This Page
        </button>
      )
    }
}

export default Share;
