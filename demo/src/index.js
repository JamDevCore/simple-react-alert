import React, {Component} from 'react'
import {render} from 'react-dom'
import './index.css';
import Alert, { openAlert } from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <h1>Simple React Alert -- Demo</h1>
      <button onClick={() => openAlert({ message: 'Danger! This is totally not ok', type: 'danger' })}> Danger</button>
      <button onClick={() => openAlert({ message: 'This is a warning that what your doing is not going so well', type: 'warning' }) }>Warning</button>
      <button onClick={() => openAlert({ message: 'Just some information about the task in hand', type: 'info' })}>Information</button>
      <button onClick={() => openAlert({ message: 'That was a total success, well done', type: 'success' })}> Success</button>
      <Alert/>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
