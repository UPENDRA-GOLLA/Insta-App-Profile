import React, { useState } from "react";
import "./Cstyles.css";
import data from "./Data.js";

function Main() {
  const [imgdata, setImgData] = useState(data);

  return (
    <>
      <div className="container">
        <div className="gallery">
          {imgdata.map((curr) => {
            return (
              <>
                <div className="gallery-item" tabindex="0">
                  <img
                    src={curr.image}
                    className="gallery-image"
                    alt=""
                  />
                  <div className="gallery-item-type">
                    <span className="visually-hidden"></span>
                    <i className="fa fa-clone" aria-hidden="true"></i>
                  </div>
                  <div className="gallery-item-info">
                    <ul>
                      <li className="gallery-item-likes">
                        <span className="visually-hidden"></span>
                        <i className="fa fa-heart" aria-hidden="true"></i>{curr.like}
                      </li>
                      <li className="gallery-item-comments">
                        <span className="visually-hidden"></span>
                        <i className="fa fa-comment" aria-hidden="true"></i>{curr.Comment}
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="loader"></div>
    </>
  );
}

export default Main;
