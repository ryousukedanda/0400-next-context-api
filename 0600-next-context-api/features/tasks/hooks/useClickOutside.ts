import { RefObject, useEffect } from 'react';

export const useClickOutside = (
  ref: RefObject<HTMLElement | null>,
  onClickOutside: () => void,
  isOpen: boolean
) => {
  useEffect(() => {
    // 開いていない場合はリスナーを付けない
    if (!isOpen) return;

    const listener = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside();
      }
    };
    document.addEventListener('click', listener);

    // isOpen が false になったときにもここが必ず走る
    return () => {
      document.removeEventListener('click', listener);
    };
  }, [isOpen]);
};
