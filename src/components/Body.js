import RestaurantCard,{promotedLabel} from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
  //Local State variable - Super Powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const PromotedRestaurantCard = promotedLabel(RestaurantCard)
  //Whenever state variable update, react triggers a reconciliation cycle(re-renders the component)
  //If there is no dependency array => useEffect is called on every render
  //If there is empty dependency array => useEffect is called only once
  //I the dependency array contains something it will only be called when the dependency changes

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.22692616572863&lng=87.85943660885096&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const resList =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurants(resList);
    setFilteredRestaurants(resList);
  };

  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false)
  {
    return <h1>You are offline</h1>
  }

  const {LoggedInUser,setUserName} = useContext(UserContext)

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter p-2 m-2">
        <input
          type="text"
          className="search-box border border-solid border-blue-950 mx-2"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button className="mx-2 px-1 bg-yellow-400 border border-black rounded-md"
          onClick={() => {
            const filteredRestaurant = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(filteredRestaurant);
          }}
        >
          Search
        </button>
        <button
          className="filter-btn mx-2 px-1 bg-yellow-400 border border-black rounded-md"
          onClick={() => {
            //Filter Logic
            const filteredList = listOfRestaurants?.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
        <label htmlFor="">Username</label>
        <input type="text" value={LoggedInUser} className="border border-black p-1 m-1 rounded-sm" onChange={(e)=>{setUserName(e.target.value)}}/>
      </div>
      <div className="res-container flex flex-wrap">
        {filteredRestaurants?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
          {restaurant.info.promoted ? <PromotedRestaurantCard resData={restaurant}/> :<RestaurantCard resData={restaurant} />} 
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
