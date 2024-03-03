import { handleLocalStorage } from "../localStorage/LocalStorage";
import useStoreLogin from "../store/useStoreLogin";
import { useNavigate } from "react-router-dom";


export const handleLogAuth=()=>{
    const { user } = handleLocalStorage();

    const navigate = useNavigate();
  
    const{setLogin}=useStoreLogin()
  
  
    const handleclearlocalStorage = ()=>{
      localStorage.clear();
      navigate("/");
      window.location.reload();
      setLogin(true)
    }


    return{
        handleclearlocalStorage,
        user
    }
}