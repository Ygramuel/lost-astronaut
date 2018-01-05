import React from "react";


// Displays a warning if the device is offline
class Offline extends React.Component {
  constructor() {
      super()

      // I guess in the beginning we are online ...
      this.state = {
        online: true,
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
      const { online } = this.state

      return (
        <div>
          {online ? <h1>ONLINE</h1> :<h1>OFFLINE</h1>}
        </div>
      )
    }
}

export default Offline;
