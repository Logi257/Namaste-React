import ItemList from "./ItemList";

const ResCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div
        className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex justify-between">
          <h2 className="font-bold">
            {data.title} ({data.categories.length})
          </h2>
          <span>⬇️</span>
        </div>
        {showItems && <ItemList items={data.categories} />}
      </div>
    </div>
  );
};

export default ResCategory;
