import './test'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'

if (module.hot) {
  module.hot.accept(['./test.js'], () => {
    console.log('test.js 模块更新')
  })
}

ReactDOM.render(<App />, document.getElementById('app'))
