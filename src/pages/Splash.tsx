import Logo from "@/assets/svg/logo.svg?react";
import LogoText from "@/assets/svg/logo-text.svg?react";
import ComingSoon from "../assets/soon.png"
// import {useState, useEffect } from "react";

const SplashPage = () => {
  // const [imageLoaded, setImageLoaded] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setImageLoaded(true);
  //   }, 3000); // 3000ms = 3 seconds
  // }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-5">
      <Logo />
      <div className="flex flex-col items-center justify-center overflow-hidden">
        <LogoText className="mb-4 animate-appearFromBottom" />
        
        <img
          src={ComingSoon}
          className="animate-pulse"
          alt="Your image"
          width="150"
        />
    
      </div>
    </div>
  );
};

export default SplashPage;
