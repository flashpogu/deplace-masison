import { useState } from "react";
import circle from "../assets/SVGs/circle.svg";
import arrow from "../assets/SVGs/arrow.svg";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { PiEnvelopeLight } from "react-icons/pi";

const Footer = () => {
  const [hover3, setHover3] = useState(false);
  return (
    <div className="flex bg-[#e7d6c40d] pt-28 z-50 h-[30rem] relative px-14 pb-7 justify-between">
      <div className="flex flex-col gap-[11rem] w-[33%]">
        <div className="flex flex-col gap-1">
          <p className="text-base font-medium uppercase">
            subscribe to newsletter
          </p>
          <div className="font-thin">
            <PiEnvelopeLight size={62} />
          </div>
        </div>
        <div className="flex flex-col gap-2 font-medium">
          <p className="text-xs uppercase">subscribe to our newsletter</p>
          <form className="flex border-b border-black">
            <input
              className="bg-[#e7d6c40d] w-[25rem] h-12 px-3 pb-5 text-lg tracking-wide hover: outline-none"
              type="text"
              placeholder="email address"
            />
            <input
              className="uppercase text-sm tracking-wide cursor-pointer"
              type="submit"
            />
          </form>
        </div>
      </div>
      <div className="flex flex-col w-[33%] justify-between">
        <div className="flex justify-between">
          <div className="flex flex-col gap-3">
            <p className="uppercase pb-5">info</p>
            <div className="inline-block overflow-hidden">
              <div
                className="h-[2.5vw] mt-[-0.15vw] mb-[-0.19vw] "
                id="hover__ani"
              >
                <a
                  className="block uppercase text-3xl"
                  style={{
                    lineHeight: "1.9vw",
                    marginBottom: "0.81vw",
                  }}
                  href="#"
                >
                  faq
                </a>
                <a
                  className="block uppercase text-3xl"
                  style={{
                    transform: "rotate(5deg)",
                    lineHeight: "1.4vw",
                    marginBottom: "0.11vw",
                  }}
                  href="#"
                >
                  faq
                </a>
              </div>
            </div>
            <div className="inline-block overflow-hidden">
              <div
                className="h-[2.5vw] mt-[-0.15vw] mb-[-0.29vw] "
                id="hover__ani"
              >
                <a
                  className="block uppercase text-3xl"
                  style={{
                    lineHeight: "1.9vw",
                    marginBottom: "0.81vw",
                  }}
                  href="#"
                >
                  returns
                </a>
                <a
                  className="block uppercase text-3xl"
                  style={{
                    transform: "rotate(5deg)",
                    lineHeight: "1.4vw",
                    marginBottom: "0.11vw",
                  }}
                  href="#"
                >
                  returns
                </a>
              </div>
            </div>
            <div className="inline-block overflow-hidden">
              <div
                className="h-[2.5vw] mt-[-0.15vw] mb-[-0.29vw] "
                id="hover__ani"
              >
                <a
                  className="block uppercase text-3xl"
                  style={{
                    lineHeight: "1.9vw",
                    marginBottom: "0.81vw",
                  }}
                  href="#"
                >
                  contact
                </a>
                <a
                  className="block uppercase text-3xl"
                  style={{
                    transform: "rotate(5deg)",
                    lineHeight: "1.4vw",
                    marginBottom: "0.11vw",
                  }}
                  href="#"
                >
                  contact
                </a>
              </div>
            </div>
            <p className="uppercase pt-32">credits</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="uppercase pb-5">policy</p>
            <div className="inline-block overflow-hidden">
              <div
                className="h-[2.5vw] mt-[-0.15vw] mb-[-0.49vw] "
                id="hover__ani"
              >
                <a
                  className="block uppercase text-3xl"
                  style={{
                    lineHeight: "1.9vw",
                    marginBottom: "0.81vw",
                  }}
                  href="#"
                >
                  terms
                </a>
                <a
                  className="block uppercase text-3xl"
                  style={{
                    transform: "rotate(5deg)",
                    lineHeight: "1.4vw",
                    marginBottom: "0.11vw",
                  }}
                  href="#"
                >
                  terms
                </a>
              </div>
            </div>
            <div className="inline-block overflow-hidden">
              <div
                className="h-[2.5vw] mt-[-0.15vw] mb-[-0.39vw] "
                id="hover__ani"
              >
                <a
                  className="block uppercase text-3xl"
                  style={{
                    lineHeight: "1.9vw",
                    marginBottom: "0.81vw",
                  }}
                  href="#"
                >
                  privacy
                </a>
                <a
                  className="block uppercase text-3xl"
                  style={{
                    transform: "rotate(5deg)",
                    lineHeight: "1.4vw",
                    marginBottom: "0.11vw",
                  }}
                  href="#"
                >
                  privacy
                </a>
              </div>
            </div>
            <div className="inline-block overflow-hidden">
              <div
                className="h-[2.5vw] mt-[-0.15vw] mb-[-0.42vw] "
                id="hover__ani"
              >
                <a
                  className="block uppercase text-3xl"
                  style={{
                    lineHeight: "1.9vw",
                    marginBottom: "0.81vw",
                  }}
                  href="#"
                >
                  cookie
                </a>
                <a
                  className="block uppercase text-3xl"
                  style={{
                    transform: "rotate(5deg)",
                    lineHeight: "1.4vw",
                    marginBottom: "0.11vw",
                  }}
                  href="#"
                >
                  terms
                </a>
              </div>
            </div>
            <p className="uppercase pt-32">© 2020 déplacé maison.</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between pr-36 items-center">
        <div
          id="button__hover"
          className="relative cursor-pointer"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
          onMouseEnter={() => {
            setHover3(true);
          }}
          onMouseLeave={() => {
            setHover3(false);
          }}
        >
          <img className="w-20" src={circle} alt="" />
          <img
            id={
              !hover3 ? "button__hover_arrowf" : "button__hover_arrowf_active"
            }
            className="w-9 absolute top-5 right-5 rotate-[-90deg]"
            src={arrow}
            alt=""
          />
        </div>
        <div className="flex gap-6">
          <FaFacebookF size={25} className="cursor-pointer" />
          <FaInstagram size={25} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
