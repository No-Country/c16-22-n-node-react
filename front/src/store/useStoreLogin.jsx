import {create} from 'zustand';

// Definir la tienda
const useStoreLogin = create(set => ({
  
  login: false,
  setLogin: (newFlag) => set({ login: newFlag }),
}));

// Exportar la función useStore
export default useStoreLogin;