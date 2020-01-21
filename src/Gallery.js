import React from "react";
import Movies from "./Movies.js";
import getGallery from "./getGallery";

export default function Gallery() {
  return (
    <div>
      <div className="container">
     {
       getGallery().map(cover => {
         return (
          <Movies key={cover.id} name={cover.title} logo={cover.image} id={cover.id}/>
         )
       })

     }
      </div>
    </div>
  );
}


