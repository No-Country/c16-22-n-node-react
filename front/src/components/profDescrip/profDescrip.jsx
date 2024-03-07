
import { useEffect, useState } from "react";
import s from "./profDescrip.module.css";

const ProfDescript = ({ profess }) => {

    const [prof, setProf] = useState([]);

    useEffect(() => {
        setProf(profess[0]);
    }, []);


    return (
        <div className={s.container}>
            <div className={s.description}>
                <div>Descripción</div>
                <div>{prof?.description}</div>
            </div>
            <div className={s.subContainer}>
                <div className={s.containerApt}>
                    <div>
                        Aptitudes
                    </div>

                    {prof?.aptitudes?.map((a) => {
                        return (
                            <div className={s.aptitudes}>
                                <div className={s.check}>
                                    <img className={s.imageCheck} src="/professional/check.svg" alt="" />
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
                        <div>{prof?.timeAvailability}</div>
                    </div>

                </div>
            </div>



        </div>
    )
}

export default ProfDescript;