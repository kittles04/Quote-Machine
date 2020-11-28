import React from "react";
import PropTypes from "prop-types";
import NewQuote from "./NewQuote";
import { useState, useEffect } from "react";

let colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857",
];

const getPost = () =>
  fetch(
    "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
  ).then((response) => response.json());
const QuoteBox = (props) => {
  //call to the APi and hold quotes array in state hook, pass to NewQuote.js
  //button is here
  const [quotes, updateQuotes] = useState([]);
  const [currentQuoteIndex, updateCurrentQuoteIndex] = useState(0);
  const [currentColor, updateCurrentColor] = useState(0);

  useEffect(() => {
    // componentDidMount - This runs once on start up
    getPost().then((response) => updateQuotes(response["quotes"]));
  }, []);

  if (quotes.length === 0) {
    return <div>Loading...</div>;
  }

  const handleClick = () => {
    //get a new quote/author to render
    updateCurrentQuoteIndex(currentQuoteIndex + 1);
    if (currentColor === 12) {
      updateCurrentColor(0);
    } else {
      updateCurrentColor(currentColor + 1);
    }
  };

  const handleTweet = () => {
    let tweetUrl =
      "https://twitter.com/intent/tweet?text=" +
      encodeURIComponent(quotes[currentQuoteIndex].quote) +
      " By " +
      encodeURIComponent(quotes[currentQuoteIndex].author);
    document.getElementById("tweet-quote").setAttribute("href", tweetUrl);
    console.log(tweetUrl);
  };

  const newQuote = quotes[currentQuoteIndex];
  document.body.style.backgroundColor = colors[currentColor];

  return (
    <div id="quote-box">
      <div className="card medium">
        <NewQuote newQuote={newQuote} />
        <a
          className="waves-effect waves-light btn"
          id="new-quote"
          onClick={handleClick}
        >
          New quote
        </a>
        <a
          className="waves-effect waves-light btn"
          id="tweet-quote"
          target="_blank"
          onClick={handleTweet}
          href="#"
        >
          Share on Twitter
        </a>
      </div>
    </div>
  );
};

QuoteBox.propTypes = {};

export default QuoteBox;
