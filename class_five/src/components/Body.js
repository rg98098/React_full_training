import { resturantList } from "../constants";
import ResturantCard from "./ResturantCard";
import { useState } from "react";
// What is state
// what is React Hooks? - functions,
// What is useState

function filterData(searchInput, resturants) {
    return resturants.filter(resturant => resturant.data.name.includes(searchInput))
}

const Body = () => {
  const [resturants, setResturants] = useState(resturantList);
  // searchText is a local state variable
  const [searchInput, setSearchInput] = useState(""); // To create state variable, 
  //returns = [variable name, function to update the variable]
  return (
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
         const data =  filterData(searchInput,resturants);
          // update the state - resturants
          setResturants(data);
        }}>Search</button>
      </div>
      <div className="resturant-list">
        {resturants.map((resturant) => {
          return <ResturantCard {...resturant.data} key={resturant.data.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
