'use client'
import React, { useEffect } from "react";
import "./scroll.css";

interface ScrollerProps {
  className?: string;
  direction?: "left" | "right";
  speed?: string;
  hoverPaused?: boolean;
  children: React.ReactNode;
}

const Scroller: React.FC<ScrollerProps> = ({className="", direction, speed = "40s", hoverPaused = false, children }) => {
  useEffect(() => {
    const scrollers = document.querySelectorAll<HTMLDivElement>(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", "true");
        const scrollerInner = scroller.querySelector<HTMLDivElement>(".scroller__inner");
        if (!scrollerInner) return;

        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true) as HTMLElement;
          duplicatedItem.setAttribute("aria-hidden", "true");
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hoverPaused) return;
    const scrollerInner = e.currentTarget.querySelector<HTMLDivElement>(".scroller__inner");
    if (scrollerInner) {
      scrollerInner.style.animationPlayState = "paused";
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hoverPaused) return;
    const scrollerInner = e.currentTarget.querySelector<HTMLDivElement>(".scroller__inner");
    if (scrollerInner) {
      scrollerInner.style.animationPlayState = "running";
    }
  };

  return (
    <div
      className={`${className} scroller ${direction ? `scroller--${direction}` : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ '--animation-duration': speed } as React.CSSProperties}
    >
      <div className="scroller__inner">{children}</div>
    </div>
  );
};

interface InfiniteScrollProps {
  className?: string;
  direction?: "left" | "right";
  speed?: string;
  hoverPaused?: boolean;
  children: React.ReactNode;
}

export const InfiniteScroll: React.FC<InfiniteScrollProps> = ({ className="", direction = "left", speed = "40s", hoverPaused = false, children }) => (
  <Scroller className={className} direction={direction} speed={speed} hoverPaused={hoverPaused}>
    {children}
  </Scroller>
);
