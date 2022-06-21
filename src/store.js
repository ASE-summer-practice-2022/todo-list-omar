import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { v4 as uuidv4 } from 'uuid';

let useStore = (set) => ({
  items: [
    { id: uuidv4(), name: "HTML, CSS, JavaScript" },
    { id: uuidv4(), name: "React, Angular, Vue" },
    { id: uuidv4(), name: "Redux, MobX, Zustand" },

  ],
  addItems: (item) =>
    set((state) => ({
      items: [
        { name: item.name, id: uuidv4() },
        ...state.items,
      ],
    })),
  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),
});

useStore = devtools(useStore);

export default useStore = create(useStore);