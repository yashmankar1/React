import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANT_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);

  const [filteredRestaurent, setFilteredRestaurent] = useState([]);

  const [searchText, setSearchText] = useState("");

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
  };

  if (onlineStatus === false)
    return <h1>Please check your internet connection</h1>;

  if (listOfRes.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredRestauranr = listOfRes.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );
              setFilteredRestaurent(filteredRestauranr);
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRes.filter(
              (res) => res.info.avgRating > 4,
            );

            setListOfRes(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurent
          ?.filter((restaurant) => restaurant?.info?.id)
          ?.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Body;
