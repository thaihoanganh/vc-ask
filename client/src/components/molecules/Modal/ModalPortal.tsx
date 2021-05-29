import React from "react";
import ReactDOM from "react-dom";

export interface ModalPortalProps {
  children?: React.ReactNode;
}

export const ModalPortal: React.FC<ModalPortalProps> = ({ children }) => {
  const el = React.useMemo(() => document.createElement("div"), []);
  const body = document.getElementsByTagName("body")[0];

  React.useEffect(() => {
    el.classList.add("fixed");
    el.classList.add("inset-0");
    el.classList.add("z-20");
    document.body.appendChild(el);

    if (body.scrollHeight > window.innerHeight) {
      body.style.overflow = "hidden";
    }

    return () => {
      document.body.removeChild(el);

      if (body.scrollHeight > window.innerHeight) {
        body.style.overflow = "auto";
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [el]);

  return ReactDOM.createPortal(children, el);
};
