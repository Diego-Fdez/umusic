import { create } from 'zustand';

const userStore = create((set) => ({
  user: [
    {
      id: 'Diego',
      name: '',
      email: '',
      userImage: '',
    },
  ],
  addUser: (data) => {
    set((state) => ({
      user: [data],
    }));
  },
}));

export default userStore;
