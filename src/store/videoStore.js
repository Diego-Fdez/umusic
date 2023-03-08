import { create } from 'zustand';

const useVideoStore = create((set) => ({
  videos: [],
  selectedCategory: 1,
  loading: false,
  error: null,
  keyword: 'todos',
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
  setLoading: (data) => {
    set((state) => ({
      loading: data,
    }));
  },
  setError: (data) => {
    set((state) => ({
      error: data,
    }));
  },
  addKeyword: (data) => {
    set((state) => ({
      keyword: data,
    }));
  },
}));

export default useVideoStore;
