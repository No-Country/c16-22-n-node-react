
import { useEffect, useState } from "react";
import axios from 'axios';
import s from "./profDescrip.module.css";

const ProfDescript = () => {

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
        console.log(prof.description);
        console.log('---------------bottom')
    }, [prof]);
    return (
        <div className={s.container}>
            <div className={s.description}>
                <div>Descripción</div>
                <div>{prof.description}</div>
            </div>
            <div className={s.subContainer}>
                <div className={s.containerApt}>
                    <div>
                        Aptitudes
                    </div>

                    {prof.aptitudes?.map((a) => {
                        return (
                            <div className={s.aptitudes}>
                                <div className={s.check}>
                                    <img src="/professional/check.svg" alt="" />
                                </div>
                                <div>{a}</div>
                            </div>
                        )
                    })}
                </div>
                <div>
                    <div>Disponibilidad</div>
                    <div className={s.time}>
                        <img src="/professional/access_time.svg" alt="" />
                        <div>{prof.timeAvailability}</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProfDescript;