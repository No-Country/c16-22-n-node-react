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
                <div className={s.cardTitle}>
                    <div>
                        <div className={s.title}>
                            <div className={s.textTitle}>Reservar visita</div>
                            <div className={s.arrowRightContainer}>
                                <img className={s.arrowRight} src="/reserva/arrowRight.svg" alt="" />
                            </div>

                            <div className={s.subtitle}>Carga de datos</div>
                        </div>
                        <div className={s.titleCard}>Servicio</div>
                    </div>

                    <div className={s.containerVolver}>
                        <img src="/reserva/arrowLeft.svg" alt="" />
                        <div className={s.volver}>  Volver</div>
                    </div>
                </div>
                <div className={s.subContainer}>

                    <div >
                        <div>
                            <div className={s.cardReserva}>
                                <img className={s.imageProfessional} src={prof?.pic} alt="" />
                                <div className={s.informationCard}>
                                    <div className={s.textCard}>Visita técnica con {prof?.name} {prof?.lastName}</div>
                                    <div className={s.containerCoin}> <img className={s.coin} src="/reserva/coin.svg" alt="" /> $ {prof?.consultPrice} ARS</div>
                                </div>

                            </div>


                            <div >
                                <div className={s.address} onChange={handleAddress}>

                                    <div className={s.addressTitle}>Domicilio de la visita</div>
                                    <div className={s.containerLocation}>
                                        <img className={s.imageLocation} src="/reserva/location.svg" alt="" />
                                        <input className={s.inputAddress} type="text" name="address" placeholder="Agrega el domicilio" />
                                    </div>
                                </div>

                                <div className={s.titleDateTime} >Día y horario de reserva</div>
                                <div className={s.dateTime}>
                                    <div className={s.date} onChange={handleDate}>
                                        <div >Fecha</div>
                                        <input className={s.inputDate} name="date" type="date" />
                                    </div>
                                    <div className={s.time} onChange={handleTime}>
                                        <div>Horario</div>
                                        <input className={s.inputTime} name="time" type="time" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={s.resumenCard}>
                        <div className={s.titleReserva}>Resumen de reserva</div>
                        <div className={s.bodyReserva}>
                            <div className={s.lineReserva}> <img src="/reserva/check.svg" alt="" /> Visita técnica con {prof?.name} {prof?.lastName}</div>
                            <div className={s.lineReserva}>  <img className={s.imageReserva} src="/reserva/location.svg" alt="" /> {formReserva.address}</div>
                            <div className={s.lineReserva}>  <img className={s.imageReserva} src="/reserva/coin.svg" alt="" /> {prof?.consultPrice} ARS</div>
                            <div className={s.lineReserva}> <img src="/reserva/access_time.svg" alt="" /> Día y hora: {formReserva.date} a las {formReserva.time}</div>
                        </div>
                        <div className={s.buttonContainer}>
                            <button className={s.buttonConfirmar}> Confirmar reserva</button>
                        </div>
                    </div>

                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Reservar;