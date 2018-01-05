import React from "react";
import style from "./Offline.module.less"

// Displays a warning if the device is offline
class Offline extends React.Component {
  constructor(props) {
      super(props)

      this.state = {
        online: true   // I guess in the beginning we are online ...
      }
    }

    componentDidMount() {

      // Update state if we go online or offline
      function updateOnlineStatus(event) {
        this.setState({ online: navigator.onLine })
      }

      this.setState({ online: navigator.onLine })

      window.addEventListener('online',  updateOnlineStatus.bind(this));
      window.addEventListener('offline', updateOnlineStatus.bind(this));
    }

    render(  ) {
      const { online } = this.state

      if(!online){
        return this.props.children
      }else
        return null
      }
}

export default Offline;
