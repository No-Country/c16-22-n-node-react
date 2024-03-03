import useStoreLogin from "../store/useStoreLogin";

export const handleLocalStorage = () => {
  const { setLogin } = useStoreLogin();
  const user = JSON.parse(localStorage.getItem("info"));
  const selectedChat = localStorage.getItem("selectedChat");

  const login = () => {
    if (user) {
      setLogin(true);
    }
  };

  const logout = () => {
    localStorage.removeItem("info");
    setLogin(false);
  };

  return {
    user,
    login,
    logout,
    selectedChat
  };
};
