import React from "react";

import Gallery from "./Gallery";
import Search from "./Search";
import Email from "./Email";
import PasswordMatch from "./password"

function App() {

  //const[movieName, setMovieName] = useState('');

  return (
    <div>
     <PasswordMatch/>
      <Search />
      <Email />
      <Gallery />
    </div>
  );
}

export default App;
