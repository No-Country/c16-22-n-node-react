
import { useEffect, useState } from "react";
import s from "./Banner.module.css"
import axios from 'axios';

const Banner = () => {

    const [prof, setProf] = useState([]);

    const api = async () => {
        const professional = await axios.get('https://serviya-back.vercel.app/api/v1/professional/65dea08e07ab5778c8ff7da1')
        console.log(professional.data[0]);
        setProf(professional.data[0])

    }

    useEffect(() => {
        api();
    }, []);

    useEffect(() => {
        console.log('---------------top')
        console.log(prof.name);
        console.log('---------------bottom')
    }, [prof]);

    return (
        <div className={s.banner}>
            <div className={s.cardProfessional}>
                <div className={s.photo}>
                    <img className={s.imgPhoto} src={prof.pic} alt="" />
                </div>
                <div className={s.datos}>
                    <div className={s.name}>{prof.name} {prof.lastName}</div>
                    <div className={s.value}>
                        <div className={s.stars}>
                            <img className={s.star} src="/banner/estrella.svg" alt="" />
                            <img className={s.star} src="/banner/estrella.svg" alt="" />
                            <img className={s.star} src="/banner/estrella.svg" alt="" />
                            <img className={s.star} src="/banner/estrella.svg" alt="" />
                            <img className={s.star} src="/banner/estrella.svg" alt="" />
                        </div>
                        <div className={s.textValue}>(10 valoraciones)</div>
                    </div>

                    <button className={s.reservaButton}>Reservar consulta</button>

                </div>
            </div>
            <div className={s.cardValue}>
                <div className={s.containerIdentity}>
                    <div className={s.identity}>Identidad verificada  </div>
                    <div className={s.vectorCircle}><img className={s.vector} src="/banner/vector.svg" alt="" /></div>
                </div>

                <div className={s.consultPrice}>Valor de consulta: {prof.consultPrice} ARS</div>
            </div>
        </div>
    )
}

export default Banner;     