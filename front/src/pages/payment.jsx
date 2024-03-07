import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import useStoreProfessional from '../store/useStoreProfessional';
import useStoreReserva from '../store/useStoreReserva';
import Footer from "../components/footer/Footer";
import Nav from "../components/nabvar/Navbar";
import s from './payment.module.css';

const Payment = () => {
    // estados locales
    const [prof, setProf] = useState([]);
    const [formReserva, setFormReserva] = useState({});
    // estados globales
    const professional = useStoreProfessional(state => state.professional);
    const reserva = useStoreReserva(state => state.reserva);
    const updateProfessional = useStoreProfessional(state => state.updateProfessional);
    const updateReserva = useStoreReserva(state => state.updateReserva);
    const navigate = useNavigate();

    // setFormReserva({
    //     professional: prof,
    //     user: "Usuario",
    //     address: "Domicilio de la visita",
    //     date: Date.now(),
    //     time: "00:00"
    // });

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
                            <div className={s.arrowRightContainer}>
                                <img className={s.arrowRight} src="/reserva/arrowRight.svg" alt="" />
                            </div>
                            <div className={s.titleCard}>Medio de pago</div>
                        </div>

                    </div>

                    <div className={s.containerVolver}>
                        <img src="/reserva/arrowLeft.svg" alt="" />
                        <div className={s.volver}>  Volver</div>
                    </div>
                </div>


                <div className={s.resumenCard}>
                    <div className={s.titleReserva}>Resumen de reserva</div>
                    <div className={s.bodyReserva}>
                        <div className={s.lineReserva}> <img src="/reserva/check.svg" alt="" /> Visita técnica con {reserva?.professional?.name} {reserva?.professional?.lastName}</div>
                        <div className={s.lineReserva}>  <img className={s.imageReserva} src="/reserva/location.svg" alt="" /> {reserva?.address}</div>
                        <div className={s.lineReserva}>  <img className={s.imageReserva} src="/reserva/coin.svg" alt="" /> {reserva?.professional?.consultPrice} ARS</div>
                        <div className={s.lineReserva}> <img src="/reserva/access_time.svg" alt="" /> Día y hora: {reserva?.date} a las {reserva?.time}</div>
                    </div>

                </div>
                <div>
                    <div className={s.titlePayment}>Seleccionar medio de pago</div>
                    <div className={s.containerPago}>
                        <img className={s.imagePago} src="/reserva/bbva.svg" alt="" />
                        <div className={s.textPago}>Mercado Pago</div>
                        <input name="payment" type="radio" />
                    </div>
                    <div className={s.containerPago}>
                        <img className={s.imagePago} src="/reserva/mercado-pago.svg" alt="" />
                        <div className={s.textPago}>Mercado Pago</div>
                        <input name="payment" type="radio" />
                    </div>
                    <div className={s.buttonContainer}>
                        <button onClick={(e) => confirmarPago(e)} className={s.buttonConfirmar}> Confirmar pago</button>
                    </div>
                </div>
                {/* bbva.svg */}
            </div>
            <Footer />
        </div>
    )
}

export default Payment;