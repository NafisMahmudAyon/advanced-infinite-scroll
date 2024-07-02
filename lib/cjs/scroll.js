import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsx("div", { className: `scroller ${direction ? `scroller--${direction}` : ""} ${speed ? `scroller--${speed}` : ""}`, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, children: _jsx("div", { className: "scroller__inner", children: children }) }));
};
const Scroll = () => (_jsxs("div", { children: [_jsx("h1", { style: { textAlign: "center" }, children: "Infinite Scroll Animation" }), _jsx(Scroller, { direction: "left", speed: "fast", children: _jsxs("ul", { className: "tag-list scroller__inner", children: [_jsx("li", { children: "HTML" }), _jsx("li", { children: "CSS" }), _jsx("li", { children: "JS" }), _jsx("li", { children: "SSG" }), _jsx("li", { children: "webdev" }), _jsx("li", { children: "animation" }), _jsx("li", { children: "UI/UX" })] }) }), _jsxs(Scroller, { direction: "right", speed: "slow", children: [_jsx("img", { src: "https://i.pravatar.cc/150?img=1", alt: "" }), _jsx("img", { src: "https://i.pravatar.cc/150?img=2", alt: "" }), _jsx("img", { src: "https://i.pravatar.cc/150?img=3", alt: "" }), _jsx("img", { src: "https://i.pravatar.cc/150?img=4", alt: "" }), _jsx("img", { src: "https://i.pravatar.cc/150?img=5", alt: "" }), _jsx("img", { src: "https://i.pravatar.cc/150?img=6", alt: "" })] }), _jsx("a", { className: "yt", href: "https://youtu.be/pKHKQwAsZLI", children: "Watch the tutorial" })] }));
export default Scroll;
