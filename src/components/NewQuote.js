import React from "react";
import PropTypes from "prop-types";
import QuoteBox from "./QuoteBox";
import { v4 as uuidv4 } from "uuid";

const NewQuote = ({ quotes }) => {
  //receive quotes from QuoteBox, map through and display in this component
  return quotes.length ? (
    <div className="text">
      <ul>
        {quotes.map((quote) => {
          return <li key={uuidv4()}>{quote.name}</li>;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty"> No quotes, we have to find some : ) </div>
  );
};

NewQuote.propTypes = {};

export default NewQuote;
