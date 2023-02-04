import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SkeletonLoader from "./SkeletonLoader";
import { IMG_CON_URL } from "../constants";
import useResturant from "../utils/useResturant";

const ResturantMenu = () => {
  const { id } = useParams();
  const resturant = useResturant(id);

  return !resturant ? (
    <SkeletonLoader />
  ) : (
    <div className="">
      <div className="flex">
        <img src={IMG_CON_URL + resturant?.cloudinaryImageId} />
        <div className="p-5 flex flex-col justify-between  items-center w-full">
        <h1 className="p-2 bg-pink-50 w-full text-center">Resturant id: {id}</h1>
        <h2 className="p-2 bg-pink-50 w-full text-center">{resturant?.name}</h2>
        <h3 className="p-2 bg-pink-50 w-full text-center">{resturant?.area}</h3>
        <h3 className="p-2 bg-pink-50 w-full text-center">{resturant?.city}</h3>
        <h3 className="p-2 bg-pink-50 w-full text-center">{resturant?.avgRating} stars</h3>
        <h3 className="p-2 bg-pink-50 w-full text-center">{resturant?.costForTwoMsg}</h3>
        </div>
      </div>
      <div className="text-center">
        <h1>Menu</h1>
        <div className="">
        <ul className="">
          {Object.values(resturant?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
        </div>
      </div>
    </div>
  );
};

export default ResturantMenu;
