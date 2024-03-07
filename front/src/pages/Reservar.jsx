import { useEffect, useState } from "react";
import useStoreProfessional from '../store/useStoreProfessional';
import Footer from "../components/footer/Footer";
import Nav from "../components/nabvar/Navbar";
import s from './Reservar.module.css'

const Reservar = () => {
    const [prof, setProf] = useState([]);
    const professional = useStoreProfessional(state => state.professional);
    const [formReserva, setFormReserva] = useState({});

    // console.log(professional);

    const handleAddress = (e) => {
        e.preventDefault();
        // console.log(e.target.value)
        formReserva.address = e.target.value;
    }

    const handleDate = (e) => {
        e.preventDefault();
        formReserva.date = Date(e.target.value);
    }

    const handleTime = (e) => {
        e.preventDefault();
        formReserva.time = e.target.value;
    }

    useEffect(() => {
        setProf(professional);
        setFormReserva({
            professional: prof,
            user: "Usuario",
            address: "Domicilio de la visita",
            date: Date.now(),
            time: "00:00"
        });
    }, []);

    useEffect(() => {
        console.log(formReserva)
    }, [formReserva]);


    return (
        <div>
            <Nav />
            <div className={s.container}>
                <div className={s.title}>
                    <div className={s.textTitle}>Reservar visita</div>
                    <img className={s.arrowRight} src="/reserva/arrowRight.svg" alt="" />
                    <div className={s.subtitle}>Carga de datos</div>
                </div>

                <div>Servicio</div>

                <div>
                    <img src={prof?.pic} alt="" />
                    <div>Visita técnica con {prof?.name} {prof?.lastName}</div>
                    <div>{prof?.consultPrice} ARS</div>
                </div>


                <div >
                    <div onChange={handleAddress}>Domicilio de la visita
                        <input type="text" name="address" placeholder="Agrega el domicilio" />
                    </div>

                    <div >Día y horario de reserva</div>

                    <div onChange={handleDate}>
                        <div >Fecha</div>
                        <input name="date" type="date" />
                    </div>
                    <div onChange={handleTime}>
                        <div>Horario</div>
                        <input name="time" type="time" />
                    </div>
                </div>


                <div>
                    <div>Resumen de reserva</div>
                    <div>Visita técnica con {prof?.name} {prof?.lastName}</div>
                    <div>{formReserva.address}</div>
                    <div>{prof?.consultPrice} ARS</div>
                    <div>Día y hora: {formReserva.date}
                        a las {formReserva.time}</div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Reservar;