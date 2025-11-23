import { IMG_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } =
    resData?.info;

  return (
    <div className="card">
      <div>
        <img
          src={
            IMG_URL +
            cloudinaryImageId
          }
          alt=""
        />
      </div>
      <div className="desc">
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h5>⭐ {avgRating}</h5>
        <h5>{costForTwo}</h5>
        <h5>{sla.deliveryTime} Mins</h5>
      </div>
    </div>
  );
};
export default RestaurantCard;
