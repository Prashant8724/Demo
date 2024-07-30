import React from 'react'

import { Helmet } from 'react-helmet'

import Gallery22 from '../components/gallery22'
import Banner2 from '../components/banner2'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>demo</title>
        <meta property="og:title" content="demo" />
      </Helmet>
      <Gallery22
        content1={
          <fragment>
            <span className="home-text thq-body-large">Demo</span>
          </fragment>
        }
      ></Gallery22>
      <img
        src="https://images.unsplash.com/photo-1721766827830-961da6ed8c91?ixid=M3w5MTMyMXwwfDF8YWxsfDEzfHx8fHx8Mnx8MTcyMjA5MjQ4N3w&amp;ixlib=rb-4.0.3&amp;w=300"
        alt="image"
        className="home-image"
      />
      <Banner2
        action1={
          <fragment>
            <span className="home-text1">click here</span>
          </fragment>
        }
      ></Banner2>
    </div>
  )
}

export default Home
