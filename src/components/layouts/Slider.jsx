import { motion, useDragControls } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import img1 from "../../assets/Images/slider/1.jpeg";
import img2 from "../../assets/Images/slider/2.jpeg";
import img3 from "../../assets/Images/slider/3.jpeg";
import img4 from "../../assets/Images/slider/4.jpeg";
import img5 from "../../assets/Images/slider/5.jpeg";
import Case from "./Case";

const Slider = () => {
  const controls = useDragControls();
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    const handleResize = () => {
      if (carousel.current) {
        console.log(carousel.current.scrollWidth);
        // console.log(carousel.current.offsetWidth);
        setWidth(carousel.current.scrollWidth - 1000);
      }
    };

    handleResize(); // Initial calculation
    window.addEventListener("resize", handleResize); // Update on resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, []);
  return (
    <motion.div className="cursor-grab pl-[40rem]">
      <motion.div
        ref={carousel}
        drag="x"
        dragElastic={0.5}
        dragConstraints={{ right: 0, left: -width }}
        dragControls={controls}
        whileTap={{ cursor: "grabbing" }}
        className="flex gap-7 min-w-[153.4vw]"
      >
        <Case
          img={img1}
          name={"cactus"}
          pricec={"€ 300 EUR"}
          price={"€ 180 EUR"}
        />
        <Case
          img={img2}
          name={"the eyes"}
          pricec={"€ 240 EUR"}
          price={"€ 144 EUR"}
        />
        <Case
          img={img3}
          name={"duran"}
          pricec={"€ 240 EUR"}
          price={"€ 144 EUR"}
        />
        <Case
          img={img4}
          name={"the code"}
          pricec={"€ 240 EUR"}
          price={"€ 144 EUR"}
        />
        <Case
          img={img5}
          name={"carnera"}
          pricec={"€ 240 EUR"}
          price={"€ 144 EUR"}
        />
      </motion.div>
    </motion.div>
  );
};

export default Slider;
