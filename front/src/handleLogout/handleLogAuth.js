import { handleLocalStorage } from "../localStorage/LocalStorage";
import useStoreLogin from "../store/useStoreLogin";


export const handleLogAuth=()=>{
    const { user } = handleLocalStorage();

  
    const{setLogin}=useStoreLogin()
  
  
    const handleclearlocalStorage = ()=>{
      localStorage.clear();
      window.location.reload();
      setLogin(true)
    }


    return{
        handleclearlocalStorage,
        user
    }
}