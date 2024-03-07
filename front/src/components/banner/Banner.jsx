
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import useStoreProfessional from "../../store/useStoreProfessional"
import s from "./Banner.module.css";

const Banner = ({ profess }) => {

    const [prof, setProf] = useState([]);
    const navigate = useNavigate();
    const updateProfessional = useStoreProfessional(state => state.updateProfessional);


    const reservar = (e) => {
        e.preventDefault();
        updateProfessional(prof)
        navigate(`/reservar/${prof?._id}`)
    }

    useEffect(() => {
        setProf(profess[0]);
    }, []);

    return (
        <div className={s.banner}>
            <div className={s.cardProfessional}>
                <div className={s.photo}>
                    <img className={s.imgPhoto} src={prof?.pic} alt="" />
                </div>
                <div className={s.datos}>
                    <div className={s.name}>{prof?.name} {prof?.lastName}</div>
                    <div className={s.value}>
                        <div className={s.stars}>
                            <img className={s.star} src="/banner/estrella.svg" alt="star" />
                            <img className={s.star} src="/banner/estrella.svg" alt="star" />
                            <img className={s.star} src="/banner/estrella.svg" alt="star" />
                            <img className={s.star} src="/banner/estrella.svg" alt="star" />
                            <img className={s.star} src="/banner/estrella.svg" alt="star" />
                        </div>
                        <div className={s.textValue}>({prof?.comments?.length} valoraciones)</div>
                    </div>

                    <button onClick={(e) => reservar(e)} className={s.reservaButton}>Reservar consulta</button>

                </div>
            </div>
            <div className={s.cardValue}>
                <div className={s.containerIdentity}>
                    <div className={s.identity}>Identidad verificada  </div>
                    <div className={s.vectorCircle}><img className={s.vector} src="/banner/vector.svg" alt="" /></div>
                </div>

                <div className={s.consultPrice}>Valor de consulta: {prof?.consultPrice} ARS</div>
            </div>
        </div>
    )
}

export default Banner;     