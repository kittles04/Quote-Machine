import React from "react";
import "./index.css";
import QuoteBox from "./components/QuoteBox";
import Share from "./components/Share";

export default function App() {
  return (
    <div id="App">
      <QuoteBox />
      <Share />
    </div>
  );
}
