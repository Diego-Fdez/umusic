import useVideoStore from '../store/videoStore';

const UsePlaying = () => {
  const videos = useVideoStore((state) => state.videoList);
  const currentVideoIndex = useVideoStore((state) => state.currentVideoIndex);
  const setCurrentVideoIndex = useVideoStore(
    (state) => state.setCurrentVideoIndex
  );
  const setShouldAutoPlay = useVideoStore((state) => state.setShouldAutoPlay);

  //cycle between videos
  const handleEnded = () => {
    setCurrentVideoIndex((currentVideoIndex + 1) % videos?.length);
    setShouldAutoPlay(true);
  };

  /** When the user clicks on a video, the video should play and the video index should be set to the
   * index of the video that was clicked on.*/
  const playVideo = (index) => {
    setCurrentVideoIndex(index);
    setShouldAutoPlay(true);
  };

  //cycle backwards
  const handlePrev = () => {
    setCurrentVideoIndex(
      (currentVideoIndex - 1 + videos?.length) % videos?.length
    );
    setShouldAutoPlay(false);
  };

  //forward cycle
  const handleNext = () => {
    setCurrentVideoIndex((currentVideoIndex + 1) % videos?.length);
    setShouldAutoPlay(false);
  };

  return { handleEnded, playVideo, handlePrev, handleNext };
};

export default UsePlaying;
