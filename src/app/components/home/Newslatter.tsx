const Newslatter = () => {
  return (
    <section className="px-5 mt-[45px] newslatterbg w-full pt-3 pb-8">
      <h2 className="text-white">Newslatter</h2>
      <p className="w-[185px] text-white text-[12px] mt-2">
        Subscribe and get 20% off your first purchase
      </p>
      <div className="mt-14 bg-[rgba(217,217,217,0.3)] w-[280px] rounded-[50px] relative">
        <input
          type="text"
          className="relative h-[30px] rounded-[50px] text-[#B6B6B6] font-medium text-[8px] placeholder:text-[#B6B6B6] pl-5 pt-1 outline-0"
          placeholder="Your email..."
        />
        <button className="text-[8px] font-semibold text-black bg-white rounded-[50px] absolute right-0 top-0 w-[71px] h-[30px] flex justify-center items-center">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default Newslatter;
