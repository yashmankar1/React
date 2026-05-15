import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisine, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(itemCards);

  return (
    <div className="p-8 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">{name}</h1>
        <h3 className="text-lg text-gray-600 mb-8 font-semibold">
          {cuisine?.join(", ")} - {costForTwoMessage}
        </h3>

        <h2 className="text-2xl font-bold mb-6 text-gray-800">Menu</h2>

        <ul className="space-y-4">
          {itemCards?.map((item) => (
            <li
              key={item.card.info.id}
              className="bg-gray-50 p-4 rounded-lg border-l-4 border-orange-500 hover:bg-gray-100 transition"
            >
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-800">
                  {item.card.info.name}
                </span>
                <span className="text-orange-600 font-bold">
                  ₹
                  {(
                    item.card.info.price / 100 ||
                    item.card.info.defaultPrice / 100
                  ).toFixed(2)}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
