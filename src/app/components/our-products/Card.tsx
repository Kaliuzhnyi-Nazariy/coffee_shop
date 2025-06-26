import { IProducts } from "@/app/redux/products/typesOrInterfaces";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa6";

const Card = ({ product }: { product: IProducts }) => {
  const getCategoryLabel = () => {
    if (product.category.hot && product.category.cold) return "Hot & Cold";
    if (product.category.hot) return "Hot";
    if (product.category.cold) return "Ice";
    return "Unknown";
  };

  return (
    <Link href={`/our-products/${product.title}/${product.id}`}>
      <div className="w-full h-[137px] rounded-[5px] bg-[#F4F4F4] relative">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="relative bg-cover object-cover"
        />
      </div>
      <div className="mt-2 text-[6px] px-[7px]">
        <div className="grid grid-cols-2 grid-rows-2">
          <h3 className="font-semibold text-[9px] w-[70px] overflow-hidden overflow-ellipsis">
            {product.title}
          </h3>
          <span className="justify-self-end w-8 h-4 py-0.5 px-1.5 rounded-[30px] border-[1px] border-[#DCDCDC] flex justify-center font-semibold">
            ${product.price}
          </span>
          <small>{getCategoryLabel()} coffee</small>
        </div>
        <div className="flex justify-between mt-0.5 text-[#6A6A6A]">
          <span className="font-medium flex gap-1 items-center">
            <FaStar className="fill-[#FFCC41]" />
            {product.rating.rate}
          </span>
          <span>...</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
