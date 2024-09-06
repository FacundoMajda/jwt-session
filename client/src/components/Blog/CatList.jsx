const CategoryList = () => {
  const categories = [
    "JavaScript",
    "Docker",
    "Metodologías Ágiles",
    "Desarrollo Web",
    "Bases de Datos",
  ];

  return (
    <div className="container mx-auto mb-4">
      <h2 className="text-2xl font-bold mb-2">Categorías</h2>
      <ul className="list-group">
        {categories.map((category, index) => (
          <li key={index} className="list-group-item">
            <a href="#">{category}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
