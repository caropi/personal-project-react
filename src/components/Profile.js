import React, { Component } from 'react'

export default class Profile extends Component {
    render(props) {
        return (
          <div className="display__user--profile">
            <img src={this.props.userData[0].actor.avatar_url} alt={this.props.userData[0].actor.login}/>
                <h2><span role="img" aria-label="waving hand emoji">👋</span>Hello <a href={this.props.userData[0].actor.url} className="display__user--profile-name">{this.props.userData[0].actor.login}</a></h2>
          </div>
        )
    }
  }
