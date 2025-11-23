import { useState } from "react";
import restaurantList from "../../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  // State Variable - Super powerful variable
  const [listOfRes, setlistOfRes] = useState(restaurantList);

  return (
    <div className="body">
      <div className="search">
        <button
          onClick={() => {
            const filteredData = listOfRes.filter(
              (res) => res.info.avgRating > 4.5
            );
            setlistOfRes(filteredData);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRes.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
