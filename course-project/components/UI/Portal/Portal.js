import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function Portal({ children }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    return () => setIsMounted(false);
  }, []);

  return isMounted
    ? createPortal(children, document.getElementById("portal-root"))
    : null;
}
