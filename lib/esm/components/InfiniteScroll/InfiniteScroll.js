'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import "./scroll.css";
const Scroller = ({ className = "", direction, speed = "40s", hoverPaused = false, children }) => {
    useEffect(() => {
        const scrollers = document.querySelectorAll(".scroller");
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            addAnimation();
        }
        function addAnimation() {
            scrollers.forEach((scroller) => {
                scroller.setAttribute("data-animated", "true");
                const scrollerInner = scroller.querySelector(".scroller__inner");
                if (!scrollerInner)
                    return;
                const scrollerContent = Array.from(scrollerInner.children);
                scrollerContent.forEach((item) => {
                    const duplicatedItem = item.cloneNode(true);
                    duplicatedItem.setAttribute("aria-hidden", "true");
                    scrollerInner.appendChild(duplicatedItem);
                });
            });
        }
    }, []);
    const handleMouseEnter = (e) => {
        if (!hoverPaused)
            return;
        const scrollerInner = e.currentTarget.querySelector(".scroller__inner");
        if (scrollerInner) {
            scrollerInner.style.animationPlayState = "paused";
        }
    };
    const handleMouseLeave = (e) => {
        if (!hoverPaused)
            return;
        const scrollerInner = e.currentTarget.querySelector(".scroller__inner");
        if (scrollerInner) {
            scrollerInner.style.animationPlayState = "running";
        }
    };
    return (_jsx("div", { className: `${className} scroller ${direction ? `scroller--${direction}` : ""}`, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, style: { '--animation-duration': speed }, children: _jsx("div", { className: "scroller__inner", children: children }) }));
};
export const InfiniteScroll = ({ className = "", direction = "left", speed = "40s", hoverPaused = false, children }) => (_jsx(Scroller, { className: className, direction: direction, speed: speed, hoverPaused: hoverPaused, children: children }));
