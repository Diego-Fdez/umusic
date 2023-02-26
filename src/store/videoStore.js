import { create } from 'zustand';

const useVideoStore = create((set) => ({
  videos: [],
  selectedCategory: 1,
  addVideos: (data) => {
    set((state) => ({
      videos: data,
    }));
  },
  addSelectedCategory: (data) => {
    set((state) => ({
      selectedCategory: data,
    }));
  },
}));

export default useVideoStore;
