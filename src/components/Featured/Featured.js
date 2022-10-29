import React from 'react'
import "./Featured.scss";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg" alt="" className='featuredImg'/>
        <div className="featuredTitles">
          <h1>Maldives</h1>
          <h2>50 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg" alt="" className='featuredImg'/>
        <div className="featuredTitles">
          <h1>Maldives</h1>
          <h2>50 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg" alt="" className='featuredImg'/>
        <div className="featuredTitles">
          <h1>Maldives</h1>
          <h2>50 properties</h2>
        </div>
      </div>
    </div>
  )
}

export default Featured