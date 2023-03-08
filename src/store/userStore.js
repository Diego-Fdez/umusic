import { create } from 'zustand';

const userStore = create((set) => ({
  user: {},
  loadingUser: false,
  addUser: (data) => {
    set((state) => ({
      user: data,
    }));
  },
  setLoadingUser: (data) => {
    set((state) => ({
      loadingUser: data,
    }));
  },
}));

export default userStore;
