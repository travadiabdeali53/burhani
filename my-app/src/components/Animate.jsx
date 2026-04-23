import { useEffect, useState } from "react";

export default function Animate({ children, variant, delay = "", duration = "" }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const base = "transition-all ease-out";

  const hidden = {
    fadeUp: "opacity-0 translate-y-12",
    fadeDown: "opacity-0 -translate-y-12",
    fadeLeft: "opacity-0 -translate-x-12",
    fadeRight: "opacity-0 translate-x-12",
    scaleUp: "opacity-0 scale-90",
  };

  const visible = {
    fadeUp: "opacity-100 translate-y-0",
    fadeDown: "opacity-100 translate-y-0",
    fadeLeft: "opacity-100 translate-x-0",
    fadeRight: "opacity-100 translate-x-0",
    scaleUp: "opacity-100 scale-100",
  };

  return (
    <div
      className={`
        ${base}
        ${duration}
        ${delay}
        ${show ? visible[variant] : hidden[variant]}
      `}
    >
      {children}
    </div>
  );
}