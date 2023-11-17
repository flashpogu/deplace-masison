import Banner from "./layouts/Banner";
import Image from "./layouts/Image";
import img1 from "../assets/Images/img1.jpg";
import img2 from "../assets/Images/img2.jpeg";
import equal from "../assets/SVGs/equal.svg";
import equal_tr from "../assets/SVGs/equal_tr.svg";
import circle from "../assets/SVGs/circle.svg";
import arrow from "../assets/SVGs/arrow.svg";
import Test from "./layouts/Test";
import { useState } from "react";
import Slider from "./layouts/Slider";

const Hero = () => {
  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);
  return (
    <div className="flex flex-col gap-9 mt-10">
      <div className="flex flex-col text-[12rem] leading-[10.5rem] w-fit uppercase font-medium  ml-[21rem]">
        <p className="pl-64">Spring,</p>
        <div className="flex gap-2">
          <p>Summer</p>
          <div className="text-6xl font-normal tracking-tighter w-1/4 pt-3.5">
            <p>Coll.</p>
            <p className="pl-9">2021</p>
          </div>
        </div>
      </div>
      <div className="flex gap-9 relative  ml-[21rem]">
        <div className="flex flex-col w-[38%] gap-1">
          <div className="border-2 border-black">
            <Image img={img1} />
          </div>
          <div className="flex justify-between">
            <p className="text-xs font-medium">(01)</p>
            <p className="uppercase text-xs font-medium">man</p>
          </div>
        </div>
        <div className="flex flex-col w-[38%] gap-1">
          <div className="border-2 border-black">
            <Image img={img2} />
          </div>
          <div className="flex justify-between">
            <p className="text-xs font-medium">(02)</p>
            <p className="uppercase text-xs font-medium">wmns</p>
          </div>
        </div>
        <img
          className="w-52 z-5 mix-blend-multiply absolute bottom-[15.6rem] right-[39rem]"
          src={equal}
          alt="equal to sign image"
        />
      </div>
      <div className="flex justify-end mr-60 items-center gap-5  ml-[21rem]">
        <a className="text-xl font-medium" href="#">
          EXPLORE
        </a>
        <div
          id="button__hover"
          className="relative cursor-pointer"
          onMouseEnter={() => {
            setHover2(true);
          }}
          onMouseLeave={() => {
            setHover2(false);
          }}
        >
          <img className="w-20" src={circle} alt="" />
          <img
            id={hover2 ? "button__hover_arrow" : "button__hover_arrow_active"}
            className="w-9 absolute top-5 right-5"
            src={arrow}
            alt=""
          />
        </div>
      </div>
      <Banner />
      <div className="ml-[21rem] w-[70rem] mt-48">
        <div className="flex flex-wrap text-6xl leading-[4.2rem] gap-1 items-center">
          <span className="uppercase underline underline-offset-4 text-xl block">
            who we are
          </span>
          <h1 className="pl-52">
            An independent&nbsp;
            <span>
              <span className="underline underline-offset-4">brand</span> of
            </span>
          </h1>{" "}
          <h1 className="leading-[4.5rem]">
            urban trekking shoes and accesories that comes from a convergence of
          </h1>
          <h1>arts and personalities.</h1>
        </div>
      </div>
      <div className="my-48">
        <Slider />
      </div>
      <div className="flex flex-col h-screen py-14">
        <div className="flex justify-end mr-60 items-center gap-5  ml-[21rem]">
          <a className="text-xl font-medium" href="#">
            SHOP ALL
          </a>
          <div
            id="button__hover"
            className="relative cursor-pointer z-50"
            onMouseEnter={() => {
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
          >
            <img className="w-20" src={circle} alt="" />
            <img
              id={hover ? "button__hover_arrow" : "button__hover_arrow_active"}
              className="w-9 absolute top-5 right-5"
              src={arrow}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col h-[70%] items-center justify-center relative">
          <div className="ml-[37rem]">
            <Test />
          </div>
          <img className="w-[8rem] z-5 absolute" src={equal_tr} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
