import { useEffect, useState, useRef, RefObject } from 'react';

export function useOnScreen<T>(ref: RefObject<T>) {
  const [isOnScreen, setIsOnScreen] = useState(false);
  const observerRef = useRef<IntersectionObserver>(null);

  useEffect(() => {
    // @ts-ignore ts says .current is readonly
    observerRef.current = new IntersectionObserver(([entry]) => setIsOnScreen(entry.isIntersecting));
  }, []);

  useEffect(() => {
    observerRef.current?.observe(ref.current as Element);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [ref]);

  return isOnScreen;
}
