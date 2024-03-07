import { useEffect, useState } from "react";
import s from './comments.module.css'
import star from "/banner/estrella.svg";
import arrowDown from "/professional/arrowDown.svg";

const Comments = ({ profess }) => {
    const [prof, setProf] = useState([{}]);

    useEffect(() => {
        setProf(profess[0]);
    }, []);

    return (
        <div className={s.containerComments}>
            <div className={s.titleValues}>Valoraciones ({prof?.comments?.length})</div>
            <div className={s.allComments}>{prof?.comments?.map((comment) => {
                return (
                    <div className={s.oneComments}>
                        <div className={s.containerStarts}>

                            <div className={s.commentUser}> <img className={s.check} src="/professional/check1.svg" alt="" />{comment.user}</div>
                            <div className={s.stars}>
                                <img className={s.star} src={star} alt="star" />
                                <img className={s.star} src={star} alt="star" />
                                <img className={s.star} src={star} alt="star" />
                                <img className={s.star} src={star} alt="star" />
                                <img className={s.star} src={star} alt="star" />
                            </div>
                        </div>

                        <div>{comment.body}</div>
                    </div>
                )
            })}</div>
            < div className={s.see} > Ver más opiniones de las que hay<img className={s.arrowDown} src={arrowDown} alt="arrow down" /></div>
        </div>
    )
}

export default Comments;