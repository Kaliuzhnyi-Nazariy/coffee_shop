import { IProducts } from "@/app/redux/products/typesOrInterfaces";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";

const ListItem = ({ fav }: { fav: IProducts }) => {
  const getCategoryLabel = () => {
    if (fav.category.hot && fav.category.cold) return "Hot & Cold";
    if (fav.category.hot) return "Hot";
    if (fav.category.cold) return "Ice";
    return "Unknown";
  };
  return (
    <div className="relative flex gap-5">
      <div className="relative w-[30%] ">
        {fav.image ? (
          <Image
            src={fav.image}
            alt={fav.title}
            fill
            className="object-cover relative block bg-center"
          />
        ) : (
          <div className="w-[30%] h-full bg-black flex items-center justify-center">
            No photo
          </div>
        )}
      </div>
      <div className="w-[70%]">
        <h3>{fav.title}</h3>
        <p className="text-[8px] text-black/50">{fav.description}</p>
        <div className="flex gap-5 text-[10px]">
          <p className="">
            <b>Category: </b>
            {getCategoryLabel()}
          </p>
          <span className="flex justify-between items-center mt-0.5">
            <FaStar className="fill-[#FFC727] w-[15px] h-[15px]" />
            <p>{fav.rating.rate}</p>
          </span>
        </div>
        <p className="text-[10px]">${fav.price}</p>
      </div>
    </div>
  );
};

export default ListItem;
