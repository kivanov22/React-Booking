import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Header } from '../../components/Header/Header.js'
import { Navbar } from '../../components/Navbar/Navbar.js'
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'
import "./Hotel.scss"
import MailList from '../../components/MailList/MailList.js'
import Footer from '../../components/Footer/Footer.js'

export const Hotel = () => {
  const photos = [
    {
      src: "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
    },
    {
      src: "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
    },
    {
      src: "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
    },
    {
      src: "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
    },
    {
      src: "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
    }
  ]
  return (
    <div>
      <Navbar />
      <Header type="list"/>
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighLight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
          {photos.map(photo => (
            <div className="hotelImgWrapper">
              <img src={photo.src} alt="" className='hotelImg'/>
            </div>
          ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
            <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
            <p className="hotelDesc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt veniam exercitationem saepe harum, ut id voluptates dolor placeat alias a explicabo repellat nisi consequuntur ipsam quae sequi enim eaque, eligendi nobis. Velit maiores id amet rem assumenda praesentium. Nobis obcaecati non labore laboriosam maiores dolore excepturi debitis tenetur deserunt iusto!
            </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>Located in the real heart of Krakow, this property has an excellent location score of 9.8</span>
              <h2><b>$945</b>(9 nights)</h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}
