import { create } from 'zustand';

// Definir la tienda
const useStoreProfessional = create(set => ({

    professional: {},
    updateProfessional: async (newProfessional) => set({ professional: newProfessional }),
}));

// Exportar la función useStore
export default useStoreProfessional;