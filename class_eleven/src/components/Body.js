import ResturantCard from "./ResturantCard";
import { useContext, useEffect, useState } from "react";
import Loader from "./SkeletonLoader";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserConext";
// What is state
// what is React Hooks? - functions,
// What is useState

const Body = () => {
  const [allResturants, setAllResturants] = useState([]);
  const [filteredResturants, setfilteredResturants] = useState([]);
  // searchText is a local state variable
  const [searchInput, setSearchInput] = useState(""); // To create state variable,
  //returns = [variable name, function to update the variable]

  const {user, setUser} =useContext(UserContext)

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
    return <h1>🔴 Offline, please check your internet connection!!</h1>;
  }

  // not render component (early return)
  if (!allResturants) return null;

  // if(true) return <Loader/>;
  // if(filteredResturants?.length === 0 ) return <h1>No restaurant match your filter!!</h1>

  return allResturants?.length > 0 ? (
    <>
      <div className="p-5 bg-pink-50 my-5">
        <input
          type="text"
          value={searchInput}
          className="focus:bg-pink-200"
          placeholder="Search"
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="p-2 m-2 bg-purple-900 text-white rounded-md hover:bg-gray-500"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchInput, allResturants);
            // update the state - resturants
            setfilteredResturants(data);
          }}
        >
          Search
        </button>
        <input
          type="text"
          value={user.name}
          className="focus:bg-pink-200"
          placeholder="Search test"
          onChange={e=> setUser({
            ...user,
            name: e.target.value
            
          })}/>
          <input
          type="text"
          value={user.email}
          className="focus:bg-pink-200"
          placeholder="Search test"
          onChange={e=> setUser({
            ...user,
            email: e.target.value
          })}
        />
      </div>
      <div className="flex flex-wrap">
        {filteredResturants?.length > 0 ? (
          filteredResturants.map((restaurant) => (
            <Link
              to={"/resturant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <ResturantCard key={restaurant?.data?.id} {...restaurant.data} />
            </Link>
          ))
        ) : (
          <h2>No matching restaurant found</h2>
        )}
      </div>
    </>
  ) : (
    <Loader />
  );
};

export default Body;
