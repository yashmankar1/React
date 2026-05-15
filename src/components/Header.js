import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between items-center bg-gray-100 shadow-lg p-4">
      <div className="w-40">
        <img className="h-16 object-contain rounded-full" src={LOGO_URL} />
      </div>
      <div>
        <ul className="flex gap-6 items-center">
          <li className="text-sm font-medium">
            Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <Link to="/" className="hover:text-orange-500">
            <li>Home</li>
          </Link>
          <li>
            <Link to="/about" className="hover:text-orange-500">
              About us
            </Link>
          </li>
          <Link to="/contactus" className="hover:text-orange-500">
            <li>Contact us</li>
          </Link>
          <Link to="/grocery" className="hover:text-orange-500">
            Grocery
          </Link>
          <li className="hover:text-orange-500">Cart</li>
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 transition cursor-pointer"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
