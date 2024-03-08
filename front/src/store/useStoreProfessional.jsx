import { create } from 'zustand';

// Definir la tienda
const useStoreAllProfessional = create(set => ({

    professional: {},
    updateProfessional: async (newProfessional) => set({ professional: newProfessional }),
}));

// Exportar la función useStore
export default useStoreAllProfessional;