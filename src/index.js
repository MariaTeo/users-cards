import { render } from '@testing-library/react'
import React from 'react'
import App from './component/app/app'
import './index.css'


const app = <App/>
const here = document.getElementById('here')

// display the app in browser

render(app, here)
