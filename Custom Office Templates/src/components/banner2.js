import React from 'react'

import PropTypes from 'prop-types'

import './banner2.css'

const Banner2 = (props) => {
  return (
    <div className="banner2-container thq-section-padding">
      <div className="banner2-max-width thq-section-max-width">
        <div className="banner2-container1"></div>
        <button type="button" className="banner2-button thq-button-filled">
          <span>
            {props.action1 ?? (
              <fragment>
                <span className="banner2-text1">click here</span>
              </fragment>
            )}
          </span>
        </button>
        <video
          src={props.video1Src}
          loop="true"
          muted="true"
          poster={props.video1Poster}
          autoPlay="true"
          className="banner2-video"
        ></video>
      </div>
    </div>
  )
}

Banner2.defaultProps = {
  video1Src: '',
  video1Poster: 'https://play.teleporthq.io/static/svg/videoposter.svg',
  action1: undefined,
}

Banner2.propTypes = {
  video1Src: PropTypes.string,
  video1Poster: PropTypes.string,
  action1: PropTypes.element,
}

export default Banner2
