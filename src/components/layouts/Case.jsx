import unisex from "../../assets/SVGs/unisex.svg";

const Case = (props) => {
  return (
    <div className="flex flex-col min-w-[28rem] min-h-[31rem] px-5 border-2 border-black items-center bg-[#e7d6c4] relative pointer-events-none">
      <img className="w-80" src={props.img} alt="image1" />
      <div className="flex flex-col items-center absolute bottom-[1.2rem]">
        <img className="w-20" src={unisex} alt="unisex logo" />
        <p className="text-xs">SS/20</p>
        <p className="font-tt text-[7rem] h-[6.1rem] leading-[6rem] uppercase">
          {props.name}
        </p>
        <p className="font-medium text-lg line-through">{props.pricec}</p>
        <p className="font-[600] text-[1.6rem]">{props.price}</p>
      </div>
    </div>
  );
};

export default Case;
