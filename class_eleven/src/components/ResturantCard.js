import { IMG_CON_URL } from "../constants";

const ResturantCard = ({ name, lastMileTravelString, cloudinaryImageId, cuisines }) => {

  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img
        src={`${IMG_CON_URL}${cloudinaryImageId}`}
        alt={name}
      />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString} minutes</h4>
    </div>
  );
};

export default ResturantCard;