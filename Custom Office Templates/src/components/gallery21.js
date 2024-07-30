import React from 'react'

import PropTypes from 'prop-types'

import './gallery21.css'

const Gallery21 = (props) => {
  return (
    <div className="gallery21-gallery3 thq-section-padding">
      <div className="gallery21-max-width thq-section-max-width">
        <div className="gallery21-section-title">
          <span>
            {props.content1 ?? (
              <fragment>
                <span className="gallery21-text1 thq-body-large">
                  Default value
                </span>
              </fragment>
            )}
          </span>
        </div>
        <div className="gallery21-content">
          <div className="gallery21-container">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="gallery21-image1 thq-img-ratio-4-3"
            />
          </div>
          <div className="gallery21-container1"></div>
          <div className="gallery21-container2">
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="gallery21-image3 thq-img-ratio-4-3"
            />
          </div>
          <div className="gallery21-container3">
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="gallery21-image31 thq-img-ratio-4-3"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Gallery21.defaultProps = {
  image1Src:
    'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=600',
  content1: undefined,
  image3Src:
    'https://images.unsplash.com/photo-1552083974-186346191183?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=600',
  image4Alt: 'PlaceholderImage1302',
  image4Src:
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=600',
  image3Alt: 'PlaceholderImage1302',
  image1Alt: 'PlaceholderImage1302',
}

Gallery21.propTypes = {
  image1Src: PropTypes.string,
  content1: PropTypes.element,
  image3Src: PropTypes.string,
  image4Alt: PropTypes.string,
  image4Src: PropTypes.string,
  image3Alt: PropTypes.string,
  image1Alt: PropTypes.string,
}

export default Gallery21
