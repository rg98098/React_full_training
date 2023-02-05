import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../constants";

const useResturant = (id) => {
  const [resturant, setResturant] = useState(null);

  useEffect(() => {
    getResturantInfo();
  }, []);

  async function getResturantInfo() {
    const data = await fetch(`${FETCH_MENU_URL}${id}`);
    const json = await data.json();
    setResturant(json.data);
  }

  return resturant;
};

export default useResturant;
