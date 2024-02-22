import { Link } from 'react-router-dom';
import './Categories.css'

const Categories = () => {
  const categories = [
    {
      id: "1",
      name: "Electricidad",
      src: "../../../public/Categorias/electricidad.png",
      link: "/electricidad",
    },
    {
      id: "2",
      name: "Plomería",
      src: "../../../public/Categorias/plomeria.png",
      link: "./",
    },
    {
      id: "3",
      name: "Gas",
      src: "../../../public/Categorias/gas.png",
      link: "./",
    },
    {
      id: "4",
      name: "Cerrajería",
      src: "../../../public/Categorias/cerrajeria.png",
      link: "./",
    },
    {
      id: "5",
      name: "Fumigación",
      src: "../../../public/Categorias/fumigacion.png",
      link: "./",
    },
    {
      id: "6",
      name: "Pintura",
      src: "../../../public/Categorias/pintura.png",
      link: "./",
    },
    {
      id: "7",
      name: "Carpintería",
      src: "../../../public/Categorias/carpinteria.png",
      link: "./",
    },
    {
      id: "8",
      name: "Albañiería",
      src: "../../../public/Categorias/albanileria.png",
      link: "./",
    },
    {
      id: "9",
      name: "Jardinería",
      src: "../../../public/Categorias/jardineria.png",
      link: "./",
    },
    {
      id: "10",
      name: "Limpieza",
      src: "../../../public/Categorias/limpieza.png",
      link: "./",
    },
    {
      id: "11",
      name: "ElectroHogar",
      src: "../../../public/Categorias/electrohogar.png",
      link: "./",
    },
    {
      id: "12",
      name: "Otros",
      src: "../../../public/Categorias/otros.png",
      link: "./",
    },
  ];

  return (
        <div className="max-w-[1440px] w-full mx-auto gap-12  flex flex-wrap justify-center my-20">
        {categories.map((category) => (
            <div key={category.id} className="card cursor-pointer  w-48 rounded-2xl border-solid border-2 py-5">
            <Link to={`/categorias/${category.name}`}>
            <img src={category.src} alt={category.name} className="colored-img h-20 m-auto"/>
            </Link>
            <p className="text-center color-text">{category.name}</p>
            </div>
        ))}
        </div>
  );
};

export default Categories;
