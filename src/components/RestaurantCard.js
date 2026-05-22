import { CDN_URL, LOGO_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    promoted,
    sla,
  } = resData?.info;

  return (
    <div data-testid="resCard"
    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition transform hover:scale-105 cursor-pointer">
      <img
        className="w-full h-48 object-cover rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />

      <div className="p-4">
        <h3 className="font-bold text-lg mb-1 truncate">{name}</h3>

        <p className="text-gray-600 text-sm mb-2 line-clamp-2">
          {cuisines?.join(", ")}
        </p>

        <div className="flex justify-between text-sm mb-2 font-semibold">
          <span className="bg-green-100 text-green-700 px-2 py-1 rounded">
            ⭐ {avgRating}
          </span>
          <span className="text-gray-700">{sla?.deliveryTime} mins</span>
        </div>

        <p className="text-orange-600 font-semibold">{costForTwo}</p>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
