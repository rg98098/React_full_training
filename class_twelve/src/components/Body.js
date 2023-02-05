import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import Loader from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
// What is state
// what is React Hooks? - functions,
// What is useState

const Body = () => {
  const [allResturants, setAllResturants] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [filteredResturants, setfilteredResturants] = useState([]);
  // searchText is a local state variable
  const [searchInput, setSearchInput] = useState(""); // To create state variable,
  //returns = [variable name, function to update the variable]

  // empty dependency
  useEffect(() => {
    getResturants();
  }, []);

  async function getResturants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5801355&lng=77.3634699&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllResturants(json?.data?.cards[2]?.data?.data?.cards);
    setfilteredResturants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const isUserOnline = useOnline();

  if (!isUserOnline) {
    return (
      <div className="container">
        <h1 className="font-bold text-red text-3xl text-center">
          Offline, please check your internet connection{" "}
        </h1>
      </div>
    );
  }

  // not render component (early return)
  if (!allResturants) return null;

  // if(true) return <Loader/>;
  // if(filteredResturants?.length === 0 ) return <h1>No restaurant match your filter!!</h1>

  return (
    <div className="container">
      <div className="flex justify-start mob:flex-col">
        <div className="flex justify-evenly min-w-[500px] mob:min-w-[375px] h-[100px] mob:h-[50px] items-center m-auto">
          <input
            type="text"
            placeholder=" Search for restaurant"
            value={searchInput}
            className="outline-none text-base mob:text-xs p-[5px] basis-[350px] mob:basis-[270px] h-[30px] rounded-md ring-1 ring-gray bg-gray"
            key="input-text"
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
          <button
            className="btn btn--primary basis-[70px] mob:basis-[50px] mob:text-xs"
            onClick={() => {
              if (searchInput !== "") {
                const data = filterData(searchInput, allResturants);
                setfilteredResturants(data);
                setErrorMsg("");
                if (data.length === 0) {
                  setErrorMsg("No matches found ");
                }
              } else {
                if (errorMsg) setErrorMsg("");
                setfilteredResturants(allResturants)
              }
            }}
          >
            {" "}
            Search{" "}
          </button>
        </div>
      </div>
      {errorMsg && (
        <div className="h-14 m-auto text-center" id="error">
          <span className="error-text w-14 h-8 " id="error-msg">
            {errorMsg}
          </span>
        </div>
      )}
      {allResturants?.length === 0 ? (
        <Loader />
      ) : (
        <div className="flex flex-wrap gap-5 justify-center">
          {filteredResturants.map((restaurant) => {
            return (
              <Link
                className="basis-[250px] p-2.5 mb-2.5 mob:basis-[150px]"
                to={"/resturant/" + restaurant.data.id}
                key={restaurant.data.id}
              >
                <ResturantCard
                  key={restaurant?.data?.id}
                  {...restaurant.data}
                />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Body;
