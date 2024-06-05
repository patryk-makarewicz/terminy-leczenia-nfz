'use client';

import { useEffect, useRef, useState } from 'react';

export const usePhotoLoading = () => {
  const [loaded, setLoaded] = useState(false);
  const refPhoto = useRef<HTMLImageElement>(null);
  const onLoad = () => {
    setLoaded(true);
  };
  useEffect(() => {
    if (refPhoto.current && refPhoto.current.complete) {
      onLoad();
    }
  });

  return {
    onLoad,
    loaded,
    refPhoto
  };
};
