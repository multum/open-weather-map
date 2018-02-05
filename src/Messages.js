import React, { Component } from 'react';
import { connect } from 'react-redux';
class Messages extends Component{
  render() {

    return (
      <div>
        <ul>
          {this.props.messages.map(message => {
            return <li key={message.datestamp}>
              <p>{message.message}</p>
              <span>{new Date(message.datestamp).getMinutes()}</span>
            </li>
          })}
        </ul>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    messages: state.messageReducer
  }
}
export default connect(mapStateToProps)(Messages)