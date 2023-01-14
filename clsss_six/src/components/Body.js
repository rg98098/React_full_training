import { resturantList } from "../constants";
import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import { Loader } from "./Loader";
// What is state
// what is React Hooks? - functions,
// What is useState

function filterData(searchInput, resturants) {
    return resturants.filter(resturant => resturant.data.name.toLowerCase().includes(searchInput.toLowerCase()))
}

const Body = () => {
  const [allResturants, setAllResturants] = useState([]);
  const [filteredResturants, setfilteredResturants] = useState([]);
  // searchText is a local state variable
  const [searchInput, setSearchInput] = useState(""); // To create state variable, 
  //returns = [variable name, function to update the variable]

  // empty dependency 
  useEffect(()=>{
    getResturants()
  },[])

  async function getResturants() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5801355&lng=77.3634699&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json()
    setAllResturants(json?.data?.cards[2]?.data?.data?.cards)
    setfilteredResturants(json?.data?.cards[2]?.data?.data?.cards)
  }

  // not render component (early return)
  if(!allResturants) return null;

  if(allResturants?.length === 0) return <Loader/>;
  if(filteredResturants?.length === 0 ) return <h1>No restaurant match your filter!!</h1>


  return (allResturants?.length === 0) ? <Loader/>: (
    <>
      <div className="search-container">
        <input
          type="text"
          value={searchInput}
          className="search-input"
          placeholder="Search"
          onChange={(e)=> {
            setSearchInput(e.target.value)
          }}
        />
        <button className="search-btn" onClick={()=>{
          //need to filter the data
         const data =  filterData(searchInput,allResturants);
          // update the state - resturants
          setfilteredResturants(data)
        }}>Search</button>
      </div>
      <div className="resturant-list">
        {filteredResturants.map((resturant) => {
          return <ResturantCard {...resturant.data} key={resturant.data.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
