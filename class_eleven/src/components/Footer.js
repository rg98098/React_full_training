import { useContext } from "react";
import UserContext from "../utils/UserConext";

const Footer = () => {
  const {user} = useContext(UserContext)
  return <h4 className="p-10 m-10 text-center">This site is developed by {user.name}</h4>;
};


export default Footer;