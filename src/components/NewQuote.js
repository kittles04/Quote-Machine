import React from "react";
import PropTypes from "prop-types";

const NewQuote = ({ newQuote }) => {
  //receive quotes from QuoteBox, map through and display in this component
  return (
    <div className="quote-details">
      <div className="card-content">
        <blockquote id="text">{newQuote.quote}</blockquote>
        <blockquote id="author">{newQuote.author}</blockquote>
      </div>
    </div>
  );
};

NewQuote.propTypes = {
  newQuote: PropTypes.object,
};

export default NewQuote;
