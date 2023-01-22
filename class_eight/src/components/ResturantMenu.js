import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SkeletonLoader from "./SkeletonLoader";
import { IMG_CON_URL } from "../constants";

const ResturantMenu = () => {
  const [resturant, setResturant] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getResturantInfo();
  }, []);

  async function getResturantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/v4/full?lat=28.5801355&lng=77.3634699&menuId=${id}`
    );
    const json = await data.json();
    console.log(json);
    setResturant(json.data);
  }

  return !resturant ? (
    <SkeletonLoader />
  ) : (
    <div className="menu">
    <div>
      <h1>Resturant id: {id}</h1>
      <h2>{resturant?.name}</h2>
      <img src={IMG_CON_URL + resturant?.cloudinaryImageId} />
      <h3>{resturant?.area}</h3>
      <h3>{resturant?.city}</h3>
      <h3>{resturant?.avgRating} stars</h3>
      <h3>{resturant?.costForTwoMsg}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(resturant?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResturantMenu;
