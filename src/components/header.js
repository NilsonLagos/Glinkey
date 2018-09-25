import React, { Component } from "react"
import { Link } from 'gatsby'
import '../styles/header.css'
import logo from '../images/logo.png'
import menu from '../images/06_menu_stack-2-512.png'

class Header extends Component {
  onNavBarToggleClick(){
    document.getElementById('js-menu').classList.toggle('active')
  }
  render() {
    return (
      <nav className="navbar">
        <span className ="navbar-toggle" id="js-navbar-toggle" onClick={this.onNavBarToggleClick}>
          <img src={menu} width="24px"/>
        </span>      
        <Link href="#" className="logo" to=""><img src={logo}/></Link>
        <ul className="main-nav" id="js-menu">
          <li>
            <Link className="nav-links" to="/a">HOME</Link>
          </li>
          <li>
            <Link href="#" className="nav-links" to="/a">WHO WE ARE?</Link>
          </li>
          <li>
            <Link href="#" className="nav-links" to="/a">EXPERTS</Link>
          </li>
          <li>
            <Link href="#" className="nav-links" to="/a">CONTACT</Link>
          </li>
          
        </ul>
      </nav>
    )
  }
}


export default Header
