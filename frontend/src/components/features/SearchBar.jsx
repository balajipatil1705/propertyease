import { useState } from "react";
import { Link } from "react-router-dom";
import serachImg from '../../assets/search.png'

const types = ["buy", "rent"];

function SearchBar() {
  const [query, setQuery] = useState({
    type: "buy",
    city: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  const handleChange = (e) => {
    setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="flex flex-col items-center w-full p-4">
      <div className="flex space-x-2 mb-4">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={`px-8 py-4 border border-gray-400 transition-colors ${
              query.type === type ? "bg-black text-white" : "bg-white text-black"
            } ${type === "buy" ? "rounded-l-lg" : "rounded-r-lg"}`}
          >
            {type}
          </button>
        ))}
      </div>
      <form className="flex flex-wrap w-full items-center justify-between border border-gray-400 p-2 lg:p-0 gap-4 lg:gap-2 lg:flex-nowrap">
        <input
          type="text"
          name="city"
          placeholder="City"
          onChange={handleChange}
          className="flex-1 px-2 py-1 lg:w-1/4 border-none focus:outline-none"
        />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Price"
          onChange={handleChange}
          className="flex-1 px-2 py-1 lg:w-1/4 border-none focus:outline-none"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max Price"
          onChange={handleChange}
          className="flex-1 px-2 py-1 lg:w-1/4 border-none focus:outline-none"
        />
        <Link
          to={`/list?type=${query.type}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}
          className="flex items-center justify-center flex-1 lg:w-auto bg-yellow-400 rounded-md py-2 px-4 text-white"
        >
          <img src={serachImg} alt="Search Icon" className="w-6 h-6" />
        </Link>
      </form>
    </div>
  );
}

export default SearchBar;
