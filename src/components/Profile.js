import React, { Component } from 'react'

export default class Profile extends Component {
    render(props) {
        console.log(this.props.userData[0].actor.avatar_url);
        return (
          <div>
          testing
            <img src={this.props.userData[0].actor.avatar_url} alt=""/>
          </div>
        )
    }
  }


