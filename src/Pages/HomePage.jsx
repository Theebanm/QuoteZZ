import React, { useEffect, useState } from "react";
import Quote from "../Components/Quote";

const HomePage = () => {
  const [quotes, setQuotes] = useState(null);
  const fetchQuotes = async () => {
    const res = await fetch("https://dummyjson.com/quotes");
    const result = await res.json();
    if (result?.quotes) {
      setQuotes(result?.quotes);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);
  return (
    <div className="grid grid-cols sm:gap-4 md:grid-cols-2  lg:grid-cols-3 gap-3">
      {quotes?.length > 0 ? (
        quotes.map((quote) => <Quote quote={quote} key={quote.id} />)
      ) : (
        <h1>No Quotes Available</h1>
      )}
    </div>
  );
};

export default HomePage;
