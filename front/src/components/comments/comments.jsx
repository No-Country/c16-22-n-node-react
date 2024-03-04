import { useEffect, useState } from "react";
import s from './comments.module.css'

const Comments = ({ profess }) => {
    const [prof, setProf] = useState([]);

    useEffect(() => {
        setProf(profess[0]);
    }, []);

    return (
        <div>
            <div>Valoraciones ({prof?.comments?.length})</div>
            <div>{prof?.comments?.map((comment) => {
                return (
                    <div>
                        <div className={s.containerStarts}>

                            <div className={s.commentUser}> <img className={s.check} src="/professional/check1.svg" alt="" />{comment.user}</div>
                            <div className={s.stars}>
                                <img className={s.star} src="/banner/estrella.svg" alt="" />
                                <img className={s.star} src="/banner/estrella.svg" alt="" />
                                <img className={s.star} src="/banner/estrella.svg" alt="" />
                                <img className={s.star} src="/banner/estrella.svg" alt="" />
                                <img className={s.star} src="/banner/estrella.svg" alt="" />
                            </div>
                        </div>

                        <div>{comment.body}</div>
                    </div>
                )
            })}</div>
        </div>
    )
}

export default Comments;