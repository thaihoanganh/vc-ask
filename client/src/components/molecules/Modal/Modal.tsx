import React, { useEffect, useRef } from "react";

import View from "@components/atoms/View";

import { ModalPortal } from ".";

export interface ModalProps {
  children?: React.ReactNode;
  onClickOutside?: () => void;
}

export const Modal: React.FC<ModalProps> = ({ children, onClickOutside }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      onClickOutside && onClickOutside();
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  return (
    <ModalPortal>
      <View className="flex justify-center w-screen h-screen" color="overlay">
        <div className="w-full lg:w-960 mt-14 p-10" ref={ref}>
          {children}
        </div>
      </View>
    </ModalPortal>
  );
};

export default Modal;
