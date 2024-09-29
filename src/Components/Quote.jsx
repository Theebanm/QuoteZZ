import React from "react";

const Quote = ({ quote }) => {
  return (
    <div className="container p-3 ml-2 mt-4 border shadow-lg">
      <div className="text-center">
        <h2 className="p-3 mt-2 font-semibold">{quote?.quote}</h2>
        <p className="text-gray-600 ">Author : {quote?.author}</p>
      </div>
    </div>
  );
};

export default Quote;
