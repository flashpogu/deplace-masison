import { useLayoutEffect, useRef, useState } from "react";

const Image = (props) => {
  const preScroll = useRef(null);
  const elemRef = useRef(null);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const botPos = (element) => element.getBoundingClientRect().bottom;
    const onScroll = () => {
      const divBotPos = botPos(elemRef.current);
      const scrollPos = preScroll.current > window.scrollY;
      preScroll.current = window.scrollY;
      if (scrollPos == null) {
        return;
      }
      if (scrollPos && divBotPos > window.innerHeight) {
        setScale(1);
        return;
      }
      if (divBotPos < window.innerHeight) {
        setScale(1.1);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <div
        ref={elemRef}
        style={{
          overflow: "hidden",
        }}
      >
        <img
          src={props.img}
          alt=""
          style={{
            transition: "transform 500ms ease-in-out",
            transform: `scale(${scale})`,
          }}
        />
      </div>
    </>
  );
};

export default Image;
