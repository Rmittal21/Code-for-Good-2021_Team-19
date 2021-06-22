import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div>
      <div className="header">
      <a href="#default" className="logo">Apni Shala Foundation</a>
      <div className="header-right">
        <a className="active" href="#home">Home</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
      </div>

      <div class="main-content">
        <div class="center">
          <button class="button" onClick={(e) => window.location.href="/school" }>Enter School Details</button><br/>
          <button class="button" onClick={(e) => window.location.href="/facilitator" }>Enter Facilitator Details</button><br/>
          <button class="button" onClick={(e) => window.location.href="/LoadData" }>View Schedule</button>
        </div>
      </div>

      <footer>
        <div className="content">
          <div className="left box">
            <div className="upper">
              <div className="topic">About us</div>
              <p>Apni Shala team is formed by individuals coming together from diverse backgrounds.
              Our team strives towards diverse representation and voices at all levels of the organization</p>
            </div>
            <div className="lower">
              <div className="topic">Contact us</div>
              <div className="email">
                <a href="#"><i className="fas fa-envelope"></i>contact@apnishala.org</a>
              </div>
            </div>
          </div>
          <div className="middle box">
            <div className="topic">What we do</div>
            <div><a href="#">School SEL</a></div>
            <div><a href="#">Diversity Shala</a></div>
            <div><a href="#">SEL Shala</a></div>
            <div><a href="#">Khoj Community Learning</a></div>
            <div><a href="#">Center</a></div>
            <div><a href="#">Youth project</a></div>
          </div>
          <div className="right box">
            <div className="topic">Subscribe us</div>
            <form action="#">
              <input type="text" placeholder="Enter email address"/>
              <input type="submit" name="" value="Send"/>
            </form>
          </div>
        </div>
        <div class="bottom">
          <p>Copyright © 2020 <a href="#">Apni Shala</a> All rights reserved</p>
        </div>
        </footer>
    </div>
    )
  }
}
