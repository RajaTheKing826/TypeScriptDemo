import React from 'react'
import { Link } from 'react-router-dom'

import ReactLogo from '../../components/common/Icons/ReactLogo'
import {
  SAMPLE_ROUTE_PATH,
  POSTS_ROUTE_PATH,
  HOC_ROUTE_PATH,
  IMAGES_ROUTE_PATH
} from '../../constants/NavigationConstants'

import './index.css'

function HomeRoute() {
  return (
    <div className='app'>
      <header className='bg-indigo-900 app-header'>
        <ReactLogo className='app-logo' />
        <Link to={SAMPLE_ROUTE_PATH}>Sample Route</Link>
        <Link to={POSTS_ROUTE_PATH}>Posts App</Link>
        <Link to={IMAGES_ROUTE_PATH}>Images</Link>
        <Link to={HOC_ROUTE_PATH}>Hoc Route</Link>
      </header>
    </div>
  )
}

export default HomeRoute
