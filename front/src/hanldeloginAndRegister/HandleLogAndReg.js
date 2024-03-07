import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useStoreLogin from "../store/useStoreLogin";
import axios from 'axios'


export const handleLogin = () => {
    const [openModal, setOpenModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [info, setInfo] = useState();
    const {setLogin} = useStoreLogin();
    const [openModalProfessional, setOpenModalProfessional] = useState(false);
    const { register, handleSubmit, reset } = useForm();
  
    useEffect(() => {
      if (info) {
        setLoading(true);
        console.log(info)
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };

        if(info.type === "user") {
                  axios
                    .post(
                      "https://serviya-back.vercel.app/api/v1/users/login",
                      {
                        email: info.email,
                        password: info.password,
                      },
                      config
                    )
                    .then((response) => {
                      console.log(response, "success");
                      localStorage.setItem(
                        "info",
                        JSON.stringify(response.data)
                      );
                      setLoading(true);
                      setOpenModal(false);
                      setLogin(true);
                    })
                    .catch((error) => console.log(error))
                    .finally(setLoading(false));
        } else {
                  axios
                    .post(
                      "https://serviya-back.vercel.app/api/v1/professional/login",
                      {
                        email: info.email,
                        password: info.password,
                      },
                      config
                    )
                    .then((response) => {
                      console.log(response, "success");
                      response.data.type = 'professional';
                      localStorage.setItem(
                        "info",
                        JSON.stringify(response.data)
                      );
                      setLoading(true);
                      setOpenModal(false);
                      setLogin(true);
                    })
                    .catch((error) => console.log(error))
                    .finally(setLoading(false));
        }
        
        
      }
    }, [info]);
  
    const onSubmit = async ({ email, password, type }) => {
      console.log(email, password, type);
      setInfo({ email, password, type });
      setLoading(true); 
      reset();
    };
  //maenjo para cerrar el modal de login haciendo click fuera de el o en la x en la parte baja del modal
    const handleModalClick = (e) => {
      if (e.target.classList.contains("modal-container")) {
        setOpenModal(false); 
      }
    };
  


    return {
      setOpenModal,
      openModal,
      loading,
      info,
      register,
      handleSubmit,
      handleModalClick,
      onSubmit,
      openModalProfessional,
      setOpenModalProfessional,
    };

}

//==> //==>//==>//==>//==>//==>//==>//==>//==>//==>//==>//==>//==>


export const handleRegister = () => {
    const [openModal, setOpenModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [info, setInfo] = useState();
    const {setLogin} = useStoreLogin();
    const { register, handleSubmit, reset } = useForm();
  
    useEffect(() => {
      if (info) {
        setLoading(true);
  
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
  
        axios
          .post(
            "https://serviya-back.vercel.app/api/v1/users",
            {
              name:info.name,
              email: info.email,
              password: info.password,
            },
            config
          )
          .then((response) => {
          
            console.log(response, "success");
            setLoading(true);
            setOpenModal(false);
            setLogin(true)
          })
          .catch((error) => console.log(error))
          .finally(setLoading(false));
      }
    }, [info]);
  
    // manejo de datos del formulario de capturan en el data
    // hacer pruebas en el formulario
    const onSubmit = async ({name, email, password, }) => {
      console.log(name, email, password);
      setInfo({name, email, password });
      setLoading(true); // Set loading to true before making the API call
      reset();
    };
  
    const handleModalClick = (e) => {
      if (e.target.classList.contains("modal-container")) {
        setOpenModal(false); //
      }
    };

    return{
        setOpenModal,
        openModal,
        loading,
        info,
        register,
        handleSubmit,
        handleModalClick,
        onSubmit
    }
}