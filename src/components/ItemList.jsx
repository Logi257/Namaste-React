import { useDispatch } from "react-redux";
import { IMG_URL } from "../../utils/constants";
import { addItems } from "../../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItems = (item) => {
    dispatch(addItems(item));
  };
  return (
    <div>
      {items.map((category) => (
        <div
          key={category.categoryId}
          className="p-2 m-2 border-gray-200 border-b-2 text-left"
        >
          {category.itemCards?.map((item) => (
            <div
              key={item.card.info.id}
              className=" flex justify-between items-center py-2 gap-1"
            >
              <div className="w-9/12 break-words">
                <h3 className="font-bold">{item.card.info.name}</h3>
                <p>
                  ₹
                  {item.card.info.price / 100 ||
                    item.card.info.defaultPrice / 100}{" "}
                </p>
                <p>⭐{item.card.info.ratings.aggregatedRating.rating}</p>
                <p>{item.card.info.description}</p>
              </div>
              <div className="w-3/12">
                <div className="absolute mt-15">
                  <button
                    className="px-5 py-1 bg-white text-green-500 font-bold rounded-lg"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddItems(item);
                     
                    }}
                  >
                    Add+
                  </button>
                </div>
                <img
                  src={IMG_URL + item.card.info.imageId}
                  alt=""
                  className="w-40 rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ItemList;
