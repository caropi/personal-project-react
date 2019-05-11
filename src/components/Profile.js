import React, { Component } from 'react'

export default class Profile extends Component {
    // constructor (props) {
    //     super(props)
    //     this.state = {
    //         profileInfo: []
    //     }
    // }
    
    componentDidUpdate(props) {
        console.log(props);
    }
    render(props) {
        console.log(props);
        return (
          <div>
          testing
            {/* <img src={this.state.profileInfo.actor.avatar_url} alt=""/> */}
          </div>
        )
    }
  }


