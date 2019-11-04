import React from 'react'
import ReactDOM from 'react-dom'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import SimpleFormExample from './SimpleFormExample'
import FieldArrayExample from './FieldArrayExample'

import './index.css'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <SimpleFormExample />
    <div style={{ margin: '30px 0', height: 20, backgroundColor: '#ddd' }} />
    <FieldArrayExample />
  </MuiPickersUtilsProvider>,
  rootElement
)
