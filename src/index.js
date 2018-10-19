import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimesCircle, faExclamationCircle, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

let openAlertFunction;
let timer;

const Container = styled.div`
.alert-enter {
  left: -400px;
  }

.alert-enter.alert-enter-active {
  left: 0;
  transition: left 200ms ease-in;
}

.alert-leave {
  opacity: 1;
}

.alert-leave.alert-leave-active {
  opacity: 0.01;
  transition: opacity 200ms ease-in;
}
`

const StyledAlert = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
  max-width: 600px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  position: fixed;
  bottom: 0;
  left: 0;
  margin: 50px;
  color: white;
  border-radius: 3px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Open Sans', sans-serif;
  .message {
    display: flex;
    flex-direction: row;
    padding: 20px;
    justify-content: flex-start;
    .icon {
      margin: auto auto;
      font-size: 24px;
    }
  }
  p {
    text-align: left;
    margin: 0;
    padding: 3px 20px;
    font-weight: 500;
  }

`

export default class Alert extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      type: '',
      message: '',
    }
    this.closeAlert = this.closeAlert.bind(this);
    this.openAlert = this.openAlert.bind(this);
  }
  componentDidMount() {
    openAlertFunction = this.openAlert;
  }

  openAlert({ message, type, duration }) {
  const displayTime = duration || 3500;
  const component = this;
  if (component.state.open === false) {
    component.setState({
      open: true,
      message,
      type,
    });
    timer = setTimeout(function () {
     component.closeAlert()
   }, displayTime);
 } else {
   clearTimeout(timer)
   this.closeAlert();
   component.setState({
     open: true,
     message,
     type,
   });
   timer = setTimeout(function () {
    component.closeAlert()
  }, displayTime);
 }
};

  closeAlert() {
    this.setState({
      open:false,
      message: '',
      type: '',
    })
  }

  testColor(color) {
    const regexp = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/ // tests for hex colors
    if (color) return regexp.test(color) ? color : false;
    return false;
  }

  getIcon() {
    const { type } = this.state;
    const icons = {
      success: faCheckCircle,
      danger: faTimesCircle,
      warning: faExclamationCircle,
      info: faQuestionCircle,
    }
    return icons[type];
  }

  getBGColor() {
    const { type } = this.state;
    const { infoColor, warningColor, dangerColor, successColor } = this.props;
    const colors = {
      success: this.testColor(successColor) || '#28A745',
      danger: this.testColor(dangerColor) || '#DB3545',
      info: this.testColor(infoColor) || '#15A2B8',
      warning: this.testColor(warningColor) || '#FEC108',
    }
    return type ? colors[type] : colors.info;
  }

  render() {
    const { open } = this.state;
    const { fontColor } = this.props;
    const color = this.testColor(fontColor) ? fontColor : '#ffffff';
    const message = <span className="message">
      <FontAwesomeIcon className="icon" icon={this.getIcon()} />
      <p className="Alert-text" style={{ color }}>{this.state.message}</p>
    </span>
    return (
      <Container>
      <CSSTransitionGroup
        transitionName="alert"
        transitionEnterTimeout={200}
        transitionLeaveTimeout={200}
      >
        {open ?
          <StyledAlert
            key={message}
            style={{background: `${this.getBGColor()}`}}>
            {message}
          </StyledAlert> : null}
          </CSSTransitionGroup>
      </Container>
    )
  }
}

Alert.propTypes = {
  dangerColor: PropTypes.string,
  warningColor: PropTypes.string,
  successColor: PropTypes.string,
  infoColor: PropTypes.string,
  fontColor: PropTypes.string,
}

Alert.defaultProps = {
  dangerColor: undefined,
  warningColor: undefined,
  successColor: undefined,
  infoColor: undefined,
  fontColor: undefined,
}

export function openAlert({ message, type, duration }) {
  openAlertFunction({ message, type, duration });
}
