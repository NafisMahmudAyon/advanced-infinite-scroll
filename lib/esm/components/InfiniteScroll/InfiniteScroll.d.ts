import React from "react";
interface InfiniteScrollProps {
    className?: string;
    direction?: "left" | "right";
    speed?: string;
    hoverPaused?: boolean;
    children: React.ReactNode;
}
export declare const InfiniteScroll: React.FC<InfiniteScrollProps>;
export {};
