import logo from "../assets/SVGs/logo.svg";

const Nav = () => {
  return (
    <div className="flex">
      <div className="flex flex-col justify-between py-9 px-9">
        <div className="cursor-pointer fixed overflow-hidden">
          <div
            className="flex h-[9.9vw] w-[3.7vw] mt-[-0.15vw] mb-[-0.49vw] mr-[0.1vw]"
            id="hover_m_ani"
          >
            <img
              className="w-12 h-36"
              src={logo}
              alt="deplace maison"
              style={{
                lineHeight: "1.9vw",
                marginRight: "0.81vw",
              }}
            />
            <img
              className="w-12 h-36"
              src={logo}
              alt="deplace maison"
              style={{
                lineHeight: "1.9vw",
                marginBottom: "0.81vw",
                transform: "rotate(5deg)",
              }}
            />
          </div>
        </div>
        <div className="flex flex-col pl-1 fixed bottom-11 z-10">
          <div className="inline-block overflow-hidden">
            <div
              className="h-[2.5vw] mt-[-0.15vw] mb-[-0.49vw] "
              id="hover__ani"
            >
              <a
                className="block uppercase text-[0.792rem] text-[#000000e4] tracking-wider"
                style={{
                  lineHeight: "1.9vw",
                  marginBottom: "0.81vw",
                }}
                href="#"
              >
                shop
              </a>
              <a
                className="block uppercase text-[0.792rem] text-[#000000e4] tracking-wider"
                style={{
                  transform: "rotate(5deg)",
                  lineHeight: "1.4vw",
                  marginBottom: "0.11vw",
                }}
                href="#"
              >
                shop
              </a>
            </div>
          </div>
          <div className="inline-block overflow-hidden">
            <div
              className="h-[2.5vw] mt-[-0.15vw] mb-[-0.49vw] "
              id="hover__ani"
            >
              <a
                className="block uppercase text-[0.792rem] text-[#000000e4] tracking-wider"
                style={{
                  lineHeight: "1.9vw",
                  marginBottom: "0.81vw",
                }}
                href="#"
              >
                collections
              </a>
              <a
                className="block uppercase text-[0.792rem] text-[#000000e4] tracking-wider"
                style={{
                  transform: "rotate(5deg)",
                  lineHeight: "1.4vw",
                  marginBottom: "0.11vw",
                }}
                href="#"
              >
                collections
              </a>
            </div>
          </div>
          <div className="inline-block overflow-hidden">
            <div
              className="h-[2.5vw] mt-[-0.15vw] mb-[-0.49vw] "
              id="hover__ani"
            >
              <a
                className="block uppercase text-[0.792rem] text-[#000000e4] tracking-wider"
                style={{
                  lineHeight: "1.9vw",
                  marginBottom: "0.81vw",
                }}
                href="#"
              >
                about
              </a>
              <a
                className="block uppercase text-[0.792rem] text-[#000000e4] tracking-wider"
                style={{
                  transform: "rotate(5deg)",
                  lineHeight: "1.4vw",
                  marginBottom: "0.11vw",
                }}
                href="#"
              >
                about
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-end my-9 mx-9 h-fit">
        <div
          className="flex flex-col items-center gap-10"
          style={{
            paddingRight: "calc(50% - 5.5rem)",
          }}
        >
          <div>
            <span className="font-cyber text-lg bg-[#e7d6c4] px-2">
              InK MoDe
            </span>
          </div>
          <div className="flex flex-col gap-1 fixed top-[8rem] opacity-0">
            <p className="uppercase text-base font-semibold tracking-wider text-center">
              © 2020 DéPlacè maison.
            </p>
            <p className="uppercase text-base font-semibold tracking-wider text-center">
              all rights reserved.
            </p>
          </div>
        </div>
        <p className="uppercase text-[0.792rem] text-[#000000e4] tracking-wider w-14 fixed">
          cart
        </p>
      </div>
    </div>
  );
};

export default Nav;
