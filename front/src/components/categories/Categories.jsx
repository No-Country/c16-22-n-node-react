import { Link } from 'react-router-dom';
import './Categories.css'
import { useEffect, useState } from 'react';

const DATA_URL = 'https://serviya-back.vercel.app/api/v1/category';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(DATA_URL)
    .then((response) => response.json())
    .then((categories) => setCategories(categories))
  },[]) 
  

  return (
         <div className='max-w-[1440px] mx-auto m-20 '>
       <span className="px-3 text-[#4E4E4E] ml-16 font-medium text-3xl " >Categorias</span>
        <div className="max-w-[1440px] w-full mx-auto gap-3  flex flex-wrap justify-center mt-5 ">
         
        {categories.map((category) => (
          <div key={category._id} className="card m-4 rounded-2xl border-solid w-[180px] h-[140px] border-2 py-5">
            <Link to={`/categorias/${category.category.toLowerCase()}`}>
            <img src={category.urlImage} alt={category.category} className="colored-img h-20 m-auto"/>
            </Link>
            <p className="text-center color-text">{category.category}</p>
            </div>
        ))}
        </div>
        </div>
  );
};

export default Categories;
