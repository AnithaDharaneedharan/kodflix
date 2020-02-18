import React from "react";
import { Link } from "react-router-dom";

export default function BestPractices() {
  return (
    <>
      <div className="cursive">
        <h1>React Patterns, Antipatterns and Best Practices</h1>
        <h2> You are not done just because your code works!!</h2>

        <ul className="left">
          <li>Not having unit tests and 100% coverage</li>
          <li>Dont Touch the DOM</li>
          <li>Inefficient project file structure</li>
          <li>Template literals</li>
          <li>Incorrect proptypes</li>
          <li>Avoid the Monolitic approach </li>
          <li>Adjacent JSX elements must be wrapped</li>
          <li>class instead of className</li>
          <li>Dont Touch the DOM</li>
          <li>export default</li>
          <li>
            Not using the right lifecycle method--EVERYTIME SETSTATE is called ,
            rendered so many times
          </li>
          <li>Infinite loop if you dont pass into the arrow fn / bind it</li>
          <li>Not keeping up with upgrades</li>
          <li>rcc,imrc from ES7 PLUGIN - Import snippet library</li>
          <li>Async await instead of promises</li>
          <li>
            Component doesnt contain an export when import {} and default{" "}
          </li>
          <li>Use spread operator to shallow copy instead of object.assign</li>
          <li>https://github.com/airbnb/javascript</li>
          <li>Set up linting</li>
          <li>Use React dev tools</li>
          <li>triple ===</li>
          <li>Inline conditions && to check AND condition instead of if</li>
          <li>
            When there is no state , use fn component since less code and no
            this binding{" "}
          </li>
          <li>Semantic - booleans should start with Is</li>
          <li>
            This.state every time == create a variable , then object
            destructuring and short hand
          </li>
          <li>Use Default values</li>
        </ul>
      </div>
      <Link to="/dry">DRY</Link>
     
    </>
  );
}
