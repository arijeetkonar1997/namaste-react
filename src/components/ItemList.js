import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ categoryData }) => {

  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item))
  }
  return (
    <div className="text-left">
      {categoryData.map((item) => (
        <div className="my-1 py-2 border-b-2 border-grey text-sm">
          <div className="font-bold">{item.card.info.name}</div>
          <div className="font-sm">₹{item.card.info.price/100}</div>
          <div>{item.card.info.description}</div>
          <button className="cursor-pointer bg-black rounded-md text text-white p-2" onClick={()=>handleAddItem(item)}>Add+</button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
