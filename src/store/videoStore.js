import { create } from 'zustand';

const useVideoStore = create((set) => ({
  videos: [],
  addVideos: (data) => {
    set((state) => ({
      videos: data,
    }));
  },
}));

export default useVideoStore;
