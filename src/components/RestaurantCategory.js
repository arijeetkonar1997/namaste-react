import {useState} from 'react';
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
    const [showItem, setShowItem] = useState(false);
    const handleClick = () => {
        setShowItem(!showItem);
    }
  return (
    <div>
      <div className=" w-6/12 p-2 mx-auto my-4 bg-slate-50 shadow-lg  rounded-md">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        <div>
        {showItem && <ItemList categoryData={data?.itemCards}/>}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
