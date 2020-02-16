import React from 'react'
import ReactDOM from 'react-dom'

import { Application } from './application'

const wrapper = document.getElementById('react-demo')
if (wrapper) {
  ReactDOM.render(<Application />, wrapper)
}
