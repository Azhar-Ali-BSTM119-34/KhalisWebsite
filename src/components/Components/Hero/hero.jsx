import React from "react";
import arrow_btn from "../../../assets/arrow_btn.png";
import play_icon from "../../../assets/play_icon.png";
import pause_icon from "../../../assets/pause_icon.png";

function Hero({
  setPlayStatus,
  heroData,
  heroCount,
  setHeroCount,
  playStatus,
}) {
  const handleButtonClick = () => {
    setPlayStatus(!playStatus);
  };

  return (
    <div className="mx-12 h-3/5 flex ">
      {/* <div className="w-full  ">
        <div className="text-white text-6xl font-medium leading-tight ">
          <p>{heroData.text1}</p>
          <p>{heroData.text2}</p>
        </div>
        <div className="flex items-center gap-8 w-max mt-14 p-2 pl-8 rounded-full no-underline bg-white cursor-pointer">
          <p className="text-gray-700 text-base font no-underline-medium">
            Explore The Feature
          </p>
          <img src={arrow_btn} alt="arrowbtn" />
        </div>
        <div className="mt-32 flex justify-between">
          <ul className="flex items-center gap-4 list-none">
            {[0, 1, 2].map((index) => (
              <li
                key={index}
                onClick={() => setHeroCount(index)}
                className={
                  heroCount === index
                    ? "hero-dot orange border border-blue-500"
                    : "w-4 h-4 bg-white rounded cursor-pointer border border-blue-500"
                }
              ></li>
            ))}
          </ul>

          <div>
            <div className="hero-play">
              <img
                onClick={handleButtonClick}
                src={playStatus ? pause_icon : play_icon}
                alt=""
              />
              <p className="text-white">See the video</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Hero;
