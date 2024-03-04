import { useEffect, useState } from "react";
import s from './gallery.module.css'

const Gallery = ({ profess }) => {
    const [prof, setProf] = useState([]);

    useEffect(() => {
        setProf(profess[0]);
    }, []);

    return (
        <div className={s.containerGallery}>
            <div>Galería</div>
            <div className={s.gallery}>{prof?.gallery?.map((image) => {
                return (
                    <img className={s.imageGallery} src={image?.imageUrl} alt={`Imagen de ${prof?.category}`} />
                )
            })}</div>
        </div>
    )
}

export default Gallery;