import React, { useState } from "react";
import { brands } from "../constants/index";
import { colors } from "../constants/index";

function MyFormData() {
  const [inputValue, setInputValue] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const result = new FormData(e.target);
    console.log(result.get("brand"), result.get("name"), result.get("color"));
  }
  return (
    <div className="base-container py-10 h-full bg-slate-300 flex justify-center">
      <form onSubmit={handleSubmit} className="w-full max-w-96">
        <h1 className="font-semibold text-2xl mb-5">Add to car</h1>
        <div className="flex flex-col gap-5">
          <input
            name="name"
            type="text"
            placeholder="Todo..."
            className="input input-bordered w-full max-w-xs"
          />
          <select
            name="brand"
            defaultValue="Car brand"
            className="select select-bordered w-full max-w-xs"
          >
            <option disabled selected>
              Car brand
            </option>
            {brands.map((brand) => {
              return <option key={brand} value={brand}>{brand}</option>;
            })}
          </select>
          <select
            name="color"
            defaultValue="Car color"
            className="select select-bordered w-full max-w-xs"
          >
            <option disabled selected>
              Car color
            </option>
            {colors.map((color) => {
              return <option key={color} value={color}>{color}</option>;
            })}
          </select>
        </div>
        <button className="btn bg-primary text-white w-full max-w-xs mt-5" type="submit">
            Save
          </button>
      </form>
    </div>
  );
}

export default MyFormData;
