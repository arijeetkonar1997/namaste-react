const ItemList = ({ categoryData }) => {
  return (
    <div className="text-left">
      {categoryData.map((item) => (
        <div className="my-1 py-2 border-b-2 border-grey text-sm">
          <div className="font-bold">{item.card.info.name}</div>
          <div className="font-sm">₹{item.card.info.price/100}</div>
          <div>{item.card.info.description}</div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
