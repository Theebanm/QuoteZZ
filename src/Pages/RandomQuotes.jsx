import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";

const RandomQuotes = () => {
  const [quotes, setQuotes] = useState(null);
  const fetchQuotes = async () => {
    const res = await fetch("https://dummyjson.com/quotes/random");
    const result = await res.json();
    console.log(result);

    if (result?.quote) {
      setQuotes(result);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);
  return (
    <div className="mt-52 pl-16  ">
      <div>
        <h1 className="text-lg font-semibold md:font-extrabold md:text-2xl lg:text-4xl sm:text-xl">
          {quotes?.quote}
        </h1>
        <h4 className="text-center px-4 mt-5 font-bold">
          Author : {quotes?.author}
        </h4>
      </div>
    </div>
  );
};

export default RandomQuotes;
