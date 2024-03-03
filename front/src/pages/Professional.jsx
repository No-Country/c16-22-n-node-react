
import { useEffect, useState } from "react";
import axios from 'axios';
import Footer from "../components/footer/Footer";
import Nav from "../components/nabvar/Navbar";
import Mapp from "../components/mapGoogle/Mapp";
import Banner from "../components/banner/Banner";
import ProfDescrip from "../components/profDescrip/profDescrip";
import ProfConsult from '../components/profConsult/profConsult';
import s from './Professional.module.css'

const Professional = () => {
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
        <div>
            <Nav />
            <Banner />
            <div className={s.container}>
                <ProfDescrip />
                <Mapp />

            </div>
            <div className={s.containerConsult}>
                <ProfConsult />
            </div>


            <Footer />
        </div>
    )
}

export default Professional;