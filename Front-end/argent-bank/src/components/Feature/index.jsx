import React from "react";
import "../../style/Feature/feature.css"

function Feature({image,alt, title, text}) {
    return (
        <div className="feature-item">
          <img src={image} alt={alt} className="feature-icon" />
          <h3 className="feature-item-title">{title}</h3>
          <p>{text}</p>
        </div>
    )
}
export default Feature