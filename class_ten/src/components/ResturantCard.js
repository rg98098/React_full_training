import { IMG_CON_URL } from "../constants";

const ResturantCard = ({ name, lastMileTravelString, cloudinaryImageId, cuisines }) => {

  return (
    <div className="card">
      <img
        src={`${IMG_CON_URL}${cloudinaryImageId}`}
        alt={name}
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString} minutes</h4>
    </div>
  );
};

export default ResturantCard;