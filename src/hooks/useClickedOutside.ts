import React from "react";

const useClickOutside = <T extends HTMLElement>(
  ref: React.RefObject<T>,
  callback: () => void
) => {
  const handleOutsideClick = React.useCallback(
    (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    },
    [ref, callback]
  );

  React.useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [ref, callback, handleOutsideClick]);
};

export default useClickOutside;
