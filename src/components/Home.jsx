import React, { useState, useEffect } from "react";
import Background from "./Components/Background/Background";

import Hero from "./Components/Hero/hero";

function Home() {
  const [heroCount, setHeroCount] = useState(1);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHeroCount((count) => {
        return count === 2 ? 0 : count + 1;
      });
    }, 3000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Make sure to include an empty dependency array to run the effect only once

  let heroData = [
    { text1: "Dive intro", text2: "what you love" },
    { text1: "Indulge", text2: "in what you love" },
    { text1: "Give in to", text2: "your passion" },
  ];

  const handleHeroClick = (index) => {
    setHeroCount(index);
  };

  return (
    <div>
      <>
        <Background playStatus={playStatus} heroCount={heroCount} />
        <Hero
          setPlayStatus={setPlayStatus}
          heroData={heroData[heroCount]}
          heroCount={heroCount}
          setHeroCount={handleHeroClick}
          playStatus={playStatus}
        />
      </>
    </div>
  );
}
export default Home;
