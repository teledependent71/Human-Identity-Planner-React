import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Human Identity Planner</title>
        <meta property="og:title" content="Human Identity Planner" />
      </Helmet>
    </div>
  )
}

export default Home
