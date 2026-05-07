import { CDN_URL, LOGO_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.data;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
        onError={(event) => {
          event.currentTarget.src = LOGO_URL;
        }}
      />

      <div className="res-details">
        <h3>{name}</h3>

        <p className="cuisine">{cuisines?.join(", ")}</p>

        <div className="res-meta">
          <span>{avgRating}</span>
          <span>{deliveryTime}</span>
        </div>

        <p className="price">{costForTwo / 100}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
