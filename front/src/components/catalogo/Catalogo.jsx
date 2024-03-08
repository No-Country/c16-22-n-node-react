import useFetch from "../hooks/useFetch";
import { Card, Pagination } from "flowbite-react";
import { Link } from 'react-router-dom';
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { useEffect, useState } from "react";

const DATA = "https://serviya-back.vercel.app/api/v1/professional";
const ITEMS_PER_PAGE = 9;

const Catalogo = () => {
  const { data, loading, error } = useFetch(DATA);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState([]);

  useEffect(() => {
    if (!loading && data) {
      const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
      const endIndex = startIndex + ITEMS_PER_PAGE;
      setPaginatedData(data.slice(startIndex, endIndex));
    }
  }, [data, currentPage, loading]);

  const totalPages = Math.ceil((data?.length || 0) / ITEMS_PER_PAGE);

  const onPageChange = (page) => setCurrentPage(page);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
      <div className="grid grid-cols-12 grid-rows-9 m-4 justify-items-center">
        {paginatedData.map((professional) => (

          <Card
            key={professional._id}
            className="max-w-sm m-6 grid-cols-subgrid gap-4 col-span-4 grid-rows-subgrid row-span-3 rounded-xl"
            renderImage={() => <img width={500} height={500} src={professional.pic} alt={professional.name}
              className="h-60 object-cover rounded-t-xl" />
            }
          >
            <Link to={`/professional/${professional._id}`}>
              <div className="flex justify-between">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {professional.name} {professional.lastName}
                </h5>
                <img src="../../../public/catalogo/Novedades/Frame 14182.png" className="object-contain" />
              </div>
              <div className="flex justify-between">
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  <b className="flex">
                    <img src="../../../public/catalogo/Novedades/verified.png" className="object-contain mr-1" /> {professional.aptitudes[0]}
                  </b>
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Zona: {professional.workZone}
                </p>
              </div>
              <p className="font-normal text-gray-700 dark:text-gray-400 flex">
                <img src="../../../public/catalogo/Novedades/Vector.png" className="object-contain mr-1" /> {professional.timeAvailability}
              </p>
            </Link>
          </Card>

        ))}
      </div>

      <div className="flex overflow-x-auto sm:justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>
    </>
  );
};

export default Catalogo;
