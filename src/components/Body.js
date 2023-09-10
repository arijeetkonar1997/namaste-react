import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState} from 'react';

const Body = () => {
    //Local State variable - Super Powerful variable
    const [listOfRestaurants,setListOfRestaurants] = useState(resList)

    let listOfRestaurantsJS =[{
        info: {
          id: "366264",
          name: "Domino's Pizza",
          cloudinaryImageId: "zvuoc6asvyb1d7mrcl1m",
          costForTwo: "₹400 for two",
          cuisines: [
            "Pizzas",
            "Italian",
            "Pastas",
            "Desserts"
          ],
          avgRating: 4.4,
          sla: {
            deliveryTime: 25,
            serviceability: "SERVICEABLE",
            slaString: "25 mins",
            iconType: "ICON_TYPE_EMPTY"
          }
        }
      },{
        info: {
          id: "366265",
          name: "KFC",
          cloudinaryImageId: "zvuoc6asvyb1d7mrcl1m",
          costForTwo: "₹400 for two",
          cuisines: [
            "Pizzas",
            "Italian",
            "Pastas",
            "Desserts"
          ],
          avgRating: 3.8,
          sla: {
            deliveryTime: 25,
            serviceability: "SERVICEABLE",
            slaString: "25 mins",
            iconType: "ICON_TYPE_EMPTY"
          }
        }
      }]
  return (
    <div className="body">
      <div className="filter">
      <button className="filter-btn" onClick={()=>{
        //Filter Logic
        const filteredList = listOfRestaurants.filter((res)=>res.info.avgRating>4)
        setListOfRestaurants(filteredList)
      }}>Top Rated Restaurant</button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
