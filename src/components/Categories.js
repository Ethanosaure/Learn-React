import React from "react";

function Categories({ categories, selectCategories, setSelectCategories }) {
  function changeCategory(event) {
    const value = event.target.value;
    setSelectCategories(value);
    console.log(value);
  }

  return (
    <div>
      <select onChange={changeCategory} value={selectCategories}>
        <option value="all">Toutes les catégories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Categories;
