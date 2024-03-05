
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import s from './Professional.module.css'
import Footer from "../components/footer/Footer";
import Nav from "../components/nabvar/Navbar";
import Mapp from "../components/mapGoogle/Mapp";
import Banner from "../components/banner/Banner";
import ProfDescrip from "../components/profDescrip/profDescrip";
import ProfConsult from '../components/profConsult/profConsult';
import Gallery from '../components/gallery/gallery';
import Comments from '../components/comments/comments';


const Professional = () => {
    const [profess, setProfess] = useState([]);
    const { id } = useParams();
    // 65dea08e07ab5778c8ff7da1
    const api = async () => {
        const professional = await axios.get(`https://serviya-back.vercel.app/api/v1/professional/${id}`)
        // console.log(professional.data[0]);
        setProfess([professional.data[0]])

    }

    useEffect(() => {
        api();
        console.log('-----------------ID---------------------')
        console.log(id)
        console.log('-----------------ID---------------------')
    }, []);


    return (
        <div>
            <Nav />
            {profess.length > 0 ?
                <Banner profess={profess} />
                : null}
            <div className={s.container}>

                {profess.length > 0 ?
                    <ProfDescrip profess={profess} />
                    : null}
                {profess.length > 0 ?
                    <Mapp profess={profess} />
                    : null}
            </div>
            <div className={s.containerConsult}>
                {profess.length > 0 ?
                    <div className={s.containerSectionConsult}>
                        <ProfConsult profess={profess} />

                        <div className={s.report}>
                            <div ><img className={s.flag} src="/public/professional/flag.svg" alt="" /></div>

                            <div className={s.textReport}> Reportar cuenta </div>
                        </div>


                    </div>
                    : null}
                <div>
                    {profess.length > 0 ?
                        <Gallery profess={profess} />
                        : null}
                    {profess.length > 0 ?
                        <Comments profess={profess} />
                        : null}
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Professional;