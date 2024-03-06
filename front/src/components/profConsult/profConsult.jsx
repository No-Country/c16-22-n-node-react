import { useEffect, useState } from "react";
import axios from 'axios';
import s from "./profConsult.module.css";

const ProfConsult = ({ profess }) => {

    const [prof, setProf] = useState([]);

    useEffect(() => {
        setProf(profess[0]);
    }, []);

    return (
        <div >
            <div className={s.containerConsult}>
                <div>¿Cuál es el problema?</div>
                <div className={s.consult}>
                    <input className={s.inputConsult} placeholder="Consúltale al profesional por tu problema" type="text" />
                    <button className={s.buttonConsult}>
                        <img className={s.arrow} src="/professional/arrow.svg" alt="" />
                    </button>
                </div>

                <div>Consultas ({prof?.queries?.length})</div>
                <div>{prof?.queries?.map((query) => {
                    return (
                        <div className={s.nameBody}>
                            <div className={s.nameConsult}>
                                <img className={s.check} src="/professional/check1.svg" alt="" />
                                <div className={s.userName}>{query.userName}</div>
                            </div>
                            <div className={s.query}>{query.query}</div>
                            <div className={s.response}>
                                <img className={s.imageResponse} src="/professional/response.svg" alt="" />
                                <div className={s.queryResponse}>{query.response}</div>
                            </div>

                        </div>
                    )

                })}</div>
                < div className={s.see} > Ver más consultas <img className={s.arrowDown} src="/professional/arrowDown.svg" alt="" /></div>
            </div >

        </div>
    )
}

export default ProfConsult;