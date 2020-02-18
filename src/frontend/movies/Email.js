import React from "react";
import getGallery from "./get-gallery";

export default function Email(props) {

// const[movieTitle , getEmailState] = useState();

  function getEmailId(movieTitle) {
    return getGallery.find(movie => movie.title === movieTitle)
  }

  return (
    //     {/* <div className="messageBox">
    //   <label className="message">Message</label>
    //   <textarea rows="1" columns="30"></textarea>
    // </div> */}

    //   {/* <label className="message">Enter the from email</label> */}
    //   {/* <input className="email" type="fromEmail" id="fromEmail"></input> */}
    //   {/* <label className="message">Enter the To email</label> */}
    //   {/* <input className="email" type="toEmail" id="toEmail"></input> */}

    //  {/* <input size="30" type="submit" value="Send Request"></input>  */}


    <div className="emailBox">
      <button onClick={(movieTitle) => getEmailId(movieTitle)}>Get Email</button>
{/* 
      <a href={`mailto${getEmailId()}:?Subject=Hello`}>Send email</a> */}
    </div>
  );
}


