import { useEffect, useState } from "react";
import axios from 'axios';
import s from "./profConsult.module.css";
import { handleLocalStorage } from "../../localStorage/LocalStorage";

const ProfConsult = ({ profess }) => {

    const { user } = handleLocalStorage()
    const [prof, setProf] = useState([]);
    const [consultation, setConsultation] = useState("");
    const [successfulMessage, setSuccessfulMessage] = useState();

    const handleConsultation = async () => {
        if (!consultation) return;

        try {
            const config = {
                headers: {
                    "Authorization": `Bearer ${user.token}`
                }
            }

            const chatResponse = await axios.post(
              "https://serviya-back.vercel.app/api/v1/chat",
              {
                professionalId: prof._id,
              },
              config
            );

            const chatId = chatResponse.data._id;
            
            const messageResponse = await axios.post(
              "https://serviya-back.vercel.app/api/v1/message/",
              {
                content: consultation,
                chatId,
              },
              config
            );

            if (messageResponse.status === 200) {
                setSuccessfulMessage(true);
            } else {
                setSuccessfulMessage(false);
            }

            console.log(messageResponse);
        } catch (error) {
            setSuccessfulMessage(false);
            console.log(error)
        }
    }

    useEffect(() => {
        setProf(profess[0]);
    }, []);

    return (
      <div>
        <div className={s.containerConsult}>
          <div>¿Cuál es el problema?</div>
          <div className={s.consult}>
            <input
              onChange={(e) => setConsultation(e.target.value)}
              className={`${s.inputConsult} ${successfulMessage ? "outline-[#00B012] border-[#00B012]" : ""}`}
              placeholder="Consúltale al profesional por tu problema"
              type="text"
            />
            <button
              onClick={() => {
                handleConsultation();
              }}
              className={s.buttonConsult}
            >
              <img className={s.arrow} src="/professional/arrow.svg" alt="" />
            </button>
          </div>
          {successfulMessage === true ? (
            <div className="flex gap-1">
              <span>
                <img src="/professional/check_circle.svg" alt="" />
              </span>
              <p className="text-[14px] font-bold">
                Tu consulta ha sido enviada con éxito. Espera a que el
                profesional te responda
              </p>
            </div>
          ) : successfulMessage === false ? (
            <div className="flex gap-1">
              <span>
                <img src="/professional/error.svg" alt="" />
              </span>
              <p className="text-[14px] font-bold">
                No pudimos enviar tu consulta, intenta más tarde nuevamente
              </p>
            </div>
          ) : <></>}

          <div>Consultas ({prof?.queries?.length})</div>
          <div>
            {prof?.queries?.map((query) => {
              return (
                <div className={s.nameBody}>
                  <div className={s.nameConsult}>
                    <img
                      className={s.check}
                      src="/professional/check1.svg"
                      alt=""
                    />
                    <div className={s.userName}>{query.userName}</div>
                  </div>
                  <div className={s.query}>{query.query}</div>
                  <div className={s.response}>
                    <img
                      className={s.imageResponse}
                      src="/professional/response.svg"
                      alt=""
                    />
                    <div className={s.queryResponse}>{query.response}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={s.see}>
            {" "}
            Ver más consultas{" "}
            <img
              className={s.arrowDown}
              src="/professional/arrowDown.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    );
}

export default ProfConsult;