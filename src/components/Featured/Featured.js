import React from 'react'
import useFetch from '../../hooks/useFetch.js';
import "./Featured.scss";

const Featured = () => {
  const {data,loading,error} = useFetch("/hotels/countByCity?cities=berlin,madrid,london");

  return (
    <div className="featured">
      {loading ? ("Loading please wait") : (
      <>
      <div className="featuredItem">
        <img src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg" alt="" className='featuredImg'/>
        <div className="featuredTitles">
          <h1>Berlin</h1>
          <h2>{data[0]}</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg" alt="" className='featuredImg'/>
        <div className="featuredTitles">
          <h1>Madrid</h1>
          <h2>{data[1]}</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg" alt="" className='featuredImg'/>
        <div className="featuredTitles">
          <h1>London</h1>
          <h2>{data[2]}</h2>
        </div>
      </div>
      </>)}
    </div>
  )
}

export default Featured