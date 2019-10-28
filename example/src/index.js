import React from 'react'
import ReactDOM from 'react-dom'
import SimpleFormExample from './SimpleFormExample'
import FieldArrayExample from './FieldArrayExample'

import './index.css'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <>
    <SimpleFormExample />
    <div style={{ margin: '30px 0', height: 20, backgroundColor: '#ddd' }} />
    <FieldArrayExample />
  </>,
  rootElement
)
