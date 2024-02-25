import { useEffect, useState } from 'react';
import "./Novedades.css"


const DATA= 'https://serviya-back.vercel.app/api/v1/news';
const Novedades = () => {

     const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        fetch(DATA)
        .then((response) => response.json())
        .then((novedades) => setNovedades(novedades)
        )
        },[]);


    return (
        <>
        <h2 className='titulo'>Novedades</h2>
            <section className='contenedor'>
                {novedades.map((novedad) => (
                    <article key={novedad._id} className="novedades flex">
                        <img src={novedad.urlImage} alt={novedad.news} className='imagen'/>
                        <div className='contenedorTexto'>
                        <h3 className='texto'>{novedad.news[0]}</h3>
                        <span className='texto text-slate-50 '>{novedad.news[1]}</span>
                        </div>
                    </article>
                ))}
            </section>
        </>
  )
}

export default Novedades;