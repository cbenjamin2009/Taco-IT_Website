import { useEffect, useRef } from "react";

export default function HeroImageParallax({ children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const distanceFromCenter = rect.top + rect.height / 2 - windowHeight / 2;
      const normalized = Math.max(Math.min(distanceFromCenter / windowHeight, 1), -1);
      const translateY = normalized * 30;
      const rotate = normalized * 3;

      container.style.setProperty(
        "--parallax-translate",
        `${translateY}px`
      );
      container.style.setProperty("--parallax-rotate", `${rotate}deg`);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        transform:
          "translateY(var(--parallax-translate, 0px)) rotate(var(--parallax-rotate, 0deg))",
        transition: "transform 0.1s linear"
      }}
    >
      {children}
    </div>
  );
}
