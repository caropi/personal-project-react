import React, { Component } from 'react'

export default class Profile extends Component {
    render(props) {
        return (
          <div className="display__user--profile">
            <img src={this.props.userData[0].actor.avatar_url} alt={this.props.userData[0].actor.login}/>
            <a href={this.props.userData[0].actor.url} className="display__user--profile-name">
                <h2>{this.props.userData[0].actor.login}</h2>
            </a>
          </div>
        )
    }
  }


