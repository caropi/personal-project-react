import React, { Component } from 'react'

export default class UserEvents extends Component {
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
    console.log(this.props.userData)
    return (
      <>
      {/* <button>
        <img src="/assets/pr.png" className="button-img" alt=""/>
        Pull Request
      </button>
      <button>
        <img src="/assets/fork.png" className="button-img" alt=""/>
        Forked Repos
      </button> */}
      <ul>
        {this.props.userData
        .filter(events => {
          return (events.payload.action === 'closed' || events.payload.action === 'opened')
        })
        .map((data, i) => {
          return <li key={data.id}>
            <h4>
              <svg className="octicon octicon-repo mr-2 text-gray" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fillRule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
              <span className="eventType">{data.type === 'ForkEvent'? 'Forked Repo' : 'Pull Request'}</span>
              <span className={this.handleStatus(data.payload.action)}>{data.payload.action}</span>
            </h4>
            <a href={`https://github.com/${data.repo.name}`} className="repo-link">{data.repo.name}</a>
            {/* TODO: FIX MESSAGE PROBLEM */}
            {/* <p>{data.payload.commits[0].message}</p> */}
          </li>
        })} 
        {this.props.userData
        .filter(events => events.type === 'ForkEvent')
        .map((data, i) => {
          return <li key={data.id}>
            <h4>
              <svg className="octicon octicon-repo mr-2 text-gray" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fillRule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
              <span className="eventType">{data.type === 'ForkEvent' ? 'Forked Repo' : 'Pull Request'}</span>
              <span className={this.handleStatus(data.payload.action)}>{data.payload.action}</span>
            </h4>
            <a href={`https://github.com/${data.repo.name}`} className="repo-link">{data.repo.name}</a>
          </li>
        })} 
      </ul>
      </>
    )
  }
}
