import { Link } from 'react-router-dom';
import './Categories.css'
import Title from '../title/Title';
import useFetch from '../hooks/useFetch';

const DATA_URL = 'https://serviya-back.vercel.app/api/v1/category';
const Categories = () => {

  const { data, loading, error } = useFetch(DATA_URL);
  console.log(data);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='max-w-[1440px] mx-auto m-20 '>
      <Title className={"px-3 text-[#4E4E4E] ml-16 font-medium text-3xl "} text={'Categorias'}></Title>
      <div className="max-w-[1440px] w-full mx-auto gap-3  flex flex-wrap justify-center mt-5 ">

        {data.map((category) => (
          <div key={category._id} className="card m-4 rounded-2xl border-solid w-[180px] h-[140px] border-2 py-5">
            <Link to={`/catalogo/`}
            // ${category.category.toLowerCase()}`}
            >
              <img src={category.urlImage} alt={category.category} className="colored-img h-20 m-auto" />
            </Link>
            <p className="text-center color-text">{category.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
