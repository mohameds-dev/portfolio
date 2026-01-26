"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

export default function PageTransitionWrapper({ children }) {
  const pathname = usePathname();
  const [currentChildren, setCurrentChildren] = useState(children);
  const [nextChildren, setNextChildren] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState("");
  const prevPathnameRef = useRef(pathname);
  const isInitialMount = useRef(true);

  useEffect(() => {
    // Skip animation on initial mount
    if (isInitialMount.current) {
      isInitialMount.current = false;
      prevPathnameRef.current = pathname;
      setCurrentChildren(children);
      return;
    }

    // Only animate if pathname actually changed
    if (pathname !== prevPathnameRef.current) {
      const isEnteringUpdates = pathname === "/updates";
      const isLeavingUpdates = prevPathnameRef.current === "/updates";

      if (isEnteringUpdates || isLeavingUpdates) {
        setIsAnimating(true);
        setNextChildren(children);

        if (isEnteringUpdates) {
          // Entering updates: new content starts from right
          setAnimationDirection("enter-right");
        } else {
          // Leaving updates: new content starts from left
          setAnimationDirection("enter-left");
        }

        // After exit animation completes, switch to new content
        setTimeout(() => {
          setCurrentChildren(children);
          setNextChildren(null);
          setIsAnimating(false);
          setAnimationDirection("");
        }, 500);
      } else {
        // Other navigation: just update without animation
        setCurrentChildren(children);
      }

      prevPathnameRef.current = pathname;
    } else {
      setCurrentChildren(children);
    }
  }, [pathname, children]);

  const isEnteringUpdates = pathname === "/updates" && isAnimating;
  const isLeavingUpdates = prevPathnameRef.current === "/updates" && isAnimating;

  return (
    <div className="min-h-screen relative" style={{ overflow: "hidden" }}>
      {/* Current/Exiting content */}
      <div
        className={`w-full ${isLeavingUpdates ? "slide-out-right" : ""}`}
        style={{
          position: isAnimating ? "absolute" : "relative",
          top: 0,
          left: 0,
          zIndex: isLeavingUpdates ? 1 : 2,
        }}
      >
        {currentChildren}
      </div>

      {/* Next/Entering content */}
      {nextChildren && (
        <div
          className={`w-full ${
            isEnteringUpdates
              ? "slide-in-right"
              : animationDirection === "enter-left"
              ? "slide-in-left"
              : ""
          }`}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: isEnteringUpdates ? 2 : 1,
          }}
        >
          {nextChildren}
        </div>
      )}
    </div>
  );
}

