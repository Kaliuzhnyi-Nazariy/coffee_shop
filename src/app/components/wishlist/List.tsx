"use client";

import { userFavorite, userLoading } from "@/app/redux/user/selectors";
import { useSelector } from "react-redux";
import ListItem from "./listItem";

const List = () => {
  const favList = useSelector(userFavorite);
  const loading = useSelector(userLoading);

  // console.log(favList);
  // console.log(loading);

  return (
    <>
      {loading ? (
        <p className="w-full h-full flex items-center justify-center">
          loading
        </p>
      ) : (
        <>
          {favList.length > 0 ? (
            <ul className="flex flex-col items-center pt-[70px] gap-3 mb-3">
              {favList.map((fav) => {
                return (
                  <li
                    key={fav.id}
                    className="relative px-5 w-[80%] py-2.5 border-[1] border-[#D9D9D9] rounded-[20px] min-h-[115px]"
                  >
                    <ListItem fav={fav} />
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className=" w-full flex justify-center align-middle">
              <p>No data</p>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default List;
