import { IoIosMenu } from "react-icons/io";

const Main = () => {
  return (
    <section className="relative w-full h-[412px] mx-auto main-header">
      <div className="">
        <div className="bg-black w-full h-[412px] absolute top-0 left-0 z-[1] opacity-20"></div>
      </div>
      <div className="absolute top-[164px] left-[20px] transform w-[220px] text-wrap z-[2]">
        <h2 className="text-white text-2xl uppercase">
          life is not better
          <span className="font-medium text-[14px]">without coffee</span>
        </h2>
        <button className="mt-4 px-[15px] py-[10px] bg-white text-black rounded-4xl h-[34px] font-semibold text-[8px] w-[73px]">
          Order now
        </button>
      </div>
      <button className="absolute top-5 right-[25px] text-white w-[25px] h-[25px] flex justify-center items-center z-[2]">
        <IoIosMenu />
      </button>
    </section>
  );
};

export default Main;
