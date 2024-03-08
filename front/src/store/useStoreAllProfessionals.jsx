import { create } from 'zustand';

// Definir la tienda
const useStoreAllProfessionals = create(set => ({

    professionals: {},
    updateProfessionals: async (newProfessionals) => set({ professionals: newProfessionals }),
}));

// Exportar la función useStore
export default useStoreAllProfessionals;