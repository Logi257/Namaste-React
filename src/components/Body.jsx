import { useEffect, useState, useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";

const Body = () => {
  // State Variable - Super powerful variable
  const [listOfRes, setlistOfRes] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);

  const [searchResult, setSearchResult] = useState("");

  const { loggedUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://proxy.corsfix.com/?https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    //Optional Rendering
    setlistOfRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
    setFilteredRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <h1>Look like you're gone offline check your internet connection</h1>
    );
  }

  //Conditional Rendering
  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex m-5 justify-center items-center">
        <div className="search p-4 m-4">
          <input
            data-testid="input-box"
            className="p-1 border border-solid border-black"
            type="text"
            placeholder="Search Here"
            value={searchResult}
            onChange={(e) => {
              setSearchResult(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 ml-1.5 bg-green-200 rounded-lg cursor-pointer"
            onClick={() => {
              const filteredSearch = listOfRes.filter((res) =>
                res.info.name.toLowerCase().includes(searchResult.toLowerCase())
              );

              setFilteredRes(filteredSearch);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="px-4 py-2  bg-gray-200 rounded-lg cursor-pointer"
          onClick={() => {
            const filteredData = listOfRes.filter(
              (res) => res.info.avgRating > 4.3
            );
            setFilteredRes(filteredData);
          }}
        >
          Top Rated Restaurant
        </button>
        <input
          type="text"
          placeholder="Enter your Name"
          className="border border-solid border-black p-2 mx-3"
          value={loggedUser}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap">
        {filteredRes.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
            className="res-card-links"
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
