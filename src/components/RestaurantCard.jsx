import { useContext } from "react";
import { IMG_URL } from "../../utils/constants";
import UserContext from "../../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  //console.log(resData);

  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } =
    resData?.info;

  const { loggedUser } = useContext(UserContext);

  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[270px] rounded-lg bg-gray-100"
      style={{ backgroundColor: "#f0f0f0" }}
    >
      <div>
        <img className="rounded-lg" src={IMG_URL + cloudinaryImageId} alt="" />
      </div>
      <div className="desc">
        <h3 className="font-bold py-2 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <div className="flex justify-between">
          <h5>⭐ {avgRating}</h5>
          <h5>{costForTwo}</h5>
        </div>

        <h5>{sla.deliveryTime} Mins</h5>
        {/* <h4>User: {loggedUser}</h4> */}
      </div>
    </div>
  );
};
export default RestaurantCard;
