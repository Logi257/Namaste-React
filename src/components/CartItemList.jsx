import { IMG_URL } from "../../utils/constants";

const CartItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="flex justify-between p-2 border-b">
          <div>
            <img
              src={IMG_URL + item.card.info.imageId}
              className="w-20 rounded-lg"
            />
          </div>

          <h3 className="font-bold">{item.card.info.name}</h3>
          
          <p className="text-right">
            ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CartItemList;
