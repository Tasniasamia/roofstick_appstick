"use client";
import { useEffect, useState } from "react";

/**
 * useMobile() → checks if the viewport width is below a given breakpoint
 * @param breakpoint - optional, default 768px
 * @returns boolean → true if screen width <= breakpoint
 */
export default function useMobile(breakpoint: number = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to update on resize
    const checkMobile = () => setIsMobile(window.innerWidth <= breakpoint);

    checkMobile(); // initial check
    window.addEventListener("resize", checkMobile);

    // cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, [breakpoint]);

  return isMobile;
}
