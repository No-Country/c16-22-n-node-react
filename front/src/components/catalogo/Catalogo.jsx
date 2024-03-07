import useFetch from "../hooks/useFetch";
import { Grid } from "swiper/modules";
import { Swiper } from "swiper/react";
import { Card, Pagination } from "flowbite-react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { useState } from "react";

const DATA = "https://serviya-back.vercel.app/api/v1/professional";

const Catalogo = () => {
  const { data, loading, error } = useFetch(DATA);

  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => setCurrentPage(page);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(data);
  return (
    <>
      <Swiper
        slidesPerView={6}
        grid={{
          rows: 3,
          cols: 2,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        {data.map((professional) => (
          <Card
            key={professional._id}
            className="max-w-sm"
            imgAlt={professional.name}
            imgSrc={professional.pic}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {professional.name} {professional.lastName}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {professional.aptitudes[0]}
            </p>
          </Card>
        ))}
      </Swiper>
      <div className="flex overflow-x-auto sm:justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={100}
          onPageChange={onPageChange}
        />
      </div>
    </>
  );
};

export default Catalogo;
