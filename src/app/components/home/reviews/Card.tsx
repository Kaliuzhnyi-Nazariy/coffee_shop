import Image from "next/image";
import { IReview } from "./review.type";

const Card = ({ review }: { review: IReview }) => {
  return (
    <div className="w-[236px] h-[294px] border-[1px] border-[#D9D9D9] rounded-[20px] pt-[30px] pr-[23px] pl-[15px] pb-[25px]">
      <div className="h-[175px]">
        <p className="text-[16px] h-[155px] overflow-y-hidden overflow-ellipsis commentshadow">
          “{review.comment}“
        </p>
        <a href="" className="text-[8px]">
          read more
        </a>
      </div>
      <div className="mt-[23px] flex items-center gap-2.5">
        {review.avatar ? (
          <Image
            src={review.avatar}
            alt="avatar"
            width={45}
            height={45}
            className="w-[45px] h-[45px] bg-black rounded-full"
          />
        ) : (
          <div className="w-[45px] h-[45px] bg-black rounded-full"></div>
        )}
        <div className="">
          <p className="text-[12px]">{review.name}</p>
          <p className="text-[10px] italic text-[#818181]">{review.job}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
