import s from './Mapp.module.css';

const Mapp = () => {
    return (
        <div className={s.workZone}>
            <div>Zona de trabajo</div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25287.523633567427!2d-62.421385116791484!3d-37.60356040982712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95eb9501bd9d93a9%3A0x756570d8f8055809!2sPigue%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1709228760660!5m2!1ses-419!2sar"
                width="508.9" height="485" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default Mapp; 