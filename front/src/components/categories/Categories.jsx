import { Link } from 'react-router-dom';
import './Categories.css'
import { useEffect, useState } from 'react';

const DATA_URL = 'https://serviya-back.vercel.app/api/v1/category'

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(DATA_URL)
    .then((response) => response.json())
    .then((categories) => setCategories(categories))
  },[]) 
  console.log(categories)

  return (
        <div className="grid grid-rows-2 grid-cols-6 my-20">
        {categories.map((category) => (
            <div key={category.id} className="card m-4 rounded-2xl border-solid border-2 py-5">
            <Link to={`/categorias/${category.category}`}>
            <img src={category.urlImage} alt={category.category} className="colored-img h-20 m-auto"/>
            </Link>
            <p className="text-center color-text">{category.category}</p>
            </div>
        ))}
        </div>
  );
};

export default Categories;
