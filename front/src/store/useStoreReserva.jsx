import { create } from 'zustand';

// Definir la tienda
const useStoreReserva = create(set => ({

    reserva: {},
    updateReserva: async (newReserva) => set({ reserva: newReserva }),
}));

// Exportar la función useStore
export default useStoreReserva;