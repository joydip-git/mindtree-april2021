import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'

//appDesign is the vitual DOM (means: tree of React elements)
// const appDesign = App()
const appDesign = <App />

//get the element in HTML file
const rootDiv = document.getElementById('root')

//create Actual DOM based on the VDOM by uisng render() method of ReactDOM library module and push this part of actual DOM in the division in HTML file
ReactDOM.render(appDesign, rootDiv)
