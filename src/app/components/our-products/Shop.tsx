import { CiShop } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { CgArrowTopRight } from "react-icons/cg";

const Shop = () => {
  return (
    <div className="flex justify-center px-5 mt-[15px] gap-3">
      <CiShop size={60} />
      <div className="">
        <h3 className="text-[12px] font-medium">Damiun Coffee Shop</h3>
        <p className="text-[8px] font-light">Online 20min ago</p>
        <span className="flex items-center gap-0.5">
          <FaStar size={12} className="fill-[#FFC727]" />
          <p className="text-[9px] font-semibold">4.7</p>
          <p className="text-[#9F9F9F]">|</p>
          <p className="text-[9px]">108 Ratings</p>
        </span>
      </div>
      <a
        href="https://maps.app.goo.gl/pyAi9yjLUHSmNJRa6"
        target="_blank"
        className="text-[6px] font-light border-[1] border-black rounded-[50px] w-[65px] h-5 flex justify-center items-center "
      >
        View on Maps <CgArrowTopRight />
      </a>
    </div>
  );
};

export default Shop;
