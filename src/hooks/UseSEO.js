import { useEffect, useRef } from 'react';

export default function UseSEO({ title }) {
  const prevTitle = useRef(document.title);

  useEffect(() => {
    const previousTitle = prevTitle.current;
    if (title) {
      document.title = `${title} - UMUSIC`;
    }

    return () => (document.title = previousTitle);
  }, [title]);
}
