import "../styles/Categories.css";

function Categories({ setActiveCategory, categories, activeCategory }) {
  return (
    <div className="lmj-categories">
      <select
        multiple
        value={activeCategory}
        onChange={(e) =>
          setActiveCategory(
            Array.from(e.target.selectedOptions, (option) => option.value)
          )
        }
        className="lmj-categories-select"
      >
        <option value="">Toutes</option>
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
