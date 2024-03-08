import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import useStoreProfessional from '../store/useStoreProfessional';
import useStoreReserva from '../store/useStoreReserva';
import Footer from "../components/footer/Footer";
import Nav from "../components/nabvar/Navbar";
import s from './payment.module.css';

const Payment = () => {
    const navigate = useNavigate();
    // estados locales
    const [isOpen, setIsOpen] = useState(false);
    const [isPayment, setIsPayment] = useState(false);
    // estados globales
    const reserva = useStoreReserva(state => state.reserva);

    // setFormReserva({
    //     professional: prof,
    //     user: "Usuario",
    //     address: "Domicilio de la visita",
    //     date: Date.now(),
    //     time: "00:00"
    // });

    const confirmarPago = (e) => {
        e.preventDefault();
        setIsOpen(true);
        setTimeout(() => {
            setIsOpen(false);
            setIsPayment(true);
            console.log("Retrasado por 1 segundo.");
        }, "2000");

    }

    const volver = () => {
        navigate(`/`)
    };



    return (
        <div className={s.containerAll}>
            <div
                style={{ display: isOpen ? 'flex' : 'none' }}
                className={s.paymentCheck}>
                <div className={s.containerImagePaymentCheck}>
                    <img className={s.imagePaymentcheck} src="/reserva/payment.svg" alt="" />
                </div>
            </div>
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

                    <div
                        onClick={volver}
                        className={s.containerVolver}>
                        <img src="/reserva/arrowLeft.svg" alt="" />
                        <div className={s.volver}>  Volver</div>
                    </div>
                </div>

                <div className={s.containerCard}>
                    <div className={s.resumenCard}>
                        <div className={s.titleReserva}>Resumen de reserva</div>
                        <div className={s.bodyReserva}>
                            {console.log(reserva)}
                            <div className={s.lineReserva}> <img src="/reserva/check.svg" alt="" /> Visita técnica con {reserva?.professional?.name} {reserva?.professional?.lastName}</div>
                            <div className={s.lineReserva}>  <img className={s.imageReserva} src="/reserva/location.svg" alt="" /> {reserva?.address}</div>
                            <div className={s.lineReserva}>  <img className={s.imageReserva} src="/reserva/coin.svg" alt="" /> {reserva?.professional?.consultPrice} ARS</div>
                            <div className={s.lineReserva}> <img src="/reserva/access_time.svg" alt="" /> Día y hora: {reserva?.date} a las {reserva?.time}</div>
                        </div>

                    </div>
                    <div>

                        <img
                            style={{ display: isPayment ? 'flex' : 'none' }}
                            className={s.checkPaymentImage} src="/reserva/checkPayment.svg" alt="" />
                    </div>
                </div>
                <div
                    style={{ display: isPayment ? 'none' : 'flex' }}
                    className={s.isPayment}>
                    <div className={s.titlePayment}>Seleccionar medio de pago</div>
                    <div className={s.containerPago}>
                        <div className={s.containerImagePayment}>
                            <img className={s.imagePago} src="/reserva/bbva.svg" alt="" />
                        </div>
                        <div className={s.textPago}>
                            <div>Terminada en 2365</div>
                            <div>BBVA</div>
                            <div>Vencimiento: 05/2025</div>
                        </div>


                        <input name="payment" type="radio" checked />
                    </div>
                    <div className={s.containerPago}>
                        <div className={s.containerImagePayment}>
                            <img className={s.imagePago} src="/reserva/mercado-pago.svg" alt="" />
                        </div>
                        <div className={s.textPago}>Mercado Pago</div>
                        <input name="payment" type="radio" />
                    </div>
                    <div className={s.buttonContainer}>
                        <button onClick={(e) => confirmarPago(e)} className={s.buttonConfirmar}> Confirmar pago</button>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Payment;