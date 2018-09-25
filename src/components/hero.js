import React, { Component } from "react"
import { Link } from 'gatsby'
import '../styles/hero.css'
import bannerImage from '../images/home-section-banner.jpg'

class Hero extends Component {  
  render() {
    return (
      <div className="hero">
        <div className="hero-container">
          <div className="hero-title">
            Experts on Exports and Imports around the world answering your questions within 24 hours
          </div>
          <img src={bannerImage} className="hero-image"></img>
        </div>
        <div className="hero-container-question">
          <input className="hero-input" type="text" placeholder="Type your question"/>
          <button className="hero-button"> Send </button>
        </div>
      </div>
    )
  }
}


export default Hero
