"use client";

import { useState, useEffect, useRef } from "react";
import "./TypingAnimation.css";

const ROLES = [
  "Software Engineer",
  "Competitive Programmer",
  "Algorithms Course Facilitator",
  "Competitive Programming Mentor",
  "Student Organization Leader",
];

export default function TypingAnimation() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const pauseTimeoutRef = useRef(null);

  useEffect(() => {
    const currentRole = ROLES[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    // Clear any existing pause timeout
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
      pauseTimeoutRef.current = null;
    }

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        if (currentText.length < currentRole.length) {
          setCurrentText(currentRole.slice(0, currentText.length + 1));
        } else {
          // Finished typing, wait then start deleting
          pauseTimeoutRef.current = setTimeout(() => {
            setIsDeleting(true);
            pauseTimeoutRef.current = null;
          }, 2000);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentRole.slice(0, currentText.length - 1));
        } else {
          // Finished deleting, move to next role
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, typingSpeed);

    return () => {
      clearTimeout(timeout);
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
        pauseTimeoutRef.current = null;
      }
    };
  }, [currentText, isDeleting, currentRoleIndex]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  const startsWithVowel = ["a", "e", "i", "o", "u"].includes(currentText[0]?.toLowerCase() || "");
  const isComplete = !isDeleting && currentText === ROLES[currentRoleIndex];
  const article = startsWithVowel ? "an" : "a";
  return (
    <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in-delay typing-animation">
      I am {article}{" "}
      <span className="typing-text">
        {currentText}
        {isComplete && ";"}
        <span className={`cursor ${showCursor ? "visible" : "hidden"}`}>|</span>
      </span>
    </p>
  );
}

