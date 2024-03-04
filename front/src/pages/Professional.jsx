
import { useEffect, useState } from "react";
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

    const api = async () => {
        const professional = await axios.get('https://serviya-back.vercel.app/api/v1/professional/65dea08e07ab5778c8ff7da1')
        // console.log(professional.data[0]);
        setProfess([professional.data[0]])

    }

    useEffect(() => {
        api();
    }, []);

    useEffect(() => {
        // console.log('---------------top')
        // console.log(profess.description);
        // console.log('---------------bottom')
    }, [profess]);

    return (
        <div>
            <Nav />
            <Banner />
            <div className={s.container}>
                <ProfDescrip />
                <Mapp />

            </div>
            <div className={s.containerConsult}>
                {profess.length > 0 ?
                    <div>
                        <ProfConsult profess={profess} />
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