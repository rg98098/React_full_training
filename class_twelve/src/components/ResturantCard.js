import { useContext } from "react";
import { IMG_CON_URL } from "../constants";
import UserContext from "../utils/UserConext";

const ResturantCard = ({ name, lastMileTravelString, cloudinaryImageId, cuisines, avgRating, slaString, costForTwoString }) => {
  const {user} = useContext(UserContext);
  const buttonStyle = {
    backgroundColor: avgRating == "--" ? "#fff" : parseFloat(avgRating) < 4.0 ? "#db7c38":"#48c479",
    color : isNaN(avgRating)? "#535665" : "#fff"
  }
  return (
<div className="basis-[250px] mob:basis-[150px] p-2.5 mb-2.5 hover:shadow">
<div className="relative w-full ">
  <img className="w-full mob:w-[130px]" src={ IMG_CON_URL  + cloudinaryImageId } alt={name}/>      
</div>
<div className="">
  <h6 className="text-base font-bold w-3/5 tracking-normal">{name}</h6>
  <p className="text-gray-dark text-xs w-4/5 overflow-hidden h-[32px]">{cuisines.join(", ")}</p>
  <div className="flex mt-4 justify-between items-center text-xs pb-2.5 text-gray-details font-semibold mob:flex-col mob:items-start">
    <div className="flex items-center h-5 w-11 gap-1 py-0 px-1" style={buttonStyle}>
      <span>{avgRating}</span>
    </div>
    <div>•</div>
    <div>{slaString}</div>
    <div>•</div>
    <div>{costForTwoString}</div>
  </div>
</div>
</div>
  );
};

export default ResturantCard;

