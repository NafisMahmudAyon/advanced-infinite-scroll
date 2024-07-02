import React, { useEffect } from "react";
import "./scroll.css";

const Scroller = ({ direction, speed, children }) => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  const handleMouseEnter = (e) => {
    e.currentTarget.querySelector(".scroller__inner").style.animationPlayState = "paused";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.querySelector(".scroller__inner").style.animationPlayState = "running";
  };

  return (
    <div
      className={`scroller ${direction ? `scroller--${direction}` : ""} ${
        speed ? `scroller--${speed}` : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="scroller__inner">{children}</div>
    </div>
  );
};

const Scroll = () => (
  <div>
    <h1 style={{ textAlign: "center" }}>Infinite Scroll Animation</h1>
    <Scroller direction="left" speed="fast">
      <ul className="tag-list scroller__inner">
        <li>HTML</li>
        <li>CSS</li>
        <li>JS</li>
        <li>SSG</li>
        <li>webdev</li>
        <li>animation</li>
        <li>UI/UX</li>
      </ul>
    </Scroller>
    <Scroller direction="right" speed="slow">
      <img src="https://i.pravatar.cc/150?img=1" alt="" />
      <img src="https://i.pravatar.cc/150?img=2" alt="" />
      <img src="https://i.pravatar.cc/150?img=3" alt="" />
      <img src="https://i.pravatar.cc/150?img=4" alt="" />
      <img src="https://i.pravatar.cc/150?img=5" alt="" />
      <img src="https://i.pravatar.cc/150?img=6" alt="" />
    </Scroller>
    <a className="yt" href="https://youtu.be/pKHKQwAsZLI">
      Watch the tutorial
    </a>
  </div>
);

export default Scroll;
