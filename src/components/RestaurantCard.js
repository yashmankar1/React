import { CDN_URL, LOGO_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData?.info;

  return (
    <div className="res-card">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />

      <div className="res-details">
        <h3>{name}</h3>

        <p className="cuisine">{cuisines?.join(", ")}</p>

        <div className="res-meta">
          <span>{avgRating}</span>
          <span>{sla?.deliveryTime} mins</span>
        </div>

        <p className="price">{costForTwo}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
