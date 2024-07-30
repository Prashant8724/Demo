import React from 'react'

import PropTypes from 'prop-types'

import './gallery22.css'

const Gallery22 = (props) => {
  return (
    <div className="gallery22-gallery3 thq-section-padding">
      <div className="gallery22-max-width thq-section-max-width">
        <div className="gallery22-section-title">
          <span>
            {props.content1 ?? (
              <fragment>
                <span className="gallery22-text1 thq-body-large">
                  Default value
                </span>
              </fragment>
            )}
          </span>
        </div>
        <div className="gallery22-content">
          <div className="gallery22-container">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="gallery22-image1 thq-img-ratio-4-3"
            />
          </div>
          <div className="gallery22-container1">
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="gallery22-image2 thq-img-ratio-4-3"
            />
          </div>
          <div className="gallery22-container2">
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="gallery22-image3 thq-img-ratio-4-3"
            />
          </div>
          <div className="gallery22-container3">
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="gallery22-image31 thq-img-ratio-4-3"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Gallery22.defaultProps = {
  image4Alt: 'PlaceholderImage1302',
  image3Src:
    'https://images.unsplash.com/photo-1552083974-186346191183?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=600',
  image2Alt: 'PlaceholderImage1302',
  image1Src:
    'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=600',
  image3Alt: 'PlaceholderImage1302',
  content1: undefined,
  image1Alt: 'PlaceholderImage1302',
  image4Src:
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=600',
  image2Src:
    'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=600',
}

Gallery22.propTypes = {
  image4Alt: PropTypes.string,
  image3Src: PropTypes.string,
  image2Alt: PropTypes.string,
  image1Src: PropTypes.string,
  image3Alt: PropTypes.string,
  content1: PropTypes.element,
  image1Alt: PropTypes.string,
  image4Src: PropTypes.string,
  image2Src: PropTypes.string,
}

export default Gallery22
