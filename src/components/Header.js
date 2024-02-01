import React from "react";
import "./Cstyles.css";

function Header() {
  return (
    <>
      <header className="container">
        <div class="header-wrap">
          <div class="profile-pic">
            <img src="/images/profileimg.jpg" alt="profile-logo" />
          </div>
          <div class="profile-info">
            <div class="title row">
              <h2>
                <b>Cafrodytes - Game By The Lunar Studios</b>
              </h2>
              <span class="verfied-icon">
                <img src="/images/verified.png"></img>
              </span>
              <button class="Profilebtn">Follow</button>
              <button class="Profilebtn">Message</button>
            </div>
            <div class="desktop-only">
              <div class="details row">
                <li>
                  <span>12</span> posts
                </li>
                <li>
                  <span>675K</span> followers
                </li>
                <li>
                  <span>6</span> following
                </li>
              </div>
              <div class="descriptions row last">
                <span>
                  <b>Cafrodytes</b>
                  <br />
                  "Embark on an epic gaming journey with Cafrodytes, brought to
                  life by The Lunar Studios. Immerse yourself in a world where
                  adventure knows no bounds! 🌌🎮 #Cafrodytes #TheLunarStudios
                  #GamingAdventure" <br />
                  <a href="#">www.the10xacademy.com</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
