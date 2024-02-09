import React from "react";
import vedio1 from "../../../assets/vedio1.mp4";
import image1 from "../../../assets/image1.png";
import image2 from "../../../assets/image2.png";
import image3 from "../../../assets/image3.png";

function Background({ playStatus, heroCount }) {
  const commonClasses =
    "flex h-full w-full items-stretch fixed inset-0 p-0 object-cover blur-xl animate-fade-in";

  if (playStatus) {
    return (
      <video className={commonClasses} autoPlay loop muted>
        <source src={vedio1} type="video/mp4" />
      </video>
    );
  }
  if (heroCount === 0) {
    return <img className={`${commonClasses}`} src={image1} alt="image1" />;
  } else if (heroCount === 1) {
    return <img className={`${commonClasses}`} src={image2} alt="image2" />;
  } else if (heroCount === 2) {
    return <img className={`${commonClasses}`} src={image3} alt="image3" />;
  }

  return null;
}

export default Background;
