import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext, use } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANT_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext.js";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);

  const [filteredRestaurent, setFilteredRestaurent] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  console.log("RERENDER");

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_API);

    const json = await data.json();

    const restaurantsCard = json?.data?.cards.find(
      (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    );

    setListOfRes(
      restaurantsCard?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
        [],
    );

    setFilteredRestaurent(
      restaurantsCard?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
        [],
    );
    console.log(
      restaurantsCard?.card?.card?.gridElements?.infoWithStyle?.restaurants?.slice(
        0,
        5,
      ),
    );
  };

  const { loggedInUser, setUserName } = useContext(userContext);

  if (onlineStatus === false)
    return <h1>Please check your internet connection</h1>;

  if (listOfRes.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="p-8 bg-white min-h-screen">
      <div className="flex gap-4 mb-8">
        <div className="flex gap-2">
          <input
            type="text"
            className="border-2 border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-orange-500"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-500 transition cursor-pointer"
            onClick={() => {
              const filteredRestauranr = listOfRes.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );
              setFilteredRestaurent(filteredRestauranr);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="bg-green-400 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600 transition cursor-pointer"
          onClick={() => {
            const filteredList = listOfRes.filter(
              (res) => res.info.avgRating > 4,
            );

            setListOfRes(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <div>
          <label className="px-2">UserName: </label>
          <input
            className="border-2 border-gray-300 px-4 py-2 rounded-lg"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRestaurent
          ?.filter((restaurant) => restaurant?.info?.id)
          ?.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
            >
              {restaurant.info.promoted ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Body;
