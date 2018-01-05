import React from "react";


// Displays a warning if the device is offline
class Offline extends React.Component {
  constructor(props) {
      super(props)

      this.state = {
        online: true,   // I guess in the beginning we are online ...
        onlineMessage: this.props.onlineMessage,
        offlineMessage: this.props.offlineMessage,
      }
    }

    componentDidMount() {
      // TODO is there a better way?
      // e.g. "bind()" ??
      var that = this
      // Update state if we go online or offline
      function updateOnlineStatus(event) {
        that.setState({ online: navigator.onLine })
      }

      that.setState({ online: navigator.onLine })

      window.addEventListener('online',  updateOnlineStatus);
      window.addEventListener('offline', updateOnlineStatus);
    }

    render() {
      const { online, onlineMessage, offlineMessage } = this.state

      if(online && onlineMessage){
        return <p>{onlineMessage}</p>
      }else if(!online && offlineMessage){
        return <p>{offlineMessage}</p>
      }else{
        return null
      }
    }
}

export default Offline;
