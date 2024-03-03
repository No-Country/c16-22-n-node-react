import { useEffect, useState } from "react";
import axios from 'axios';
import s from "./profConsult.module.css";

const ProfConsult = () => {

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
        <div className={s.containerConsult}>
            <div>¿Cuál es el problema?</div>
            <div className={s.consult}>
                <input className={s.inputConsult} type="text" />
                <button className={s.buttonConsult}>
                    <img className={s.arrow} src="/professional/arrow.svg" alt="" />
                </button>
            </div>

            <div>Consultas ({prof.comments?.length})</div>
            <div>{prof.comments?.map((c) => {
                return (
                    <div className={s.nameBody}>
                        <div className={s.nameConsult}>
                            <img className={s.check} src="/professional/check1.svg" alt="" />
                            {c.user}
                        </div>
                        <div>{c.body}</div>
                    </div>
                )

            })}</div>
            < div className={s.see} > Ver más consultas <img className={s.arrow} src="/professional/arrowDown.svg" alt="" /></div>
        </div >
    )
}

export default ProfConsult;