import React, { Component } from 'react';
import Card from './Card.js';

export default class UserEvents extends Component {
  // handles local logic of changing className based on whether a status is opened or closed
  handleStatus(status) {
    if (status === 'opened') {
      return 'status__opened'
    } else if (status === 'closed') {
      return 'status__closed'
    } else if (status === 'created' && 'started') {
      return 'status'
    }
  }
  render(props) {
    return (
      <ul>
        {this.props.userData
        .filter(events => {
          return ((events.type === 'PullRequestEvent') && (events.payload.action === 'closed' || events.payload.action === 'opened'))})
        .map((data, i) => {
          return <Card 
                    key={data.id}
                    type={data.type}
                    spanClass={this.handleStatus(data.payload.action)}
                    action={data.payload.action}
                    name={data.repo.name}
                    prTitle={data.payload}
                    />
        })} 
        {this.props.userData
        .filter(events => events.type === 'ForkEvent')
        .map((data) => {
          return <Card 
                    key={data.id}
                    type={data.type}
                    spanClass={this.handleStatus(data.payload.action)}
                    action={data.payload.action}
                    name={data.repo.name}
                    prTitle={data.payload}
                    />
        })} 
      </ul>
    )
  }
}
