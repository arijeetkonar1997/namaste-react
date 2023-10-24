import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData?.info;

  return (
    <div
      data-testid="resCard"
      className="res-card w-56 m-2  p-4 rounded-md"
      style={{ backgroundColor: "#f0f0f0" }}
    >
      <img
        className="res-logo rounded-md"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export const promotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white p-2 m-2 rounded-lg">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    );
  };
};

export default RestaurantCard;
