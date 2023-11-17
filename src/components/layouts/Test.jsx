import { useEffect, useState } from "react";

const Test = () => {
  const [swipe, setSwipe] = useState(false);
  useEffect(() => {
    const interval = setTimeout(() => {
      setSwipe((prevSwipe) => !prevSwipe);
    }, 2800);
    return () => clearTimeout(interval);
  }, [swipe]);
  return (
    <div className="flex flex-col">
      <div className="flex w-[40rem] items-center">
        <div className="inline-block relative h-[6vw] w-[65rem] pr-[0.5vw] pl-[0.5vw] overflow-hidden">
          <div
            className="h-[10.5vw] w-[15vw]"
            id={swipe ? "hover_test" : "hover_test_active"}
          >
            <p className="block font-cyber text-[3.3rem]">Jamie K. Cotten</p>
            <p className="block font-cyber text-[3.3rem]">William Gibson</p>
          </div>
        </div>
        <div className="flex flex-col gap-1 h-40 w-[120rem] pl-9">
          <div className="inline-block relative h-[9.7vw] w-[18rem] pr-[0.5vw] pl-[0.5vw] overflow-hidden">
            <div
              className="h-[10.5vw] w-full"
              id={swipe ? "hover_test_c" : "hover_test_c_active"}
            >
              <p className="font-[500] leading-[1.35rem] text-[1.05rem] pb-7">
                Déplacé Maison is a convincer for anticipation. The urban
                trekking as nevers seen before. An exceptional product that has
                no equal alongside a great team represent the brand
                professionally.{" "}
              </p>
              <p className="font-[500] leading-[1.35rem] text-[1.05rem]">
                Good things come to those who wait – Déplacé Maison is what has
                been missing in the modern fashion industry for years. Buy a
                shoe of high quality and design it finally happened.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
