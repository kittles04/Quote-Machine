import React from "react";
import PropTypes from "prop-types";
import NewQuote from "./NewQuote";
import { useState, useEffect } from "react";

const getPost = () =>
  fetch(
    "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
  ).then((response) => response.json());
const QuoteBox = (props) => {
  //call to the APi and hold quotes array in state hook, pass to NewQuote.js
  //button is here
  const [quotes, updateQuotes] = useState([]);

  useEffect(() => {
    getPost().then((response) => updateQuotes(response["quotes"]));
  }, []);

  if (!quotes) {
    return <div>Loading...</div>;
  }

  const handleClick = () => {
    console.log(quotes);
  };

  return (
    <div id="quote-box">
      <div className="card medium">
        <div className="card-content">
          <NewQuote quotes={quotes} />
        </div>
        <a
          className="waves-effect waves-light btn"
          id="new-quote"
          onClick={handleClick}
        >
          New quote
        </a>
      </div>
    </div>
  );
};

QuoteBox.propTypes = {};

export default QuoteBox;
