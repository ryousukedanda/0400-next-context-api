// import { RefObject, useEffect } from 'react';

// export const useClickOutside = (
//   ref: React.RefObject<HTMLElement | null>,
//   onClickOutside: () => void,
//   ignoreRef?: RefObject<HTMLDivElement | null> | RefObject<HTMLElement | null>[]
// ) => {
//   useEffect(() => {
//     const listener = (event: MouseEvent) => {
//       if (ref.current && !ref.current.contains(event.target as Node)) {
//         console.log(ref.current, event.target, ignoreRef, 'あかん');
//         onClickOutside();
//       }
//     };

//     document.addEventListener('click', listener, true);
//     return () => {
//       document.removeEventListener('click', listener);
//     };
//   }, []);
// };
// ...existing code...
import { RefObject, useEffect } from 'react';

export const useClickOutside = (
  ref: RefObject<HTMLElement | null>,
  onClickOutside: () => void,
  ignoreRef?: RefObject<HTMLElement | null> | RefObject<HTMLElement | null>[]
) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      const target = event.target as Node | null;
      if (!ref.current || !target) return;

      // ドロップダウン本体内なら無視
      if (ref.current.contains(target)) return;

      // ignoreRef が配列または単体で渡されても対応（未定義なら空配列）
      const ignoreList = Array.isArray(ignoreRef)
        ? ignoreRef
        : ignoreRef
        ? [ignoreRef]
        : [];

      for (const ir of ignoreList) {
        if (ir?.current && ir.current.contains(target)) return;
      }

      onClickOutside();
    };

    document.addEventListener('click', listener, true);
    return () => {
      document.removeEventListener('click', listener, true);
    };
  }, []);
};
// ...existing code...
